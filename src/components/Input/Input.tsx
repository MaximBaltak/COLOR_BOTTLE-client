import React from "react";
import styles from "./Input.module.scss";
import svgSprite from "../../img/icons/spriteIcons.svg";

const Input: React.FC<{type: String; picture: String; val: any}> = ({
  type,
  picture,
  val,
}) => {
  return (
    <div className={styles.input}>
      <input
        value={val}
        className={[
          styles.input__field,
          type ? styles[`input__field_${type}`] : "",
        ].join(" ")}
        type="text"
      />
      <span
        className={[
          styles.input__sign,
          type ? styles[`input__sign_${type}`] : "",
        ].join(" ")}
      >
        <svg>
          <use xlinkHref={`${svgSprite}#${picture}`}/>
        </svg>
      </span>
    </div>
  );
};

export default Input;
