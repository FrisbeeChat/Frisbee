import axios from 'axios';
import React from 'react';
import { useState, useEffect, useContext } from 'react';
import styles from './connections.module.css'
import { Context } from '../context';
import UserCard from '../cards/userCard';
import RequestCard from '../cards/requestCard';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { FormControl } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';


const Connections = () => {
  const global = useContext(Context);
  const [users, setUsers] = useState([]);
  const [searchVal, setSearchVal] = useState('');
  const [requests, setRequests] = useState([]);
  const [requested, setRequested] = useState([]);

  useEffect(() => {
    if (global.userData.username !== '') {
      getRequestsAndFriends(global.userData.username);
    }
  }, [global]);

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
    setUsers(filter.reverse());
  };

  const getRequestsAndFriends = async (username: string) => {
    const reqs = await axios({
      url: `${window.location.origin}/api/getFriendRequests`,
      method: 'post',
      data: {
        username,
      }
    });
    setRequests(reqs.data.reverse());
    const sent = await axios({
      url: `${window.location.origin}/api/getSentRequests`,
      method: 'post',
      data: {
        username,
      }
    });
    setRequested(sent.data.reverse());
    const fs = await axios({
      url: `${window.location.origin}/api/getFriends`,
      method: 'post',
      data: {
        username,
      }
    });

    const friendsAndRequests = reqs.data.concat(fs.data, sent.data);
    let obj: any = {};
    for (let i = 0; i < friendsAndRequests.length; i++) {
      obj[friendsAndRequests[i].username] = true;
    }
    getUsers(obj);
  };

  const accept = async (friend: string) => {
    await axios({
      url: `${window.location.origin}/api/acceptFriend`,
      method: 'post',
      data: {
        me: global.userData.username,
        them: friend,
      },
    });
    await getRequestsAndFriends(global.userData.username);
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
    await getRequestsAndFriends(global.userData.username);
  }

  return (
    <div className={styles.container}>
      <div style={{ marginBottom: "20px", fontSize: "24px" }}>Search Users</div>
      <form className={styles.form}>
        <FormControl className={styles.search} style={{ marginBottom: "10px" }} variant="outlined">
            <InputLabel htmlFor="search">Search</InputLabel>
            <OutlinedInput
              id="search"
              aria-describe={`username, cannot be longer than 16 characters or include ' or "`}
              value={searchVal}
              onChange={(e)=>setSearchVal(e.target.value)}
            />
          </FormControl>
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
                    sent={false}
                    key={user.username}
                  />
                )
              }
            }
          })}
        </div>) : (<div></div>)}
      <div>
        <div>
          {requested.map((user, i) => {
            if (user.username === global.userData.username) {
              return;
            }
            for (var key in user) {
              if (key !== 'avatar' && user[key].toLowerCase().includes(searchVal)) {
                return (
                  <UserCard
                    key={user.username}
                    username={user.username}
                    avatar={user.avatar}
                    first={user.first}
                    last={user.last}
                    sent={true}
                  />
                )
              }
            }
          })}
        </div>
        <div>
          {users.map((user, i) => {
            if (user.username === global.userData.username) {
              return;
            }
            for (var key in user) {
              if (key !== 'avatar' && user[key].toLowerCase().includes(searchVal)) {
                return (
                  <UserCard
                    key={user.username}
                    username={user.username}
                    avatar={user.avatar}
                    first={user.first}
                    last={user.last}
                    sent={false}
                  />
                )
              }
            }
          })}
        </div>
      </div>
    </div>
  )
};

export default Connections;
