import styles from './view.module.css'
import React from 'react';
import { useContext, useState } from 'react';
import { Paper, Button } from '@material-ui/core';

const Single = ({message, i}: any) => {
  return (
    <Paper elevation={2} key={i} className={styles.messContainer}>
      <div className={styles.messHead}>
        <div className={styles.messProfile}>
          <img className={styles.messAvatar} src={message.avatar}/>
          <div className={styles.username}>@{message.username}</div>
        </div>
        <div style={{ marginRight: '20px' }}>{message.first} {message.last}</div>
      </div>
      <div className={styles.messText}>
        <div className={styles.messContent}>{message.text}</div>
        <Button variant="contained" color="secondary" className={styles.replyButton}>Reply</Button>
      </div>
    </Paper>
  )
}
export default Single;