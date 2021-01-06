import axios from 'axios';
import React from 'react';
import { useState, useEffect, useContext } from 'react';
import styles from './connections.module.css'
import { Context } from '../context';
import UserCard from '../cards/userCard';
import RequestCard from '../cards/requestCard';
import { TextField } from '@material-ui/core'


const Connections = () => {
  const global = useContext(Context);
  const [users, setUsers] = useState([]);
  const [searchVal, setSearchVal] = useState('')
  const [requests, setRequests] = useState([]);
  const [friend, setFriend] = useState(false)

  const getUsers = async () => {
    const resp = await axios({
      url: `${window.location.origin}/api/getUsers`,
      method: 'get',
    });
    setUsers(resp.data);
  };

  const getRequests = async () => {
    const resp = await axios({
      url: `${window.location.origin}/api/getFriendRequests`,
      method: 'post',
      data: {
        username: global.userData.username
      }
    });
    setRequests(resp.data);
  }

  const accept = async (friend: string) => {
    await axios({
      url: `${window.location.origin}/api/acceptFriend`,
      method: 'post',
      data: {
        me: global.userData.username,
        them: friend,
      },
    });
    await getRequests();
  }

  const ignore = async (friend: string) => {
    await axios({
      url: `${window.location.origin}/api/ignoreRequest`,
      method: 'post',
      data: {
        me: global.userData.username,
        them: friend,
      },
    });
    await getRequests();
  }

  React.useEffect(()=>{
    getUsers();
    getRequests();
  }, [global.userData.username]);

  return (
    <div className={styles.container}>
      <form style={{marginTop: "80px", marginBottom: "30px", width: "60vw"}}>
        <TextField
          id="outlined-search"
          label="Search"
          type="search"
          variant="outlined"
          onChange={(e)=>setSearchVal(e.target.value.toLowerCase())}
          autoFocus
          fullWidth
        />
      </form>
      {requests.length > 0 ?
        (<div style={{ borderBottom: "1px solid black", marginBottom: "30px" }}>
          {requests.map((user, i) => {
            for (var key in user) {
              if (key !== 'avatar' && user[key].toLowerCase().includes(searchVal)) {
                return (
                  <RequestCard
                    ignore={ignore}
                    accept={accept}
                    username={user.username}
                    avatar={user.avatar}
                    first={user.first}
                    last={user.last}
                    index={i}
                  />
                )
              }
            }
          })}
        </div>) : (<div></div>)}
      <div>
        {users.map((user, i) => {
          if (user.username === global.userData.username) {
            return;
          }
          for (var key in user) {
            if (key !== 'avatar' && user[key].toLowerCase().includes(searchVal)) {
              return (
                <UserCard
                  username={user.username}
                  avatar={user.avatar}
                  first={user.first}
                  last={user.last}
                  index={i}
                />
              )
            }
          }
        })}
      </div>
    </div>
  )
};

export default Connections;
