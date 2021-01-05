import React, {useRef, useState} from 'react';

import Link from 'next/link';
import Header from '../components/header/header'
// import Footer from '../components/footer/footer'

import Search from '../components/search/search'



const App: React.FC = () => {
  const [searchVal, setSearchVal] = useState('')
  return (
    <div>
      <Header />
        <br />
        <form>
          <label htmlFor="search" >Search</label>
          <input
            id="search"
            type="text"
            placeholder="Search..."
            onChange={(e)=>setSearchVal(e.target.value.toLowerCase())}
            autoFocus
          />
        </form>
        <Search term={searchVal}/>
        <Link href="/">
          HOME
        </Link>
    </div>
  )
}

export default App;