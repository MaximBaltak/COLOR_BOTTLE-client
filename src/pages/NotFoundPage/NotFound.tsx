import React from 'react';
import styles from './NotFoundPage.module.scss'
const NotFound = () => {
    return (
        <div className={styles.container}>
            <p className={styles.container__text}>404</p>
            <p className={styles.container__text}>Страница не найдена</p>
        </div>
    );
};

export default NotFound;
