import { useState, useEffect } from 'react';

import styles from './style.module.scss';

interface MessageListInterface {
  MessageList: Array<any>;
  setDeleteValue:  (str: string) => void
}

function MessageList({MessageList, setDeleteValue} : MessageListInterface) {
  const [messageList, setMessageList] = useState(MessageList)

  useEffect(() => {
    setMessageList(MessageList)
  }, [MessageList])

  const createList = (arr: Array<any>) => {
    const elements = arr.map((item, ind) => {
      return (
        <li
          key={ind}
          className={styles.messageContainer}>
          <div className={styles.avatar}>
            <img src={item.avatar} alt="poster" />
          </div>
          <div className={styles.messageText}>
            <p className={styles.message}>{item.message}</p>
            <p className={styles.small}>Enviado por</p>
            <p className={styles.name}>{item.name}</p>
          </div>
          <button className={styles.delete}
          onClick={() => {
            setDeleteValue(JSON.stringify(item))
          }}>
            <img src={require('../../resources/delete.png')} alt="" />
          </button>
        </li>
      );
    });

    return (
      <div className={styles.container}>
        <p>Feed</p>
        <ul>
          {elements}
        </ul>
      </div>
    )
  }

  return (
    <div>
      {createList(messageList)}
    </div>
  );
}

export default MessageList;
