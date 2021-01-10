import '../styles/globals.css'
import React from 'react';
import { ConfigProvider } from '../components/context'
import Login from './login';
import type { AppProps } from 'next/app'
import Head from "next/head";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#E07860",
      contrastText: "white",
    },
    secondary: {
      main: '#78D1AD',
      contrastText: "white",
    }
  }
})

const MyApp = ({ Component, pageProps }: AppProps) => {
  if (Component === Login) {
    return (
      <MuiThemeProvider theme={theme}>
        <html lang="en" />
        <Head>
          <title>Login</title>
          <meta charSet="utf-8"/>
          <meta name="description" content="Accessibility focused desktop chat app for old people, young people, and everyone in between"></meta>
          <meta name="keywords" content="Next.js, Blake Whitham, Derek Velzy, chat, post, card, postcard, post-card"></meta>
          <meta name="author" content="William Blake Whitham, Derek Velzy"></meta>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="shortcut icon" href="https://frisbee-images.s3-us-west-1.amazonaws.com/postcard-icon.png" />
        </Head>
        <Login {...pageProps}/>
      </MuiThemeProvider>
    )
  } else {
    return (
      <ConfigProvider>
        <html lang="en" />
        <Head>
          <title>Postcard</title>
          <meta charSet="utf-8"/>
          <meta name="description" content="Accessibility focused desktop chat app for old people, young people, and everyone in between"></meta>
          <meta name="keywords" content="Next.js, Blake Whitham, Derek Velzy, chat, post, card, postcard, post-card"></meta>
          <meta name="author" content="William Blake Whitham, Derek Velzy"></meta>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="shortcut icon" href="https://frisbee-images.s3-us-west-1.amazonaws.com/postcard-icon.png" />
        </Head>
        <MuiThemeProvider theme={theme}>
          <Component {...pageProps}/>
        </MuiThemeProvider>
      </ConfigProvider>
    )
  }
}

export default MyApp;
