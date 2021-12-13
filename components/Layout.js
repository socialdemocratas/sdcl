import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery';

import { createTheme, ThemeProvider, responsiveFontSizes, useTheme } from '@mui/material/styles';
import Head from 'next/head'
import Header from './Header'
import MobileBottomBar from './MobileBottomBar2';
import React from 'react';

const theme = responsiveFontSizes(createTheme({
  palette: {
    primary: {
      main: '#000000' // '#e62154'
    },
    bg: {
      main: '#dbfaef' //#dcfcf1' // '#dbfaef' //f1fdf9' // D7FAEF
    },
    navSelected: {
      main: '#262626'
    }
  },
  typography: {
    //fontFamily: 'Inter',
    //fontFamily: '"Open Sans", sans-serif;'
  },
}), { factor: 2.5 });

export default function Layout({ title, tabs, children, variant }) {
  const isSmall = useMediaQuery(theme.breakpoints.down('md'));
  console.log('theme.palette.bg.main', theme.palette.bg.main)
  return <ThemeProvider theme={theme}>
    <Head>
      <meta charSet="UTF-8" />
      <title>{title} - SDCL</title>
      <meta name="description" content="Socialdemócratas de Chile" />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <meta name="theme-color" content="#dbfaef" />
      {false && <link rel="icon" type="image/png" href={logo2.src} />}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Inter:wght@300;400;500;700&display=swap"
      />
    </Head>
    <CssBaseline />
    <Box>
      { !isSmall && <Header title={title} /> }
        {children}
        {isSmall && <MobileBottomBar variant={variant}>{tabs}</MobileBottomBar>}
    </Box>
  </ThemeProvider>
}
