import styles from './send.module.css'
import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { Context } from '../context';

const Send: React.FC = () => {
  const [username, setUsername] = useState('');
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [avatar, setAvatar] = useState('');
  const global = useContext(Context);

  React.useEffect(() => {
    setAvatar(global.userData.avatar);
    setUsername(global.userData.username);
    setFirst(global.userData.first);
    setLast(global.userData.last);
  }, [global])

  return (
    <div className={styles.messageContainer}>
      <div className={styles.message}>
        <div className={styles.left}>
          <div>
            <button>font 1</button>
            <button>font 2</button>
            <button>font 3</button>
          </div>
          <textarea className={styles.input} style={{ fontFamily: 'Arial, Helvetica, sans-serif' }} />
        </div>
        <div className={styles.right}>
          <div className={styles.stamp}>
            stamp
          </div>
          <div className={styles.senderInfo}>
            <img className={styles.avatar} src={avatar} />
            <div>
              <div className={styles.username}>{username}</div>
              <div className={styles.name}>{first} {last}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Send;