import * as React from 'react';
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';


interface AppContextInterface {
  appName: string,
  userData: string,
  setuserData: (arg: string) => void,
  currentMessage: number,
  setCurrentMessage: (arg:number) => void;
  messages: object[],
  setMessages: (arg: object[]) => void;
}
export const Context = createContext<AppContextInterface | null>(null);
type Props = {
  children: React.ReactNode
}
export const ConfigProvider: React.FC = ({ children }: Props) => {
  const [userData, setuserData] = useState<string>('')

  const [currentMessage, setCurrentMessage] = useState<number>(0);

  const [messages, setMessages] = useState<object[]>([]);

  const appName = "Frisbie";

  return (
    <Context.Provider
    value={{
      appName,
      currentMessage,
      setCurrentMessage,
      userData,
      setuserData,
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