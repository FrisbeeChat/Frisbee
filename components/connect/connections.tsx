import axios from 'axios';
import React from 'react';
import styles from './connections.module.css'
import { Context } from '../context';
import UserCard from '../cards/userCard';
import RequestCard from '../cards/requestCard';
import { TextField } from '@material-ui/core'


const Connections = () => {
  const global = React.useContext(Context);
  const [users, setUsers] = React.useState([]);
  const [searchVal, setSearchVal] = React.useState('')
  const [requests, setRequests] = React.useState([]);

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

  React.useEffect(()=>{
    getUsers();
    getRequests();
  }, [global.userData.username]);

  return (
    <div className={styles.container}>
      <form style={{marginTop: "80px", marginBottom: "40px",width: "60vw"}}>
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
      <div style={{ borderBottom: "1px solid black" }}>
        {requests.map((user, i) => {
          if (user.username === global.userData.username) {
            return;
          }
          for (var key in user) {
            if (key !== 'avatar' && user[key].toLowerCase().includes(searchVal)) {
              return (
                <RequestCard
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
      <div style={{ marginTop: "30px" }}>
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