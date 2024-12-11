import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { LightMode, DarkMode, SpaceBar } from '@mui/icons-material';
import Logo from './Logo';
import SearchBar from './SearchBar';
import { Container, Grid, SxProps, useTheme } from '@mui/material';
import { useColorMode } from '@/contexts/ColorMode';


interface ToolbarContentProps {
  logo?: boolean
  searchBar?: boolean
}

function ToolbarContent({logo, searchBar}: ToolbarContentProps = {logo: false, searchBar: false}) {
  const theme = useTheme()
  const colorMode = useColorMode()

  return (
    <Grid container justifyContent="center" alignItems="center">
      {
        logo && <Grid item><Logo colorMode="dark" width={180} sx={{mr: 4, pt: '4px'}} /></Grid>
      }

      {
        searchBar && <Grid item><SearchBar elevation={0} /></Grid>
      }

      <Grid item><Box sx={{flexGrow: 1}}/></Grid>

      <Grid item flexGrow={1}></Grid>

      <Grid item>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === 'dark' ? <LightMode /> : <DarkMode />}
        </IconButton>
      </Grid>
    </Grid>
  )
}

interface ButtonAppBarProps {
  searchBar?: boolean
  logo?: boolean
  elevation?: number
  container?: boolean
  sx?: SxProps
}

export default function ButtonAppBar({
  searchBar,
  logo,
  elevation,
  container,
  sx,
}: ButtonAppBarProps = {
  searchBar: false, 
  logo: false, 
  elevation: 0, 
  container: false, 
  sx: {}
}) {
  let toolbarSx = {}
  if (elevation === 0) {
    toolbarSx = {backgroundColor: 'background.default', color: 'text.primary'}
  }
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static" elevation={elevation} sx={sx}>
        <Toolbar sx={toolbarSx}>
          {
            container ? (
              <Container>
                <ToolbarContent logo={logo} searchBar={searchBar} />
              </Container>
            ) : (
              <ToolbarContent logo={logo} searchBar={searchBar} />
            )
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}