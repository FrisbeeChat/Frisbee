import styles from './Footer.module.css'

import Link from 'next/link';

import { useContext, useState, useEffect } from 'react';
import React from 'react'
import { Context, Sender } from '../context'
import { userInfo } from 'os';


const Footer: React.FC = () => {
  const [avatar, setAvatar] = useState('');
  const [username, setUsername] = useState('');
  const global = useContext(Context);

  useEffect(() => {
    const sender: Sender = global.messages[global.currentMessage] || global.messages[0];
    if (sender) {
      setAvatar(sender.avatar);
      setUsername(sender.username);
    }
  }, [global])

  return (
    <div className={styles.footer}>
      <span>
        <Link href="/send">
          <button id={styles.button}>Reply</button>
        </Link>
      </span>
    </div>
  )
}

export default Footer;

