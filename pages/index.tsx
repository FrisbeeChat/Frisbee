// import * as React from 'react';
import Message from '../components/message/message';
import styles from '../styles/Home.module.css'


import Header from '../components/header/header'
import Footer from '../components/footer/footer'

import { Context } from '../components/context'

const Home: React.FC = () => {
  return (

        <div className={styles.home}>
          <Header />
            <div className={styles.body}>
              <Message />
            </div>
          <Footer />
        </div>

  )
}

export default Home;