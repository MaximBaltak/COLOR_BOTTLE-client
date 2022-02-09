import React, {useState} from "react";
import styles from "./InputForm.module.scss";
import SvgSprite from "./../../img/icons/spriteIcons.svg";

interface InputFromProps {
  type: string;
  placeholder: string;
}

const InputForm: React.FC<InputFromProps> = ({type, placeholder}) => {
  const [typePassword, setTypePassword] = useState<boolean>(true);

  return type === "password" ? (
    <div className={styles.inputform}>
      <input
        className={styles.inputform__field}
        type={typePassword ? "password" : "text"}
        placeholder="Пароль"
      />
      <svg
        className={styles.inputform__showtoggler}
        onClick={() => setTypePassword(!typePassword)}
      >
        <use xlinkHref={`${SvgSprite}#show_password`} />
      </svg>
    </div>
  ) : (
    <input
      className={styles.inputform__field}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default InputForm;
