import GalaxyCutoutImage from "@/components/GalaxyCutoutImage";
import { Box, Card, CardContent, CardMedia, Chip, Divider, Grid, Link, Paper, Skeleton, Stack, SxProps, Tooltip, Typography } from "@mui/material";
import PlaceIcon from '@mui/icons-material/Place';
import SearchIcon from '@mui/icons-material/Search';
import ShapeLineIcon from '@mui/icons-material/ShapeLine';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import InfoIcon from '@mui/icons-material/Info';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import JoinInnerIcon from '@mui/icons-material/JoinInner';
import CompareIcon from '@mui/icons-material/Compare';
import StorageIcon from '@mui/icons-material/Storage'
import { numberSeparator, round } from "@/utils/number"
import { NameSolverResponse, ObjectSearchResponse } from "@/interfaces/api";
import { computePixScale } from "@/utils/pixscale";


function ExternalServiceChip({href, label, sx}: {href: string, label: string, sx?: SxProps}) {
  return (
    <Typography component="div">
      <Link href={href} underline="none" target="_blank">
        <Tooltip title={`Open object in ${label}`}>
          <Chip 
            size="small" 
            label={label} 
            sx={sx}
            deleteIcon={<OpenInNewIcon />} 
            onDelete={() => {}} 
            onClick={() => {}} 
          />
        </Tooltip>
      </Link>
    </Typography>
  )
}


function QueryRow({obj}: {obj?: string | null}) {
  return (
    <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', mb: 0.75}}>
      <ImageSearchIcon fontSize="small" sx={{mr: 1}} />
      <Typography component="span" mr={5}>
        <b>Query:</b>
      </Typography>
      <Typography component="span" mr={1}>
        {obj}
      </Typography>
      { 
        obj && <ExternalServiceChip 
          label="CDS" 
          sx={{mr: 1}}
          href={`http://cdsportal.u-strasbg.fr/?target=${encodeURIComponent(obj)}`} />
      }
      { 
        obj && <ExternalServiceChip 
          label="Simbad"
          sx={{mr: 1}} 
          href={`http://simbad.u-strasbg.fr/simbad/sim-id?Ident=${encodeURIComponent(obj.toUpperCase())}`} />
      }
      { 
        obj && <ExternalServiceChip 
          label="NED" 
          href={`https://ned.ipac.caltech.edu/cgi-bin/objsearch?extend=no&hconst=73&omegam=0.27&omegav=0.73&corr_z=1&out_csys=Equatorial&out_equinox=J2000.0&obj_sort=RA+or+Longitude&of=pre_text&zv_breaker=30000.0&list_limit=5&img_stamp=YES&objname=${encodeURIComponent(obj.toUpperCase())}`} />
      }
    </Box>
  )
}


function PositionRow({ns}: {ns?: NameSolverResponse}) {
  if (ns?.ra && ns?.dec) {
    return (
      <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', mb: 0.75}}>
        <PlaceIcon fontSize="small" sx={{mr: 1}} />
        <Typography component="span" mr={3}>
          <b>Position:</b>
        </Typography>
        <Typography component="span">
          {ns?.pos} ({round(ns?.ra, 4)}&deg; {round(ns?.dec, 4)}&deg;)
        </Typography>
      </Box>
    )
  }
  return (
    <Skeleton width="90%" animation="wave" variant="rounded" sx={{my: 1.75}} />
  )
}



function MorphologicalTypeRow({ns}: {ns?: NameSolverResponse}) {
  let type = ''
  if (ns?.otype) type += ns.otype
  if (ns?.otype_info) type += ' (' + ns.otype_info + ')'
  if (ns?.mtype) type += ' / ' + ns.mtype
  if (!type) type = 'undefined'
  if (ns?.ra && ns?.dec) {
    return (
      <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <ShapeLineIcon fontSize="small" sx={{mr: 1}} />
        <Typography component="span" mr={1.1}>
          <b>Taxonomy:</b>
        </Typography>
        <Typography component="span">
          {type}
        </Typography>
      </Box>
    )
  }
  return (
    <Skeleton width="75%" animation="wave" variant="rounded" />
  )
}




function SearchCountRow({count, isLoading}: {count?: number, isLoading?: boolean}) {
  return (
    <>
      {
        isLoading ? (
          <Skeleton width="30%" animation="wave" />
        ) : (
          <Typography variant="body2" sx={{mt: 1}}>
            <i>Searched {numberSeparator(count)} objects</i>
          </Typography>
        ) 
      }
    </>
  )
}



