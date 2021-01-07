import React, {useRef, useState} from 'react';

import Link from 'next/link';
import Header from '../components/header/header'
// import Footer from '../components/footer/footer'

import Search from '../components/search/search'



const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Search/>
    </div>
  )
}

export default App;