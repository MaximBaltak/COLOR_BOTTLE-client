import React from 'react';
import styles from './Button.module.scss'
interface IButtonProps{
    text:string,
    width?:string,
    height?:string,
    callback?:any,
    arg1?:any,
    arg2?:any
}
const Button:React.FC<IButtonProps> = ({
                                           text,
                                           width,
                                           height,
                                           callback,
                                           arg1,
                                           arg2}) => {
    return <button className={styles.button}
                   style={{width,height}}
                   onClick={()=>callback(arg1,arg2)}>{text}</button>;
};

export default Button;
