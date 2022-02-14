import React from 'react';
import styles from './Message.module.scss'
const Message = () => {
    return (
        <li className={styles.message}>
            <p className={styles.message__date}>01.02.22</p>
            <h2 className={styles.message__title}>Добро пожаловать!</h2>
            <p className={styles.message__text}>Поздравляю, nik_922 c регистрацией!
                Теперь вы можете пользоваться всеми функциями приложения. Менять тему, создавать комнаты, приглашать друзей.
                Приятной вам игры!</p>
        </li>
    );
};

export default Message;
