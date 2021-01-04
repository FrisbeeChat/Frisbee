import '../styles/globals.css'
import React from 'react';
import { ConfigProvider, Context } from '../components/context'
import axios from 'axios';
import { NextComponentType, NextPageContext } from 'next';

import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ConfigProvider>
      <Component {...pageProps}/>
    </ConfigProvider>
  )
}

export default MyApp;
