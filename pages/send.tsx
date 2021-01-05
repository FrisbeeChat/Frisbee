import * as React from 'react';

import Link from 'next/link';
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import Send from '../components/send/send'
import styles from '../styles/Home.module.css'

const App: React.FC = () => {
  return (
    <div>
      <div className={styles.home}>
        <Header />
      </div>
      <div className={styles.body}>
        <Send />
      </div>
      <Footer />
    </div>
  )
}

export default App;