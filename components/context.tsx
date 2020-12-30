import * as React from 'react';
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';


interface AppContextInterface {
  appName: string,
  avatar: string,
  setAvatar: (arg: string) => void;
}
export const Context = createContext<AppContextInterface | null>(null);
type Props = {
  children: React.ReactNode
}
export const ConfigProvider: React.FC = ({ children }: Props) => {
  const [avatar, setAvatar] = useState<string>('https://i.pinimg.com/564x/0a/dd/87/0add874e1ea0676c4365b2dd7ddd32e3.jpg');
  const appName = "Frisbie"
  return (
    <Context.Provider
      value={{
        appName,
        avatar,
        setAvatar,
      }}
    >
      {children}
    </Context.Provider>
  );
};
ConfigProvider.propTypes = {
  children: PropTypes.node.isRequired,
};