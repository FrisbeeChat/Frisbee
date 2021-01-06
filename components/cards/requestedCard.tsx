import axios from 'axios';
import React from 'react';
import styles from '../connect/connections.module.css';
import { Context } from '../context';
import { Paper, Button } from '@material-ui/core';

interface Props {
  ignore: (username: string) => void;
  accept: (username: string) => void;
  username: string;
  first: string;
  last: string;
  avatar: string;
  index: number;
}

const RequestCard = ({ ignore, accept, username, first, last, avatar, index }: Props) => {
  const global = React.useContext(Context);

  return (
    <Paper elevation={2} className={styles.card} key={index}>
      <div className={styles.left}>
        <img className={styles.img} src={avatar} />
        <div>
          <div className={styles.username}>@{username}</div>
          <div>{first} {last}</div>
        </div>
      </div>
      <div>
        <Button color="secondary" style={{marginRight: "10px"}} className={styles.button} onClick={() => accept(username)}>Accept</Button>
        <Button color="secondary" className={styles.button} onClick={() => ignore(username)}>Ignore</Button>
      </div>
    </Paper>
  )

}

export default RequestCard;
