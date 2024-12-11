import { Card, Paper, SxProps, Typography } from "@mui/material";
import ImageSearchIcon from '@mui/icons-material/ImageSearch';

export default function NoResultsCard({sx}: { sx: SxProps }) {
  return (
    <Paper sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', p: 5, ...sx}}>
      <ImageSearchIcon sx={{fontSize: 85}} />
      <Typography variant="h2" sx={{mt: 4, mb: 2}}>
        Not Found
      </Typography>
      <Typography variant="subtitle1" color="grey">
        The searched object was not found in the database
      </Typography>
    </Paper>
  )
}