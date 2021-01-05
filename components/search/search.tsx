
import axios from 'axios';
import React from 'react';

import { Context } from '../context';

import styles from './search.module.css'

const Search:React.FC = ({term}) => {
  const global = React.useContext(Context)
  const [users, setUsers] = React.useState([])


  const getUsers = async () => {
    const resp = await axios({
      url: 'http://localhost:3000/api/getUsers',
      method: 'get',
    });
    setUsers(resp.data);
  }
  React.useEffect(()=>{
    getUsers()
  },[])


  return (
  <div className={styles.container}>
    {users.map((user, i) => {
      if (user.username === global.userData.username) {
        return;
      }
      for (var key in user) {
        if (key !== 'avatar' && user[key].toLowerCase().includes(term)) {
          // console.log(user[key])
          return (
            <div className={styles.card} key={i}>
              <img className={styles.img} src={user.avatar} />
              <div className={styles.username}>{user.username}</div>
              <div>{term}</div>
            </div>
          )

        }
      }
    })}
  </div>
  )
}

export default Search;