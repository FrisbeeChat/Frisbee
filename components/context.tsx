import * as React from 'react';
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';


interface AppContextInterface {
  appName: string,
  authorAvatar: string,
  setAuthorAvatar: (arg: string) => void,
  authorName: string,
  setAuthorName: (arg: string) => void,
  avatar: string,
  setAvatar: (arg: string) => void;
  message: string,
  setMessage: (arg:string) => void;
  messages: string[],
  setMessages: (arg: string[]) => void;
}
export const Context = createContext<AppContextInterface | null>(null);
type Props = {
  children: React.ReactNode
}
export const ConfigProvider: React.FC = ({ children }: Props) => {
  const [authorAvatar, setAuthorAvatar] = useState<string>('https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/05/01/08/avatar-sigourney-weaver.jpg')
  const [authorName, setAuthorName] = useState<string>('not nancy pelosi')
  const [avatar, setAvatar] = useState<string>('https://i.pinimg.com/564x/0a/dd/87/0add874e1ea0676c4365b2dd7ddd32e3.jpg');
  const [message, setMessage] = useState<string>('This is a long and thoughtful message')
  const [messages, setMessages] = useState<string[]>([])
  const appName = "Frisbie"
  return (
    <Context.Provider
      value={{
        appName,
        authorName,
        setAuthorName,
        authorAvatar,
        setAuthorAvatar,
        avatar,
        setAvatar,
        message,
        setMessage,
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