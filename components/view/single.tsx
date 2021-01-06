import styles from './view.module.css'
import React from 'react';
import { useContext } from 'react';
import { Context } from '../context';
import Router from 'next/router';
import { Paper, Button } from '@material-ui/core';

const Single = ({message, i}: any) => {
  const global = useContext(Context);

  const reply = () => {
    global.setDraft({username: message.username, message:"navigated from search comp"});
    Router.replace('/send');
  }

  return (
    <Paper elevation={2} key={i} className={styles.messContainer}>
      <div className={styles.messHead}>
        <div className={styles.messProfile}>
          <img className={styles.messAvatar} src={message.avatar}/>
          <div>
            <div className={styles.username}>@{message.username}</div>
            <div style={{ marginRight: '20px' }}>{message.first} {message.last}</div>
          </div>
        </div>
        <Button variant="contained" color="secondary" className={styles.replyButton} onClick={reply}>Reply</Button>
      </div>
      <div className={styles.messText}>
        <div className={styles.messContent}>{message.text}</div>
      </div>
    </Paper>
  )
}
export default Single;