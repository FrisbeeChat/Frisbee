import styles from './message.module.css'

import React, { useContext } from 'react';

import { Context } from '../context';

const Message = () => {
  const global = useContext(Context);

  return (
    <div className={styles.container}>
      <div className={styles.messageContainer}>
         <div className={styles.message}>
          { global.message }
         </div>
        <div className={styles.curl}>
          <div className={styles.curlcontent} onClick={()=>{global.setMessage("hello world")}} >
            <div className={styles.button} ></div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Message;
