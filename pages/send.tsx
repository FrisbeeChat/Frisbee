import * as React from 'react';

import Link from 'next/link';
// import Header from '../components/header/header'
// import Footer from '../components/footer/footer'




const App: React.FC = () => {
  return (
    <div>
        CREATE NEW MESSAGE
        <br />
        <Link href="/">
          HOME
        </Link>
    </div>
  )
}

export default App;