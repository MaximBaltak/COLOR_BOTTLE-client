import React from 'react';
import styles from './StatisticsPage.module.scss'
const StatisticsPage = () => {
    return (
        <div className={styles.background}>
           <h1 className={styles.background_title}>Статистика</h1>
           <div className={styles.background_containerFlex}>
               <div className={styles.background_containerFlex_el}>
                   <div className={styles.background_containerFlex_el_level}><p>1</p></div>
               </div>
               <div className={styles.background_containerFlex_el}>
                   <p className={styles.background_containerFlex__points}>200 оч.</p>
               </div>
               <div className={styles.background_containerFlex_el}>
                   <p className={styles.background_containerFlex_text}>количество игр: <span>293</span></p>
                   <p className={styles.background_containerFlex_text}>количество угаданных цвета: <span>293</span></p>
                   <p className={styles.background_containerFlex_text}>Общее время в игре: <span>293 ч.</span></p>
               </div>
               <div className={styles.background_containerFlex_el}>
                   <p className={styles.background_containerFlex_text}>количество угаданных цвета: <span>293</span></p>
               </div>
           </div>
        </div>
    );
};

export default StatisticsPage;
