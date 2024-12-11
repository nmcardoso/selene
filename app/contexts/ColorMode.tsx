'use client'

import { createContext, useContext, useReducer, useState, useMemo } from 'react'
import themeFactory from '@/theme'
import { ThemeProvider } from '@mui/material/styles';


export const ColorModeContext = createContext<any>({ toggleColorMode: () => {} })


export function ToggleColorMode(props: React.PropsWithChildren) {
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const [mode, setMode] = useState<'light' | 'dark'>('dark')
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    [],
  );

  const themeWithColorMode = useMemo(() => themeFactory(mode), [mode])

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={themeWithColorMode}>
        { props.children }
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}


export function useColorMode() {
  return useContext(ColorModeContext)
}