import * as React from 'react';
import { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { NextPageContext } from 'next';
import Router from 'next/router';
import axios from 'axios';
import { ignoreRequest } from '../pages/api/ignoreRequest';
import { error } from 'console';


interface AppContextInterface {
  appName: string;
  userData: User;
  setUserData: (arg: User) => void;
  currentMessage: number;
  setCurrentMessage: (arg:number) => void;
  messages: Sender[];
  setMessages: (arg: Sender[]) => void;
  draft: Draft;
  setDraft: (arg:Draft) => void;
  changeSettings: (username: string, first: string, last: string, avatar: string) => void;
  loggedIn: boolean;
  setLoggedIn: (arg: boolean) => void;
  sent: Sender[];
  setSent: (arg: Sender[]) => void;
  refresh: boolean;
  trigRefresh: (arg: boolean) => void;
}
export interface Sender {
  username: string;
  first: string;
  last: string;
  avatar: string;
  text: string;
  photo: string;
  font: string;
  time: string;
}

export interface User {
  username: string;
  first: string;
  last: string;
  avatar: string;
}
export interface Draft {
  username: string;
  message: string;
  image: string;
}

export const Context = createContext<AppContextInterface | null>(null);
type Props = {
  children: React.ReactNode
}
export const ConfigProvider = ({ children }: Props) => {
  const [userData, setUserData] = useState<User>({username: '', first: '', last: '', avatar: ''})
  const [currentMessage, setCurrentMessage] = useState<number>(0);
  const [messages, setMessages] = useState<Sender[]>([]);
  const [sent, setSent] = useState<Sender[]>([]);
  const [draft, setDraft] = useState<Draft>({ username:'', message:'', image: '' })
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [refresh, trigRefresh] = useState<boolean>(true);

  const getUserData = async () => { //needs to happen server side
    try {
      const resp = await axios({
        url: `${window.location.origin}/api/getUserData`,
        method: 'get',
      });
      setUserData(resp.data);
      getMessages(resp.data.username);
      // sortMessages();
      trigRefresh(false);
    } catch (err) {
      Router.replace('/login');
    }
  }

  // const  sortMessages = async() => {
  //   messages.sort((a, b) => {
  //     // return b.time - a.time;
  //   })
  // }

  const changeSettings = async (username: string, first: string, last: string, avatar: string) => {
    await axios({
      url: `${window.location.origin}/api/changeSettings`,
      method: 'post',
      data: {
        username,
        first,
        last,
        avatar
      }
    })
    getUserData();
  }

  const getMessages = async (username: string) => {
    const mess = await axios({
      url: `${window.location.origin}/api/getMessages`,
      method: 'post',
      data: {
        username: username
      }
    })
    const sentMess = await axios({
      url: `${window.location.origin}/api/getSentMessages`,
      method: 'post',
      data: {
        username: username
      }
    })
    setSent(sentMess.data);
    setMessages(mess.data)
  }

  React.useEffect(() => {
    if (refresh) {
      getUserData();
    }
  }, [refresh]);

  // React.useEffect(() => {
  //   getMessages();
  // }, [messages]);

  const appName = "Postcard";

  return (
    <Context.Provider
    value={{
      appName,
      currentMessage,
      setCurrentMessage,
      userData,
      setUserData,
      messages,
      setMessages,
      draft,
      setDraft,
      changeSettings,
      loggedIn,
      setLoggedIn,
      sent,
      setSent,
      refresh,
      trigRefresh,
    }}
    >
      {children}
    </Context.Provider>
  );
};
ConfigProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// ConfigProvider.getIntialProps = async (ctx: NextPageContext) => {
//   const cookie = ctx.req?.headers.cookie;

//   const resp = await axios({
//     url: 'http://localhost:3000/api/getUserData',
//     method: 'get',
//     headers: {
//       cookie: cookie!,
//     },
//   });
//   console.log('kljflkasjdflasdfjh;jdsifhds;lfhds;fhsdf',resp);
//   return {user: resp};
//   // if (resp.status === 401 && !ctx.req) {
//   //   Router.replace('/login');
//   //   return;
//   // }
//   // if (resp.status === 401) {
//   //   ctx.res.writeHead(302, {
//   //     location: 'http://localhost.com/login'
//   //   });
//   //   ctx.res.end();
//   //   return;
//   // }
//   // console.log('hello from get initial props',resp)
//   // return {messages: resp}
// }


