import axios from 'axios';
import Router from 'next/router';
import React from 'react';
import { Context } from '../context';
import styles from './search.module.css';
import { Paper } from '@material-ui/core';
import { Button } from '@material-ui/core';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { FormControl } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';

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