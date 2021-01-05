import * as React from 'react';

import Link from 'next/link';
import Header from '../components/header/header'
// import Footer from '../components/footer/footer'
import AllMessages from '../components/view/allMessages';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <AllMessages />
    </div>
  )
}

export default App;