import axios from 'axios';
import React from 'react';
import styles from './connections.module.css'
import { Context } from '../context';
import UserCard from '../cards/userCard';

import { TextField } from '@material-ui/core'


const Connections = () => {
  const global = React.useContext(Context);
  const [users, setUsers] = React.useState([]);
  const [searchVal, setSearchVal] = React.useState('')


  const getUsers = async () => {
    const resp = await axios({
      url: `${window.location.origin}/api/getUsers`,
      method: 'get',
    });
    setUsers(resp.data);
  };

  React.useEffect(()=>{
    getUsers();
  },[global.userData.username]);

  return (
  <div className={styles.container}>
        <form style={{marginTop: "80px", marginBottom: "40px"}}>
          <TextField
            id="outlined-search"
            label="Search"
            type="search"
            variant="outlined"
            onChange={(e)=>setSearchVal(e.target.value.toLowerCase())}
            autoFocus
        />
        </form>
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
  )
}

export default Connections;
{/* <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          autoFocus
        />
        <TextField
          id="outlined-search"
          label="Search field"
          type="search"
          variant="outlined"
          onChange={(e)=>setSearchVal(e.target.value.toLowerCase())}
          autoFocus

        /> */}