import '../styles/globals.css'
import React from 'react';
import { ConfigProvider } from '../components/context'
import Login from './login';
import type { AppProps } from 'next/app'
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
        <Login {...pageProps}/>
      </MuiThemeProvider>
    )
  } else {
    return (
      <ConfigProvider>
        <MuiThemeProvider theme={theme}>
          <Component {...pageProps}/>
        </MuiThemeProvider>
      </ConfigProvider>
    )
  }
}

export default MyApp;
