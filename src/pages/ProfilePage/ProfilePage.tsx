import React from "react";
import styles from "./ProfilePage.module.scss";
import avatar from "./../../img/avatar.jpeg";
import svgSprite from "./../../img/icons/spriteIcons.svg";
import Input from "../../components/Input/Input";

const ProfilePage = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.profile__level}>
        <div className={styles["profile__current-level"]}>25</div>
        <div className={(styles.profile__scores, styles.scores)}>
          <div className={styles.scores__numbers}>
            <span className={styles.scores__current}>9650</span>
            <span className={styles["scores__numbers-divider"]}>/</span>
            <span className={styles["scores__full-level"]}>10000</span>
          </div>
          <div className={styles.scores__progress}>
            <span
              className={styles["scores__current-progress"]}
              style={{width: "90%"}}
            ></span>
          </div>
        </div>
      </div>
      <div className={styles.profile__user}>
        <div className={styles.profile__avatar}>
          <img
            className={styles["profile__avatar-img"]}
            src={avatar}
            alt="user avatar"
          />
          <span className={styles["profile__avatar-edit"]}>
            <svg>
              <use xlinkHref={`${svgSprite}#edit`}></use>
            </svg>
          </span>
        </div>
        <div className={styles.profile__nickname}>
          *nik8929
          <span className={styles["profile__nickname-edit"]}>
            <svg>
              <use xlinkHref={`${svgSprite}#edit`}></use>
            </svg>
          </span>
        </div>
      </div>
      <div className={styles["profile__contacts-and-notifications"]}>
        <div className={styles.profile__contacts}>
          <Input type={"correct"} picture={"check"} val={"max@mail.com"} />
          <Input type={"error"} picture={"close"} val={"+7 (909) 456-12-78"} />
        </div>
        <div className={styles.profile__notifications}>
          <div className={styles["profile__notifications-picture"]}>
            <svg>
              <use xlinkHref={`${svgSprite}#bell`}></use>
            </svg>
            <span className={styles["profile__notifications-number"]}>91</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
