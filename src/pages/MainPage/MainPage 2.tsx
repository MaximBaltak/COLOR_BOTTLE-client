import React from 'react';
import styles from './MainPage.module.scss'
import logo from './../../img/logo.png'
import {useSpring, animated} from "react-spring";

const MainPage = () => {
    const animation = useSpring({
        from: {
            opacity: 0,
            transform: `scale(${0})`
        },
        to: {
            opacity: 1,
            transform: `scale(${1})`
        },
        config: {duration: 1000}
    })
    return (
        <div className={styles.main}>
            <animated.img style={animation} className={styles.main_logo} src={logo} alt="logo"/>
            <animated.p style={animation} className={styles.main_desc}>BOTTLE - красочная онлайн-игра, где вам предстоит
                в компании других игроков приятно провести время отгадывая цвета и повышать свой уровень в игре.
            </animated.p>
        </div>
    );
};

export default MainPage;