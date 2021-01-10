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
  const [avatar, setAvatar] = useState('');
  const global = useContext(Context);

  const handleClick = (event:any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  const upload = async (e:any) => {
    const image = e.target.files[0];
    const reader = new FormData();
    reader.append('file', image);
    reader.append('upload_preset', 'postcardcover');
    const res = await fetch('https://api.cloudinary.com/v1_1/postcard/image/upload', {
      method: 'POST',
      body: reader
    })
    const file = await res.json();
    setAvatar(file.url);
    global.changeSettings(global.userData.username, global.userData.first, global.userData.last, file.url);
  }

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
    setAvatar(global.userData.avatar);
  }, [global])

  return (
    <AppBar className={styles.header} >
      <Container style={{paddingRight: "0px"}}>
      <div role="banner" className={styles.contWidth}>
        <Link href="/" >
          <nav role="navigation" id={styles.title}>
            <MarkunreadMailboxIcon className={styles.logo} />
           <div className={styles.title}>Postcard</div>
          </nav>
        </Link>
        <Toolbar className={styles.buttonContainer}>
          <Link href="/connect">
            <Badge //-------- WHY BADGE HERE AND SPAN(changed to NAV) ABOVE?
              badgeContent={requests.length}
              color="secondary"
              anchorOrigin={{ vertical: 'top', horizontal: 'left' }}>
              <Button
                role="navigation"
                aria-label="Find new friends"
                className={styles.pages}
              >Connect</Button>
            </Badge>
          </Link>
          <Link href="/contacts">
            <Button
              role="navigation"
              aria-label="Send a message to an existing friend"
              className={styles.pages}
            >Send a message</Button>
          </Link>
          <Link href="/view">
            <Button
              role="navigation"
              aria-label="View all sent and received messages"
              className={styles.pages}
            >See All Messages</Button>
          </Link>
          <img onClick={handleClick} id={styles.avatar} alt="profile picture" src={avatar} />
          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <Settings upload={upload} avatar={avatar} />
          </Popover>
        </Toolbar>
      </div>
      </Container>
    </AppBar>
  )
}

export default Header;