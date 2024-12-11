from dataclasses import dataclass
from functools import lru_cache

import requests
from bs4 import BeautifulSoup
from utils import Timming

SESAME_BASE_URL = 'http://cds.unistra.fr/cgi-bin/nph-sesame/-oxp/SNV'

@dataclass
class SesameInfo:
  pos: str = None
  ra: float = None
  dec: float = None
  otype: str = None
  otype_info: str = None
  mtype: str = None
  


taxonomy = {
  'G': 'Galaxy',
  'G?': 'Galaxy',
  'LSB': 'Low Surface Brightness Galaxy',
  'bCG': 'Blue Compact Galaxy',
  'SBG': 'Starburst Galaxy',
  'H2G': 'HII Galaxy',
  'EmG': 'Emission-line galaxy',
  'AGN': 'Active Galaxy Nucleus',
  'AG?': 'Active Galaxy Nucleus',
  'SyG': 'Seyfert Galaxy',
  'Sy?': 'Seyfert Galaxy',
  'Sy1': 'Seyfert 1 Galaxy',
  'Sy2': 'Seyfert 2 Galaxy',
  'rG': 'Radio Galaxy',
  'LIN': 'LINER-type Active Galaxy Nucleus',
  'QSO': 'Quasar',
  'Q?': 'Quasar',
  'Bla': 'Blazar',
  'Bz?': 'Blazar',
  'BLL': 'BL Lac',
  'BL?': 'BL Lac',
  'GiP': 'Galaxy in Pair of Galaxies',
  'GiG': 'Galaxy towards a Group of Galaxies',
  'GiC': 'Galaxy towards a Cluster of Galaxies',
  'BiC': 'Brightest Galaxy in a Cluster',
  'BCG': 'Brightest Galaxy in a Cluster',
  'IC': 'Interacting Galaxies',
  'PaG': 'Pair of Galaxies',
  'GrG': 'Group of Galaxies',
  'Gr?': 'Group of Galaxies',
  'CGG': 'Compact Group of Galaxies',
  'ClG': 'Cluster of Galaxies',
  'C?G': 'Cluster of Galaxies',
  'PCG': 'Proto Cluster of Galaxies',
  'PCG?': 'Proto Cluster of Galaxies',
  'SCG': 'Supercluster of Galaxies',
  'SC?': 'Supercluster of Galaxies',
  'vid': 'Underdense Region of the Universe',
}



@lru_cache(maxsize=256)
def fetch_sesame_name(object_name: str):
  resp = requests.get(SESAME_BASE_URL + '?' + object_name)
  tree = BeautifulSoup(resp.text, features='xml')
  pos = tree.find('jpos')
  if pos: pos = pos.text
  ra = tree.find('jradeg')
  if ra: ra = float(ra.text)
  dec = tree.find('jdedeg')
  if dec: dec = float(dec.text)
  otype = tree.find('otype')
  if otype: otype = otype.text
  mtype = tree.find('MType')
  if mtype: mtype = mtype.text
  otype_info = None
  if mtype: otype_info = taxonomy.get(otype)
  return SesameInfo(pos, ra, dec, otype, otype_info, mtype)
  
  
if __name__ == "__main__":
  fetch_sesame_name('149.1601751569129 12.382585785964434')