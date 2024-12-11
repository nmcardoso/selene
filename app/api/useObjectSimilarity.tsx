'use client'

import { QueryFunction, QueryFunctionContext, QueryKey, useQuery } from "@tanstack/react-query";
import client from './client'
import { ObjectSearchResponse } from "@/interfaces/api";


type ObjectType = string | null | undefined
type OptionsType = {limit?: number} | undefined
type QueryKeyType = [string, ObjectType, OptionsType]


const fetchData: QueryFunction<ObjectSearchResponse, QueryKeyType, never> = async ({ queryKey }) => {
  const [_, obj, options] = queryKey
  const resp = await client.get('/similarity', {
    params: { obj, limit: options?.limit }
  })
  return resp?.data
}


export function useObjectSimilarity(obj: ObjectType, options: OptionsType) {
  const query = useQuery<ObjectSearchResponse, any, any, QueryKeyType>({
    queryFn: fetchData,
    queryKey: ['obj_similarity', obj, options],
    enabled: !!obj
  })
  return query
}