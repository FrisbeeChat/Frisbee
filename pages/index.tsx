import * as React from 'react';
import Message from '../components/message/message';
import styles from '../styles/Home.module.css'
import Header from '../components/header/header'

const Home = () => (
  <div>
    <div className={styles.home}>
      <Header />
    </div>
    <div className={styles.body}>
      <Message />
    </div>
  </div>
)

export default Home;