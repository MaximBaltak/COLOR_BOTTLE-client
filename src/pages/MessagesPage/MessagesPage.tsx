import React, {useState} from 'react';
import styles from './MessagesPage.module.scss'
import checkMessages from './../../img/icons/messages-check.png'
import deleteMessages from './../../img/icons/messages-delete.png'
import Message from "./Message/Message";
const MessagesPage = () => {
    const [mode,setMode]=useState<string>('norm')
    return (
        <div className={styles.background}>
            <p className={styles.background__count}>Всего уведомлений: <span>1</span></p>
            <div className={styles.background_buttons}>
                <button className={styles.background_buttons_button}>
                    <img src={checkMessages} alt="check"/>
                    <p className={styles.background_buttons_button__text}>отметить как прочитанное</p>
                </button>
                {mode==='normal'?
                    <button className={styles.background_buttons_button}
                            onClick={()=>setMode('delete')}>
                        <img src={deleteMessages} alt="delete"/>
                        <p
                            className={[styles.background_buttons_button__text,
                                styles.background_buttons_button_textRedColor].join(' ')}>удалить</p>
                    </button>:
                    <button className={styles.background_buttons_button}
                            onClick={()=>setMode('norm')}>
                        <img src={deleteMessages} alt="delete"/>
                        <p
                            className={[styles.background_buttons_button__text,
                                styles.background_buttons_button_textRedColor].join(' ')}>удалить <span>0</span></p>
                        <p onClick={()=>console.log('Hello')}
                            className={[styles.background_buttons_button__text,
                                styles.background_buttons_button_all].join(' ')}>выбрать всё</p>
                    </button>}
            </div>
            <ul className={styles.background_list}>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
                <Message/>
            </ul>
        </div>
    );
};

export default MessagesPage;
