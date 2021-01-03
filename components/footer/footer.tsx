import styles from './Footer.module.css'

import Link from 'next/link';

import { useContext } from 'react';

import { Context } from '../context'
import { userInfo } from 'os';


const Footer: React.FC = () => {
  const global = useContext(Context);

  return (
    <div className={styles.footer}>
      <span>
        <Link href="/send">
          <button id={styles.button}>Reply</button>
        </Link>
      </span>
      <span className={styles.container}>
        <img id={styles.avatar} src={global.authorAvatar} />
        <p id={styles.name}>{global.authorName}</p>
      </span>
    </div>
  )
}

export default Footer;

