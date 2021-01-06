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
  const [searchVal, setSearchVal] = useState('');
  const [requests, setRequests] = useState([]);
  const [friend, setFriend] = useState(false);
  const [myFriends, setMyFriends] = useState([]);

  const getUsers = async (frs:any) => {
    const resp = await axios({
      url: `${window.location.origin}/api/getUsers`,
      method: 'get',
    });
    const filter = [];
    for (let i = 0; i < resp.data.length; i++) {
      if (!frs[resp.data[i].username]) {
        filter.push(resp.data[i]);
      }
    }
    setUsers(filter);
  };

  const getRequestsAndFriends = async () => {
    const reqs = await axios({
      url: `${window.location.origin}/api/getFriendRequests`,
      method: 'post',
      data: {
        username: global.userData.username
      }
    });
    setRequests(reqs.data);
    const fs = await axios({
      url: `${window.location.origin}/api/getFriends`,
      method: 'post',
      data: {
        username: global.userData.username
      }
    });
    setMyFriends(fs.data);
    const friendsAndRequests = reqs.data.concat(fs.data);
    let obj: any = {};
    for (let i = 0; i < friendsAndRequests.length; i++) {
      obj[friendsAndRequests[i].username] = true;
    }
    getUsers(obj);
  }

  const getFriends = async () => {
    const resp = await axios({
      url: `${window.location.origin}/api/getFriends`,
      method: 'post',
      data: {
        username: global.userData.username
      }
    });
    setMyFriends(resp.data);
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
    await getRequestsAndFriends();
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
    await getRequestsAndFriends();
  }

  React.useEffect(()=>{
    getRequestsAndFriends();
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
