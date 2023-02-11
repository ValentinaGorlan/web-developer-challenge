import React, { useState, useReducer } from "react";

import styles from './style.module.scss';

interface MessageFormInterface {
  setValue:  (str: string) => void
}

function MessageForm ({setValue} : MessageFormInterface) {

  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const copy = {
    avatar: avatar,
    name: name,
    message: message
  }

  const onImageChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
        setAvatar(URL.createObjectURL(event.target.files[0]))
    }
  }

  const resetForm = () => {
    setAvatar('');
    setName('');
    setMessage('');
  }

  return (
    <form className={styles.formContainer}>
      <div className={styles.avatar}>
      { avatar ? <img src={avatar} alt="avatar" className={styles.avatarImg}/> : <img src={require('../../resources/image.png')} className={styles.avatarIcon} alt="icon" />}
        <input
          id="avatar"
          accept="image/*"
          type="file"
          onChange={(e) => onImageChange(e)}
          />
      </div>
      { avatar ? <button 
        className={styles.deleteAvatar}
        onClick={() => setAvatar('')}>
          <img src={require('../../resources/trash.png')} alt="delete" />
        </button> : null}
      <input type="text" 
      className={styles.inputText}
      name="name" 
      id="name" 
      placeholder="Digite seu nome"
      value={name}
      onChange={(e) => setName(e.target.value)}/>
      <textarea 
      className={styles.inputText}
      name="message" 
      id="message"
      placeholder="Mensagem"
      value={message}
      onChange={(e) => setMessage(e.target.value)}>
      </textarea>
      <div className={styles.formBtns}>
        <button
        className={styles.cancel}
        onClick={resetForm}>
          Descartar
        </button>
        <button type="submit"
        className={styles.submit}
        disabled={!avatar || !name || !message ? true : false}
        onClick={(e) => {
        e.preventDefault();
        setValue(JSON.stringify(copy));
        resetForm();
        }}>
          Public
        </button>
      </div>
    </form>
  );
}

export default MessageForm;
