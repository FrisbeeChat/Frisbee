import * as React from 'react';
import Message from '../components/message/message';
import styles from '../styles/Home.module.css'
import axios from 'axios';
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import { NextPageContext } from 'next';


const Home = () => {

  return (


     // home page manifesto
     //check the users data to see if there is an acrtifact of credential / user login data
        // if exists
          // useEffect/getInitialProps to populate global context fields
        // else navigate to login page

    //notes
      //gut tells me this cannot be server side rendered, as the site would then need to know the users data upon build, rather than upon access,
      //when the user engauges the site, is when the cascade of api-call is initiated
    <div>
      <div className={styles.home}>
        <Header />
      </div>
      <div className={styles.body}>
        <Message />
      </div>
      <Footer />
    </div>
  )
}

export default Home;