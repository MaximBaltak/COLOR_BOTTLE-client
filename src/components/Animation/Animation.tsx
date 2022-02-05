import React from 'react';
import styles from './Animation.module.scss'
const Animation = () => {
    return (
        <div className={styles.animation}>
            <div className={styles.circle1}/>
            <div className={[styles.circle1,styles.circle2].join(' ')}/>
            <div className={[styles.circle1,styles.circle3].join(' ')}/>
            <div className={[styles.circle1,styles.circle4].join(' ')}/>
            <div className={[styles.circle1,styles.circle5].join(' ')}/>
            <div className={[styles.circle1,styles.circle6].join(' ')}/>
            <div className={[styles.circle1,styles.circle7].join(' ')}/>
            <div className={[styles.circle1,styles.circle8].join(' ')}/>
            <div className={[styles.circle1,styles.circle9].join(' ')}/>
        </div>
    );
};

export default Animation;