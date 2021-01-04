import * as React from 'react';

import Link from 'next/link';
// import Header from '../components/header/header'
// import Footer from '../components/footer/footer'
import Send from '../components/send/send'



const App: React.FC = () => {
  return (
    <div>
        CREATE NEW MESSAGE
        <br />
        <Send />
        <Link href="/">
          HOME
        </Link>
    </div>
  )
}

export default App;