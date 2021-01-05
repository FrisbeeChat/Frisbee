import axios from 'axios';
import React from 'react';
import styles from './connections.module.css'
import { Context } from '../context';
import UserCard from '../cards/userCard';

interface Query {
  query: string;
}
const Connections = ({query}: Query) => {
  const global = React.useContext(Context);

  const [users, setUsers] = React.useState([]);



  const getUsers = async () => {
    const resp = await axios({
      url: 'http://localhost:3000/api/getUsers',
      method: 'get',
    });
    setUsers(resp.data);
  };

  React.useEffect(()=>{
    getUsers();
  },[global.userData.username]);

  return (
  <div className={styles.container}>
    {users.map((user, i) => {
      if (user.username === global.userData.username) {
        return;
      }
      for (var key in user) {
        if (key !== 'avatar' && user[key].toLowerCase().includes(query)) {
          return (
            <UserCard
              username={user.username}
              avatar={user.avatar}
              index={i}
            />
          )
        }
      }
    })}
  </div>
  )
}

export default Connections;
