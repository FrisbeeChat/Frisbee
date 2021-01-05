

















import axios from 'axios';
import React from 'react';
import styles from './connections.module.css'

import { Context } from '../context';

const Connections:React.FC = () => {
  const global = React.useContext(Context);

  const [users, setUsers] = React.useState([]);

  const addFriend = async(friend: string) => {
    console.log(friend)
    const resp = await axios({
      url: 'http://localhost:3000/api/addUser',
      method: 'post',
      data: {
        me: global.userData.username,
        them: friend,
      },
    });
  }

  const getUsers = async () => {
    const resp = await axios({
      url: 'http://localhost:3000/api/getUsers',
      method: 'get',
    });
    setUsers(resp.data);
  };

  // const getFriends = async () => {
  //   const resp = await axios({
  //     url: 'http://localhost:3000/api/getFriends',
  //     method: 'post',
  //     data: {username: global.userData.username}
  //   });
  //   setUsers(resp.data);
  // };

  React.useEffect(()=>{
    getUsers();
    // if (global.userData.username !== '') {
    //   getFriends();
    // }
  },[global.userData.username]);

  return (
  <div className={styles.container}>
    {users.map((user, i) => {
      if (user.username === global.userData.username) {
        return;
      }
      return (
        <div className={styles.card} key={i}>
          <img className={styles.img} src={user.avatar} />
          <div className={styles.username}>{user.username}</div>
          <button
            className={styles.button}
            value={user.username}
            onClick={(e)=>addFriend(e.target.value)}
          >add</button>
        </div>
      )
    })}
  </div>
  )
}

export default Connections;
