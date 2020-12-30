import styles from './Footer.module.css'
import { useContext } from 'react';

import { Context } from '../context'
import { userInfo } from 'os';


const Header: React.FC = () => {
  const global = useContext(Context);

  return (
    <div className={styles.footer}>
      <span className={styles.container}>
        <img id={styles.avatar} src={global.authorAvatar} />
        <p id={styles.name}>{global.authorName}</p>
      </span>
    </div>
  )
}

export default Header;

