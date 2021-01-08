import { createContext, useState } from 'react';
import PropTypes from 'prop-types';


interface LoginContextInterface {
  firstName: string,
  setFirstName: (arg: string) => void,
  lastName: string,
  setLastName: (arg: string) => void,
  email: string,
  setEmail: (arg: string) => void;
  password: string,
  setPassword: (arg:string) => void;
}
export const LoginContext = createContext<LoginContextInterface | null>(null);
type Props = {
  children: React.ReactNode
}
export const LoginProvider: React.FC = ({ children }: Props) => {
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <LoginContext.Provider
    value={{
      firstName,
      setFirstName,
      lastName,
      setLastName,
      email,
      setEmail,
      password,
      setPassword,
    }}
    >
      {children}
    </LoginContext.Provider>
  );
};
LoginProvider.propTypes = {
  children: PropTypes.node.isRequired,
};