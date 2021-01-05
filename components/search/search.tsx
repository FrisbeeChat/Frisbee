
import axios from 'axios';
import Router from 'next/router';
import React from 'react';
import { Context } from '../context';
import styles from './search.module.css';

interface Query {
  query: string;
}

const Search = ({query}: Query) => {
  const global = React.useContext(Context)
  const [users, setUsers] = React.useState([])

  const handleClick = (user: string) => {
    global.setDraft({username:user, message:"navigated from search comp"});
    Router.replace('/send');
  }

  const getUsers = async () => {
    const resp = await axios({
      url: 'http://localhost:3000/api/getFriends',
      method: 'post',
      data: {username: global.userData.username}
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
        if (key !== 'avatar' && user[key].toLowerCase().includes(query)) {
          // console.log(user[key])
          return (
            <div
              className={styles.card}
              key={i}
              onClick={()=>{handleClick(user.username)}}
            >
              <img className={styles.img} src={user.avatar} />
              <div className={styles.username}>{user.username}</div>
            </div>
          )

        }
      }
    })}
  </div>
  )
}

export default Search;