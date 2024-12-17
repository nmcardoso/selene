/* eslint-disable @next/next/no-img-element */
'use client'

import { useSearchParams } from "next/navigation"
import { Container, Divider, ImageList, ImageListItem, Skeleton, Typography } from "@mui/material"
import HeaderToolbar from '@/components/HeaderToolbar'
import client from "@/api/client"
import { useSemaphore } from "@/hooks/useSemaphore"
import SearchSummaryCard from "./SearchSummaryCard"
import { useObjectSimilarity } from '@/api/useObjectSimilarity'
import { ObjectInfo, ObjectSearchResponse } from "@/interfaces/api"
import { Suspense } from "react"
import NoResultsCard from "./NoResultsCard"
import { computePixScale } from "@/utils/pixscale"


const downloadImage = async ({ra, dec, r50, mag_r}: {ra: string | number, dec: string | number, r50: number, mag_r: number}) => {
  let pixscale = 0.20
  if (!!r50 && !!mag_r) {
    pixscale = computePixScale(mag_r, r50, 300)
  }
  const url = `/cutout.jpg?ra=${ra}&dec=${dec}&size=300&pixscale=${pixscale}`
  const resp = await client.get(url, {responseType: 'blob'})
  return URL.createObjectURL(resp.data)
}


function Search() {
  const searchParams = useSearchParams()
  const obj = searchParams.get('obj')

  const { data: queryData, isSuccess, isError, isLoading } = useObjectSimilarity(obj, { limit: 60 })
  
  const { semaphore } = useSemaphore({
    data: queryData?.similarity?.result, 
    concurrency: 6,
    handler: downloadImage,
  })

  const searchResult = queryData?.similarity?.result || Array(24).fill(undefined).map((_, i) => { return {id: i} })

  return <>
    <HeaderToolbar logo searchBar container elevation={2} sx={{mb: 3}} />
    <Container>
      <SearchSummaryCard 
        obj={obj} 
        qResult={queryData} 
        qSuccess={isSuccess} 
        qError={isError} 
        qLoading={isLoading} />
      <Typography variant="h5" sx={{mt: 6}}>Similar Galaxies</Typography>
      <Divider />
      {
        (isSuccess || isLoading) && searchResult.length > 0 ? (
          <ImageList sx={{ width: '100%'}} cols={6} rowHeight={200}>
            {searchResult.map((item: ObjectInfo, index: number) => (
              <ImageListItem key={item.id} sx={{borderRadius: 2}}>
                {
                  semaphore?.output?.[index] ? (
                    <img 
                      data-x={`ra=${semaphore.data[index].ra}&dec=${semaphore.data[index].dec}`}
                      src={semaphore?.output?.[index]} 
                      alt="" 
                      width={150} 
                      height={150}
                      style={{borderRadius: '4px'}} />
                  ) : (
                    <Skeleton 
                      width="100%" 
                      height="100%" 
                      variant="rectangular" 
                      animation="pulse" />
                  )
                }
              </ImageListItem>
            ))}
          </ImageList>
        ) : (
          <NoResultsCard sx={{mt: 6}} />
        )
      }
    </Container>
  </>
}



export default function SearchPage() {
  return (
    <Suspense>
      <Search />
    </Suspense>
  )
}