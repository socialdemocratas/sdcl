import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery';

import { createTheme, ThemeProvider, styled, responsiveFontSizes, useTheme } from '@mui/material/styles';
import Head from 'next/head'
import Header from '../components/Header'
import MobileBottomBar from '../components/MobileBottomBar';
import React from 'react';

const theme = responsiveFontSizes(createTheme({
  palette: {
    primary: {
      main: '#e62154'
    },
    bg: {
      main: '#F3FFFF'
    },
    navSelected: {
      main: '#262626'
    }
  },
  typography: {
    //fontFamily: 'josefin sans',
    //fontFamily: '"Open Sans", sans-serif;'
  },
}), { factor: 2.5 });

function MyApp({ Component, pageProps }) {
  const isSmall = useMediaQuery(theme.breakpoints.down('md'));
  const [title, setTitle] = React.useState('...');

  return <>
    <Head>
      <meta charSet="UTF-8" />
      <title>{title} - SDCL</title>
      <meta name="description" content="Socialdemócratas de Chile" />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      {false && <link rel="icon" type="image/png" href={logo2.src} />}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
    </Head>
    <CssBaseline />
    <Box>
      <ThemeProvider theme={theme}>
        <Header title={title} />
        <Component setTitle={setTitle} {...pageProps} />
        {isSmall && <MobileBottomBar />}
      </ThemeProvider>
    </Box>
  </>
}

export default MyApp
