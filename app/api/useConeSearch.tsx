'use client'

import { QueryKey, useQuery } from "@tanstack/react-query";
import client from './client'

const fetchData = async ({ queryKey }: { queryKey: QueryKey }) => {
  const [_, ra, dec] = queryKey
  const resp = await client.get('/cone', {
    params: { ra, dec }
  })
  return resp?.data
}


export function useConeSearch(ra: number | null, dec: number | null) {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ['similarity', ra, dec],
    enabled: !!ra && !!dec
  })
  return query
}