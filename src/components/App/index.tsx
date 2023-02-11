import { useState, useEffect } from 'react';

import MessageForm from '../MessageForm';
import MessageList from '../MessageList';

import styles from './style.module.scss'

function App() {

  const [message, setMessage] = useState('');
  const [deleteMessage, setDeleteMessage] = useState(''); 
  const [messageListData, setMessageListData] = useState<any[]>([]);

  const setValue = (str: string) => {
    setMessage(str)
  }

  const setDeleteValue = (str: string) => {
    setDeleteMessage(str)
  }

  useEffect(() => {
    if(message) {
      const newArr = [JSON.parse(message), ...messageListData]
      setMessageListData(newArr)
    }
  }, [message])

  useEffect(() => {
    if(deleteMessage) {
        const newArr = [...messageListData.filter(item => JSON.stringify(item) !== deleteMessage)]
        setMessageListData(newArr);  
    }
  }, [deleteMessage])


  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <a href="#">
          <img 
          className={styles.logo}
          src={require('../../resources/logo.png')} 
          alt="logo" />
        </a>
      </header>
      <MessageForm setValue={setValue}/>
      <MessageList MessageList={messageListData}
      setDeleteValue={setDeleteValue}/>
    </div>
  );
}

export default App;
