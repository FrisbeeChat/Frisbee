import axios from 'axios';
import React from 'react';
import styles from '../connect/connections.module.css';
import { Context } from '../context';
import { Paper, Button } from '@material-ui/core';

interface Props {
  username: string;
  first: string;
  last: string;
  avatar: string;
  index: number;
}

const RequestCard = ({ username, first, last, avatar, index }: Props) => {
  const global = React.useContext(Context);
  const [friend, setFriend] = React.useState(false)

  const acceptFriend = async (friend: string) => {
    setFriend(true);
    const resp = await axios({
      url: `${window.location.origin}/api/acceptFriend`,
      method: 'post',
      data: {
        me: global.userData.username,
        them: friend,
      },
    });
    return;
  }

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
        <Button color="secondary" className={styles.button}>Accept</Button>
        <Button color="secondary" className={styles.button}>Ignore</Button>
      </div>
    </Paper>
  )

}

export default RequestCard;
