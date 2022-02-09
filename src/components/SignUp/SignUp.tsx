import React from 'react';
import styles from './SignUp.module.scss'
import SvgSprite from './../../img/icons/spriteIcons.svg'
import InputForm from "../InputForm/InputForm";
import Button from "../Button/Button";
interface ISignUp{
    type:string
}
const SignUp:React.FC<ISignUp> = ({type}) => {
    return (
        <div className={styles.form}>
            <p className={styles.form__error}>Такого пользователя не существует</p>
            <div className={styles.form_wrapper}>
                <div className={styles.form_wrapper_align}><InputForm type='text' placeholder='Логин'/></div>
                <ul className={styles.form_wrapper_errors}>
                    <li className={styles.form_wrapper_errors__el}>
                        <svg>
                            <use xlinkHref={`${SvgSprite}#validate_no`}/>
                        </svg>
                        <p>Есть латинские символы</p>
                    </li>
                    <li className={styles.form_wrapper_errors__el}>
                        <svg>
                            <use xlinkHref={`${SvgSprite}#validate_no`}/>
                        </svg>
                        <p>максимум 20 символов</p>
                    </li>
                    <li className={styles.form_wrapper_errors__el}>
                        <svg>
                            <use xlinkHref={`${SvgSprite}#validate_no`}/>
                        </svg>
                        <p>Поле не пустое</p>
                    </li>
                </ul>
            </div>
            <div className={styles.form_wrapper}>
                <div className={styles.form_wrapper_align}><InputForm type='password' placeholder='Пароль'/></div>
                <ul className={styles.form_wrapper_errors}>
                    <li className={styles.form_wrapper_errors__el}>
                        <svg>
                            <use xlinkHref={`${SvgSprite}#validate_no`}/>
                        </svg>
                        <p>Есть латинские символы</p>
                    </li>
                    <li className={styles.form_wrapper_errors__el}>
                        <svg>
                            <use xlinkHref={`${SvgSprite}#validate_no`}/>
                        </svg>
                        <p>минимум 8 символов</p>
                    </li>
                    <li className={styles.form_wrapper_errors__el}>
                        <svg>
                            <use xlinkHref={`${SvgSprite}#validate_no`}/>
                        </svg>
                        <p>есть цифры</p>
                    </li>
                    <li className={styles.form_wrapper_errors__el}>
                        <svg>
                            <use xlinkHref={`${SvgSprite}#validate_no`}/>
                        </svg>
                        <p>есть знаки: @ $ & #</p>
                    </li>
                    <li className={styles.form_wrapper_errors__el}>
                        <svg>
                            <use xlinkHref={`${SvgSprite}#validate_yes`}/>
                        </svg>
                        <p>Поле не пустое</p>
                    </li>
                </ul>
            </div>
            <div className={styles.form_wrapperButton}>
                {type==='signIn'? <Button text='Войти'/>:<Button text='Зарегистрироваться'/>}
            </div>
            <div className={styles.form_buttons}>
                <p>Востановление доступа</p>
                <hr/>
                {type==='signIn'?<p>Зарегистрироваться</p>:<p>Войти</p>}
            </div>
        </div>
    );
};

export default SignUp;
