import * as React from 'react';
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import axios from 'axios';


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

type Props = {
  children: React.ReactNode
}

export const Context = createContext<AppContextInterface | null>(null);

export const ConfigProvider = ({ children }: Props) => {
  const [userData, setUserData] = useState<User>({username: '', first: '', last: '', avatar: ''})
  const [currentMessage, setCurrentMessage] = useState<number>(0);
  const [messages, setMessages] = useState<Sender[]>([]);
  const [sent, setSent] = useState<Sender[]>([]);
  const [draft, setDraft] = useState<Draft>({ username:'', message:'', image: '' })
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [refresh, trigRefresh] = useState<boolean>(true);

  const getUserData = async () => {
    try {
      const resp = await axios({
        url: `${window.location.origin}/api/getUserData`,
        method: 'get',
      });
      setUserData(resp.data);
      getMessages(resp.data.username);
      trigRefresh(false);
    } catch (err) {
      Router.replace('/login');
    }
  }

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
    setSent(sentMess.data.reverse());
    setMessages(mess.data.reverse())
  }

  React.useEffect(() => {
    if (refresh) {
      getUserData();
    }
  }, [refresh]);


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