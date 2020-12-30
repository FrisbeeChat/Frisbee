import styles from './Header.module.css'
import { useContext } from 'react';

import { Context } from '../context'


const Header: React.FC = () => {
  const global = useContext(Context);

  return (
    <div className={styles.header}>
      <span id={styles.title}>
        {global.appName}
      </span>
      <span className={styles.container}>
        <button id={styles.button}>See All Messages</button>
        <img id={styles.avatar} src={global.avatar} />
      </span>
    </div>
  )
}

export default Header;