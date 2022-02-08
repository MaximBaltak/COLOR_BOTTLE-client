import React, {useState} from 'react';
import styles from './InputForm.module.scss'
import SvgSprite from './../../img/icons/spriteIcons.svg'
interface IinputFromProps{
    type:string,
    placeholder:string
}
const InputForm: React.FC<IinputFromProps> = ({type,placeholder}) => {
    const [typePassword,setTypePassword]=useState<string>('password')
    const show=()=>{
        if(typePassword==='password'){
            setTypePassword('text')
        }else {
            setTypePassword('password')
        }
    }
    return(
        type==='password'?<div className={styles.wrapper}>
            <input className={styles.input} type={typePassword} placeholder='Пароль'/>
            <svg className={styles.show} onClick={show}>
                <use xlinkHref={`${SvgSprite}#show_password`}/>
            </svg>
        </div>:<input className={styles.input} type={type} placeholder={placeholder}/>

    );
};

export default InputForm;
