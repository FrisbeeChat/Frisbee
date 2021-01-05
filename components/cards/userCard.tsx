import axios from 'axios';
import React from 'react';
import styles from '../connect/connections.module.css'
import { Context } from '../context';

interface Props {
  username: string;
  avatar: string;
  index: number;
}

const UserCard = ({ username, avatar, index }: Props) => {
  const global = React.useContext(Context);

  const [friend, setFriend] = React.useState(false)

  const addFriend = async (friend: string) => {
    // console.log(friend)
    setFriend(true);
    const resp = await axios({
      url: 'http://localhost:3000/api/addUser',
      method: 'post',
      data: {
        me: global.userData.username,
        them: friend,
      },
    });
    return;
  }

  const removeFriend = async (friend:string) => {
    // console.log(friend)
    setFriend(false);
    const resp = await axios({
      url: 'http://localhost:3000/api/deleteFriend',
      method: 'post',
      data: {
        me: global.userData.username,
        them: friend,
      },

    });
    return;
  }

  return (

    <div className={styles.card} key={index}>
      <img className={styles.img} src={avatar} />
      <div className={styles.username}>{username}</div>
      {friend ?
        <button className={styles.button}
          value={username}
          onClick={() => removeFriend(username)}
        >Revoke</button>
        :
        <button className={styles.button}
          value={username}
          onClick={() => addFriend(username)}
        >Request</button>
        }
    </div>
  )

}

export default UserCard;
