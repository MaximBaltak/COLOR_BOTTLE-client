import React from "react";
import styles from "./Authorization.module.scss";
import logo from "./../../img/logo.png";
import SignUp from "../../components/SignUp/SignUp";
const AuthorizationPage = () => {
  return (
    <div className={styles.background}>
      <img src={logo} alt="logo" />
      <SignUp type="signIn" />
    </div>
  );
};

export default AuthorizationPage;
