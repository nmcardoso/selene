from dataclasses import dataclass
from pathlib import Path
from typing import List, Literal

import requests
from astromodule.utils import iauname
from blacksheep import Application, Content, Response, get
from db import ObjectInfo, cone_search, object_count, similarity_search
from external import SesameInfo, fetch_sesame_name
from utils import Timming

CUTOUT_CACHE_DIR = Path(__file__).parent / 'cutout_cache'
CUTOUT_CACHE_DIR.mkdir(parents=True, exist_ok=True)

session = requests.Session()
session.headers.update({
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
  'Accept-Encoding': 'gzip, deflate, br, zstd',
  'Accept-Language': 'pt-BR,pt;q=0.8,en-US;q=0.5,en;q=0.3',
  'Connection': 'keep-alive',
  'Host': 'www.legacysurvey.org',
  'Priority': 'u=1',
  'Sec-Fetch-Dest': 'document',
  'Sec-Fetch-Mode': 'navigate',
  'Sec-Fetch-Site': 'none',
  'Sec-Fetch-User': '?1',
  'TE': 'trailers',
  'Upgrade-Insecure-Requests': '1',
  'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:126.0) Gecko/20100101 Firefox/126.0',
})

app = Application()

app.use_cors(
  allow_methods="*",
  allow_origins="*",
  allow_headers="* Authorization",
  max_age=1000,
)


@dataclass
class EmbeddingSearchResponse:
  result: List[ObjectInfo]
  time_ms: float = None
  
  
@dataclass
class ConeSearchResponse(ObjectInfo):
  time_ms: float = None
  

@dataclass
class NameSolverResponse(SesameInfo):
  time_ms: float = None
  
  
@dataclass
class ObjectSearchResponse:
  namesolver: NameSolverResponse
  conesearch: ConeSearchResponse
  similarity: EmbeddingSearchResponse
  count: int



@get('/')
def home() -> str:
  return 'hello'


@get('/cone')
def cone(ra: float, dec: float, radius: float = 3):
  t = Timming()
  cone_result = cone_search(ra, dec, radius)
  return ConeSearchResponse(cone_result.ra, cone_result.dec, cone_result.id, cone_result.embedding, t.duration_ms())


@get('/similarity')
def similarity(
  embedding: str = None, 
  obj: str = None, 
  limit: int = 20, 
  metric: str = 'cos'
):
  if obj is not None:
    t1 = Timming()
    ns_result = fetch_sesame_name(obj)
    t1.end()
    t2 = Timming()
    if ns_result:
      cone_result = cone_search(ns_result.ra, ns_result.dec, 3)
    else:
      cone_result = ObjectInfo(None, None)
    t2.end()
    t3 = Timming()
    if cone_result and cone_result.ra and cone_result.dec:
      similarity_result = similarity_search(cone_result.embedding, limit, metric)
    else:
      similarity_result = []
    t3.end()
    print('ra,dec')
    for e in similarity_result:
      print(f'{e.ra},{e.dec}')
    return ObjectSearchResponse(
      namesolver=NameSolverResponse(ns_result.pos, ns_result.ra, ns_result.dec, ns_result.otype, ns_result.otype_info, ns_result.mtype, t1.duration_ms()),
      conesearch=ConeSearchResponse(cone_result.ra, cone_result.dec, cone_result.id, cone_result.mag_r, cone_result.embedding, cone_result.r50, t2.duration_ms()),
      similarity=EmbeddingSearchResponse(similarity_result, t3.duration_ms()),
      count=object_count()
    )
  return similarity_search(embedding, limit, metric)


@get('/ns')
def ns(obj: str):
  return fetch_sesame_name(obj)


@get('/cutout.jpg')
async def cutout(
  ra: float, 
  dec: float, 
  pixscale: float = 0.3, 
  size: int = None, 
  width: int = None, 
  height: int = None,
  layer: str = 'ls-dr10-grz',
):
  if size is not None:
    width, height = size, size
  else:
    if width is None or height is None:
      width, height = 300, 300
      
  cutout_id = iauname(ra, dec)
  cutout_path = CUTOUT_CACHE_DIR / f'{cutout_id}_s{pixscale:.3f}_{width}x{height}.jpg'
  if cutout_path.exists():
    return Response(200, content=Content(b'image/jpeg', data=cutout_path.read_bytes()))
  else:
    params = {
      'ra': ra,
      'dec': dec,
      'width': width,
      'height': height,
      'pixscale': pixscale,
      'layer': layer,
    }
    resp = session.get('https://www.legacysurvey.org/viewer/cutout.jpg', params=params)
    if resp.status_code == 200:
      cutout_path.write_bytes(resp.content)
    return Response(resp.status_code, content=Content(b'image/jpeg', data=resp.content))


if __name__ == "__main__":
  import uvicorn

  uvicorn.run('app:app', host="127.0.0.1", port=44777, log_level="debug", lifespan="on", reload=True)