import React from 'react';
import styles from './RestoringPage.module.scss'
import InputForm from "../../components/InputForm/InputForm";
import Button from "../../components/Button/Button";
const RestoringPage = () => {
    return (
        <div className={styles.background}>
            <h1 className={styles.background__title}>Восстановление доступа</h1>
            <p className={styles.background__desc}>Письмо отправлено</p>
            <div className={styles.background_inputs}>
                <InputForm type='email' placeholder='Введите почту'/>
                <InputForm type='text' placeholder='Введите код'/>
            </div>
            <p className={styles.background_error}>Код не верный</p>
            <div className={styles.background_send}><Button text='Отправить'/></div>
            <button className={styles.background__next}>восстановить через телефон</button>
        </div>
    );
};

export default RestoringPage;
