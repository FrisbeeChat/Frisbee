import styles from './view.module.css'
import React from 'react';
import { useContext, useState } from 'react';

const Single = ({message, i}: any) => {
  return (
    <div key={i} className={styles.messContainer}>
      <div className={styles.messHead}>
        <div className={styles.messProfile}>
          <img className={styles.messAvatar} src={message.avatar}/>
          <div className={styles.username}>{message.username}</div>
        </div>
        <div style={{ marginRight: '20px' }}>{message.first} {message.last}</div>
      </div>
      <div className={styles.messText}>
        {message.text}
      </div>
    </div>
  )
}
export default Single;