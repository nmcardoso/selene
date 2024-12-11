import { Skeleton } from "@mui/material"
import { computePixScale } from "@/utils/pixscale"

/* eslint-disable @next/next/no-img-element */
export default function GalaxyCutoutImage({
  ra, 
  dec,
  width=200,
  height=200,
}: {
  ra: number | null, 
  dec: number | null,
  width: number,
  height: number,
}) {
  return <>
    {
      (!!ra && !!dec) ? (
        <img
          style={{
            width: width,
            height: height,
            borderRadius: '16px',
          }}
          alt=""
          src={`https://www.legacysurvey.org/viewer/cutout.jpg?ra=${ra}&dec=${dec}&width=${width}&height=${height}&pixscale=0.35&layer=ls-dr10-grz`}
        />
        // <Skeleton variant="rounded" animation="pulse" width={width} height={width} />
      ) : (
        <Skeleton variant="rounded" width={width} height={width} />
      )
    }
  </>
}