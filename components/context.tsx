import * as React from 'react';
import { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { NextPageContext } from 'next';
import { Router } from 'next/router';
import axios from 'axios';


interface AppContextInterface {
  appName: string,
  userData: User,
  setUserData: (arg: User) => void,
  currentMessage: number,
  setCurrentMessage: (arg:number) => void;
  messages: Sender[],
  setMessages: (arg: Sender[]) => void;
}
export interface Sender {
  username: string,
  first: string,
  last: string,
  avatar: string,
  text: string,
}

export interface User {
  username: string,
  first: string,
  last: string,
  avatar: string,
}

export const Context = createContext<AppContextInterface | null>(null);
type Props = {
  children: React.ReactNode
}
export const ConfigProvider = ({ children }: Props) => {
  const [userData, setUserData] = useState<User>({username: '', first: '', last: '', avatar: ''})

  const [currentMessage, setCurrentMessage] = useState<number>(0);

  const [messages, setMessages] = useState<Sender[]>([]);



  const getUserData = async () => {
    const resp = await axios({
      url: 'http://localhost:3000/api/getUserData',
      method: 'get',
    });
    console.log(resp);
    await setUserData(resp.data);
    getMessages(resp.data.username);
  }

  const getMessages = async (username: string) => {
    const mess = await axios({
      url: 'http://localhost:3000/api/getMessages',
      method: 'post',
      data: {
        username: username
      }
    })
    console.log('messages',mess.data);
    setMessages(mess.data)
  }

  React.useEffect(() => {

    getUserData();
  }, [])

  const appName = "Frisbie";

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


