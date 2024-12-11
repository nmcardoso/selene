'use client'

import { QueryKey, useQuery } from "@tanstack/react-query";
import client from './client'

const fetchData = async ({ queryKey }: { queryKey: QueryKey }) => {
  const [_, embedding] = queryKey
  const resp = await client.get('/similarity', {
    params: { embedding }
  })
  return resp?.data
}


export function useSimilaritySearch(embedding: string | null) {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ['similarity', embedding],
    enabled: !!embedding
  })
  return query
}