'use client'

import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToggleColorMode } from './contexts/ColorMode';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const queryClient = new QueryClient()

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          {/* <ThemeProvider theme={theme}> */}
          <ToggleColorMode>
            
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <QueryClientProvider client={queryClient}>
              
              {props.children}
              </QueryClientProvider>
          </ToggleColorMode>
          {/* </ThemeProvider> */}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}