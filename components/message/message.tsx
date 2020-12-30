import styles from './message.module.css'

import React, { useContext } from 'react';

import { Context } from '../context';

const Message = () => {
  const global = useContext(Context);

  return (
    <div className={styles.message}>
      { global.message }
    </div>
  )
}
export default Message;
