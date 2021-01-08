import * as React from 'react';
import Header from '../components/header/header'
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
    </div>
  )
}

export default App;