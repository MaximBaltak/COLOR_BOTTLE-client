import React from 'react';
import styles from './ConfirmPage.module.scss'
import Button from "../../components/Button/Button";
import InputForm from "../../components/InputForm/InputForm";
const ConfirmPage = () => {
    return (
        <div className={styles.background}>
            <h1 className={styles.background_title}>Подтверждения почты</h1>
            <p className={styles.background_desc}>На почту, max@mai.ru, отправлено письмо с кодом. Код действует 3 минуты, введите код в поле вода.</p>
            <p className={styles.background_timer}>0:00</p>
            <div className={styles.background_buttons}>
                <InputForm type='text' placeholder='введите код'/>
                <button className={styles.background_buttons__confirm}>Подтвердить</button>
            </div>
            <p className={styles.background_error}>Код не верный</p>
            <div className={styles.background_send}><Button text='Отправить повторно'/></div>
        </div>
    );
};

export default ConfirmPage;
