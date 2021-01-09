import styles from './view.module.css'
import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../context';
import Router from 'next/router';
import { Paper, Button } from '@material-ui/core';

const Single = ({message, i, type}: any) => {
  const global = useContext(Context);
  const [avatar, setAvatar] = useState('https://frisbee-images.s3-us-west-1.amazonaws.com/paint.jpg')
  const [username, setUsername] = useState('');
  const [text, setText] = useState('');
  const [photo, setPhoto] = useState('https://frisbee-images.s3-us-west-1.amazonaws.com/paint.jpg')
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');

  const reply = () => {
    global.setDraft({username: message.username, message:"navigated from search comp", image: ''});
    Router.replace('/send');
  }

  useEffect(() => {
    setAvatar(message.avatar);
    setUsername(message.username);
    setText(message.text);
    setPhoto(message.photo);
    setFirst(message.first);
    setLast(message.last);
  }, [message])

  return (
    <Paper
      elevation={2}
      key={i}
      className={styles.messContainer}
    >
      <div className={styles.messHead}>
        <div className={styles.messProfile}>
          <img className={styles.messAvatar} src={avatar}/>
          <div>
            <div className={styles.username}>@{username}</div>
            <div style={{ marginRight: '20px' }}>
              {first} {last}
            </div>
          </div>
        </div>
        {
          type ?
          <Button
            variant="contained"
            color="secondary"
            className={styles.replyButton}
            onClick={reply}
          >
            Reply
          </Button> :
          <Button
            variant="contained"
            color="primary"
            className={styles.replyButton}
            onClick={reply}
          >
            Message
          </Button>
        }
      </div>
      <div className={styles.messText}>
        <div className={styles.messContent}>{text}</div>
      </div>
      <div>
        {photo ? <img className={styles.singleImage} src={photo}/> : <div></div>}
      </div>
    </Paper>
  )
}
export default Single;