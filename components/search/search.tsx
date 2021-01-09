import axios from 'axios';
import Router from 'next/router';
import React from 'react';
import { Context } from '../context';
import styles from './search.module.css';
import { Paper } from '@material-ui/core';
import { TextField, Button } from '@material-ui/core';

const Search = () => {
  const global = React.useContext(Context);

  const [users, setUsers] = React.useState([]);
  const [searchVal, setSearchVal] = React.useState('');

  const handleClick = (user: string) => {
    global.setDraft({username:user, message:"navigated from search comp", image: ''});
    Router.replace('/send');
  }

  const getUsers = async () => {
    const resp = await axios({
      url: `${window.location.origin}/api/getFriends`,
      method: 'post',
      data: {username: global.userData.username}
    });
    setUsers(resp.data.reverse());
  }

  React.useEffect(()=>{
    if (global.userData.username !== '') {
      getUsers();
    }
  }, [global])


  return (
    <div className={styles.container}>
      <div style={{ marginBottom: "20px", fontSize: "24px" }}>My Friends</div>
      <form className={styles.search}>
        <TextField
          id="outlined-search"
          label="Search"
          type="search"
          variant="outlined"
          onChange={(e)=>setSearchVal(e.target.value)}
          value={searchVal}
          style={{ background: "white" }}
          autoFocus
          fullWidth
        />
      </form>
      <div>
        {users.map((user, i) => {
          if (user.username === global.userData.username) {
            return;
          }
          for (var key in user) {
            if (key !== 'avatar' && user[key].toLowerCase().includes(searchVal)) {
              return (
                <Paper
                  className={styles.card}
                  elevation={2}
                  key={i}
                  onClick={()=>{handleClick(user.username)}}
                >
                  <div className={styles.left}>
                    <img className={styles.img} src={user.avatar} />
                    <div>
                      <div className={styles.username}>@{user.username}</div>
                      <div>{user.first} {user.last}</div>
                    </div>
                  </div>
                  <div className={styles.right}>
                    <Button
                      variant="contained"
                      color="primary"
                      className={styles.username}
                    >
                      Message
                    </Button>
                  </div>
                </Paper>
              )
            }
          }
        })}
      </div>
    </div>
  )
}

export default Search;