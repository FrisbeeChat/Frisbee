import * as React from 'react';

import Link from 'next/link';
import Header from '../components/header/header'
// import Footer from '../components/footer/footer'

import Connections from '../components/connect/connections'


const App: React.FC = () => {
  return (
    <div>
        <Header/>
        <br />
          <Connections />
        <Link href="/">
          HOME
        </Link>
    </div>
  )
}

export default App;