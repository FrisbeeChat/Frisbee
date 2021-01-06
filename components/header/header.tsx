import React from 'react';
import styles from './header.module.css'
import { useContext, useEffect, useState } from 'react';
import Link from 'next/link'
import { Context } from '../context'
import { AppBar, Toolbar, Button, Container, Badge, Popover } from '@material-ui/core';
import MarkunreadMailboxIcon from '@material-ui/icons/MarkunreadMailbox';
import Settings from './settings';
import axios from 'axios';

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [requests, setRequests] = useState([]);
  const global = useContext(Context);

  const handleClick = (event:any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const getRequests = async () => {
    const reqs = await axios({
      url: `${window.location.origin}/api/getFriendRequests`,
      method: 'post',
      data: {
        username: global.userData.username
      }
    })
    setRequests(reqs.data);
  }

  useEffect(() => {
    getRequests();
  }, [global.userData.username])

  return (
    <AppBar className={styles.header} style={{ background: "" }}>
      <Container>
      <div className={styles.contWidth}>
        <Link href="/">
          <span id={styles.title}>
            <MarkunreadMailboxIcon />
           <div style={{ marginLeft: "12px" }}>{global.appName}</div>
          </span>
        </Link>
        <Toolbar className={styles.buttonContainer}>
          <Link href="/connect">
            <Badge
              badgeContent={requests.length}
              color="secondary"
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}>
              <Button style={{ color: 'white', marginRight: "20px" }}>Connect</Button>
            </Badge>
          </Link>
          <Link href="/contacts">
            <Button style={{ color: 'white', marginRight: "20px" }}>Send a message</Button>
          </Link>
          <Link href="/view">
            <Button style={{ color: 'white', marginRight: "20px" }}>See All Messages</Button>
          </Link>
          <img onClick={handleClick} id={styles.avatar} src={global.userData.avatar} /> {/*//use getInitialProps */}
          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <Settings />
          </Popover>
        </Toolbar>
      </div>
      </Container>
    </AppBar>
  )
}

export default Header;