function QueryTimeRow({
  title, 
  icon, 
  time, 
  qSuccess, 
  qLoading,
  skeletonWidth
}: {
  title: string, 
  icon: any, 
  time: number
  qSuccess?: boolean, 
  qLoading?: boolean,
  skeletonWidth: string | number, 
}) {
  if (qLoading) {
    return (
    <Skeleton 
      width={skeletonWidth} 
      variant="rounded" 
      animation="wave" 
      sx={{mb: 1.5}} />
    )
  }
  const color = time > 10000 ? 'error' : (time < 3000 ? 'success' : 'warning')
  return (
    <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', mb: 1}}>
      {icon}
      <Typography component="span" mr={1.5} ml={1}>
        {title}
      </Typography>
      <Typography component="div">
        {
          qSuccess && time < 2 ? (
            <Chip
              size="small"
              icon={<AccessTimeIcon />}
              label="0ms | cached"
              color="primary"
              onClick={() => {}}
            />
          ) : (
            <Chip 
              size="small" 
              icon={<AccessTimeIcon />} 
              label={`${round(time, 0)}ms`} 
              color={color}
              onClick={() => {}}
            />
          )
        }
      </Typography>
    </Box>
  )
}



function HeaderRow({title, icon}: {title: string, icon: 'info' | 'stat'}) {
  return (
    <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
      {
        icon === 'info' ? (
          <InfoIcon fontSize="small" sx={{mr: 1}} /> 
        ) : (
          <QueryStatsIcon fontSize="small" sx={{mr: 1}} />
        )
      }
      <Typography component="span">
        <b>{title}</b>
      </Typography>
    </Box>
  )
}


interface SearchSummaryCardProps {
  obj?: string | null
  qResult?: ObjectSearchResponse
  qSuccess?: boolean
  qError?: boolean
  qLoading?: boolean
}

export default function SearchSummaryCard({obj, qResult, qSuccess, qError, qLoading}: SearchSummaryCardProps) {
  let pixscale = 0.15
  if (!!qResult?.conesearch.mag_r && !!qResult.conesearch.r50) {
    pixscale = computePixScale(qResult?.conesearch.mag_r, qResult?.conesearch.r50, 300)
  }
  return (
    <Card elevation={2} sx={{display: 'flex'}}>
      {
        qResult?.namesolver.ra && qResult.namesolver.dec ? (
          <CardMedia
            component="img"
            sx={{width: 183, height: 183}}
            image={`https://www.legacysurvey.org/viewer/cutout.jpg?ra=${qResult.namesolver.ra}&dec=${qResult.namesolver.dec}&size=300&pixscale=${pixscale}&layer=ls-dr10-grz`}
            alt=""
          />
        ) : (
          <Skeleton variant="rectangular" width="183px" height="183px" animation="wave" />
        )
      }
      <CardContent sx={{width: '100%'}} style={{paddingBottom: '16px'}}>
        <Grid container sx={{width: '100%'}} columnSpacing={2}>
          <Grid item xs={12} md={8}>
            <Stack>
              <HeaderRow title="Object Info" icon="info" />
              <Divider sx={{mb: 1, pt: 0.25}} />
              <QueryRow obj={obj} />
              <PositionRow ns={qResult?.namesolver} />
              {/* <MorphologicalTypeRow ns={qResult?.namesolver} /> */}
              <SearchCountRow count={qResult?.count} isLoading={qLoading} />
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Stack>
              <HeaderRow title="Query Latency" icon="stat" />
              <Divider sx={{mb: 1, pt: 0.25}} />
              <QueryTimeRow 
                title="Name solver" 
                qSuccess={qSuccess}
                qLoading={qLoading}
                time={qResult?.namesolver?.time_ms || 0}
                icon={<FingerprintIcon fontSize="small" />}
                skeletonWidth="80%" />
              <QueryTimeRow 
                title="Crossmatch" 
                qSuccess={qSuccess}
                qLoading={qLoading}
                time={qResult?.conesearch.time_ms || 0}
                icon={<JoinInnerIcon fontSize="small" />}
                skeletonWidth="75%" />
              <QueryTimeRow 
                title="Similarity search" 
                qSuccess={qSuccess}
                qLoading={qLoading}
                time={qResult?.similarity.time_ms || 0}
                icon={<CompareIcon fontSize="small" />}
                skeletonWidth="85%" />
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}