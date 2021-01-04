import * as React from 'react';
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';


interface AppContextInterface {
  appName: string,
  userData: User,
  setUserData: (arg: User) => void,
  currentMessage: number,
  setCurrentMessage: (arg:number) => void;
  messages: User[],
  setMessages: (arg: User[]) => void;
}
interface User {
  username: string,
  first: string,
  last: string,
  avatar: string,
}

export const Context = createContext<AppContextInterface | null>(null);
type Props = {
  children: React.ReactNode
}
export const ConfigProvider: React.FC = ({ children }: Props) => {
  const [userData, setUserData] = useState<User>({username: '', first: '', last: '', avatar: ''})

  const [currentMessage, setCurrentMessage] = useState<number>(0);

  const [messages, setMessages] = useState<User[]>([]);

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