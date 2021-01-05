import styles from './Header.module.css'
import { useContext } from 'react';
import Link from 'next/link'
import { Context } from '../context'


const Header: React.FC = () => {
  const global = useContext(Context);

  return (
    <div className={styles.header}>
      <div className={styles.contWidth}>
        <Link href="/">
          <span id={styles.title}>
            {global.appName}
          </span>
        </Link>
        <span className={styles.buttonContainer}>
          <Link href="/connect">
            <button id={styles.button}>Connect</button>
          </Link>
          <Link href="/contacts">
            <button id={styles.button}>Send a message</button>
          </Link>
          <Link href="/view">
            <button id={styles.button}>See All Messages</button>
          </Link>
            <img id={styles.avatar} src={global.userData.avatar} /> {/*//use getInitialProps */}
        </span>
      </div>
    </div>
  )
}

export default Header;