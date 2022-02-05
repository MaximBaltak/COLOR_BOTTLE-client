import React, {useState} from 'react';
import styles from './Navigation.module.scss'
import logo from './../../img/logo.png'
import login from './../../img/icons/menu/login.png'
import exit from './../../img/icons/menu/exit.png'
import multiplayer from './../../img/icons/menu/multiplayer.png'
import settings from './../../img/icons/menu/settings.png'
import statistics from './../../img/icons/menu/statistics.png'
import {useSpring,animated} from "react-spring";
const Navigation = () => {
    const [show,setShow]=useState(false)
    const animation=useSpring({
        to:{
            width: show?`${302}px`:`${146}px`
        },
    })
    const animationText=useSpring({
        to:{
            opacity: show?  1:0,
        },
        config:{duration:100}
    })
    return (
        <animated.div style={animation}
                      onMouseOver={()=>setShow(prev=>!prev)}
                      onMouseOut={()=>setShow(prev=>!prev)}
                      className={styles.menu}>
            <animated.img style={animationText} className={styles.menu_logo} src={logo} alt="logo"/>
            <ul className={styles.menu_nav}>
                <li className={styles.menu_nav_el}>
                    <img className={styles.menu_nav_el_icon} src={login} alt="login"/>
                    <animated.p style={animationText} className={[styles.menu_nav_el_text,styles.menu_nav_el__colorGreen].join(' ')}
                    >Войти</animated.p>
                </li>
                <li className={styles.menu_nav_el}>
                    <img className={styles.menu_nav_el_icon} src={settings} alt="settings"/>
                    <animated.p style={animationText} className={styles.menu_nav_el_text}>Настройки</animated.p>
                </li>
                <li className={styles.menu_nav_el}>
                   <img className={styles.menu_nav_el_icon} src={multiplayer} alt="multiplayer"/>
                    <animated.p style={animationText} className={[styles.menu_nav_el_text,styles.menu_nav_el__colorBlue].join(' ')}
                    >Комнаты</animated.p>
                </li>
                <li className={styles.menu_nav_el}>
                    <img className={styles.menu_nav_el_icon} src={statistics} alt="statistics"/>
                    <animated.p style={animationText} className={styles.menu_nav_el_text}>Статистика</animated.p>
                </li>
                <li className={styles.menu_nav_el}>
                    <img className={styles.menu_nav_el_icon} src={exit} alt="exit"/>
                    <animated.p style={animationText} className={[styles.menu_nav_el_text,styles.menu_nav_el__colorRed].join(' ')}
                    >Выйти</animated.p>
                </li>
            </ul>
        </animated.div>
    );
};

export default Navigation;