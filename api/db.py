from dataclasses import dataclass
from functools import cache, lru_cache
from typing import List, Literal, Optional

import psycopg
from psycopg.rows import class_row
from utils import Timming

DB_USER = 'dev'
DB_NAME = 'selene'


@dataclass
class ObjectInfo:
  ra: float
  dec: float
  id: Optional[int] = None
  mag_r: Optional[float] = None
  embedding: Optional[str] = None
  r50: Optional[float] = None
  score: Optional[float] = None
  
  
metric_map = {
  'cos': '<=>',
  'dot': '<#>',
  'l1': '<+>',
  'l2': '<->',
  'jaccard': '<\\\\%>',
}



def connect():
  conn = psycopg.connect("dbname='selene' user='dev' password='123'")
  return conn


def disconnect(conn: psycopg.Connection):
  conn.close()


@lru_cache(maxsize=1024)
def cone_search(ra: float, dec: float, radius: float) -> ObjectInfo:
  conn = connect()
  with conn.cursor(row_factory=class_row(ObjectInfo)) as cursor:
    sql = '''
      SELECT *
      FROM similarity 
      WHERE q3c_radial_query(ra, dec, %s, %s, %s)
    '''
    cursor.execute(sql, (ra, dec, radius / 3600))
    results = cursor.fetchone()
    disconnect(conn)
    return results if results else ObjectInfo(None, None)
  

@lru_cache(maxsize=1024)
def similarity_search(
  embedding: str, 
  limit: int = 20, 
  metric: Literal['cos', 'dot', 'l1', 'l2', 'jaccard'] = 'dot'
) -> List[ObjectInfo]:
  conn = connect()
  with conn.cursor(row_factory=class_row(ObjectInfo)) as cursor:
    sql = f'''
      SELECT id, ra, dec, r50, mag_r, embedding {metric_map[metric]} %s as score
      FROM similarity
      ORDER BY score
      LIMIT %s
      OFFSET 1
    '''
    print(sql)
    cursor.execute(sql, (embedding, limit))
    results = cursor.fetchall()
    disconnect(conn)
    return results if results else []


@cache
def object_count():
  conn = connect()
  with conn.cursor() as cursor:
    sql = '''
      SELECT count(*) AS count
      FROM similarity
    '''
    cursor.execute(sql)
    result = cursor.fetchone()[0]
    disconnect(conn)
    return result