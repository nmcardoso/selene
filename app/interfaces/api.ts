export interface ObjectInfo {
  ra: number
  dec: number
  id?: number
  embedding?: string
  r50?: number
  mag_r?: number
}

interface SesameInfo {
  pos?: string
  ra?: number
  dec?: number
  otype?: string
  otype_info?: string
  mtype?: string
}

export interface ConeSearchResponse extends ObjectInfo {
  time_ms?: number
}

export interface EmbeddingSearchResponse {
  result: ObjectInfo[]
  time_ms?: number
}

export interface NameSolverResponse extends SesameInfo {
  time_ms?: number
}

export interface ObjectSearchResponse {
  namesolver: NameSolverResponse
  conesearch: ConeSearchResponse
  similarity: EmbeddingSearchResponse
  count: number
}