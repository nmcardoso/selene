'use client'

/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CasinoIcon from '@mui/icons-material/Casino';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import HeaderToolbar from './components/HeaderToolbar';
import Logo from './components/Logo';
import SearchBar from './components/SearchBar';

export default function Home() {
  // const router = useRouter()
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
    }}>
      
      <Box sx={{flexGrow: 0, width: "100%"}}>
        <HeaderToolbar elevation={0} />
      </Box>
      <Box sx={{flexGrow: 1, width: "100%"}}>
        
      
    <Box
      sx={{
        my: 0,
        py: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >

      <Logo width={350} sx={{pb: '38px'}} />

      <SearchBar sx={{p: '2px 4px'}} />

      <Box sx={{pt: '75px', display: 'flex', justifyContent: 'space-evenly', width: 400}}>
        <Button variant="outlined"><CasinoIcon sx={{mr: 1}} /> Random Galaxy</Button>
        <Button variant="outlined"><HelpOutlineIcon sx={{mr: 1}} /> Help</Button>
      </Box>

      <Box sx={{height: '100px'}} />
    </Box>

    </Box>
  
    </Box>
  );
}