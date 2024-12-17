'use client'

import { IconButton, InputBase, Paper, SxProps, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import SendIcon from '@mui/icons-material/Send';

interface SearchBarProps {
  elevation?: number
  sx?: SxProps
}

export default function SearchBar(
  { elevation, sx }: SearchBarProps = { elevation: 16, sx: {} }
) {
  return (
    <Paper
      component="form"
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: 400,
        borderRadius: "50px",
        ...sx
      }}
      elevation={elevation}
      action="/search"
    // onSubmit={handleSubmit}
    >
      <IconButton sx={{ p: '8px' }}>
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Galaxy name or position"
        name="obj"
      />
      <IconButton type="submit" sx={{ p: '8px' }}>
        <SendIcon />
      </IconButton>
    </Paper>
  )
}