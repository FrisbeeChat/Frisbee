import * as React from 'react';

import Link from 'next/link';
import Header from '../components/header/header'
// import Footer from '../components/footer/footer'

import Connections from '../components/connect/connections'


const App: React.FC = () => {
  const [searchVal, setSearchVal] = React.useState('')

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
          onChange={(e) => setSearchVal(e.target.value.toLowerCase())}
          autoFocus
        />
      </form>
      <Connections query={searchVal} />
    </div>
  )
}

export default App;