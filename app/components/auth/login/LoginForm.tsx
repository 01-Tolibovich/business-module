"use client";

import { ButtonUI, HeadingUI, InputUI, LinkUI } from "../../ui";
import { loginRequest } from "@/services";
import { ChangeEvent, useState } from "react";
import "./styles.scss";

export const LoginForm = () => {
  const [user, setUser] = useState({
    login: "",
    password: "",
  });

  const loginHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setUser((prevState) => ({ ...prevState, login: e.target.value }));
  };

  const passwordHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setUser((prevState) => ({ ...prevState, password: e.target.value }));
  };

  const sendUserData = () => {
    const { login, password } = user;
    loginRequest(login, password)
    .then((response) => {
      console.log(response.token);
      // response
      
    });
  };
  return (
    <div className="login-form">
      <HeadingUI as="h3" className="title">
        Войти
      </HeadingUI>
      <InputUI
        label="Email"
        type="text"
        onChange={loginHandle}
        value={user.login}
        placeholder="Введите свой email"
      />
      <InputUI
        label="Пароль"
        type="password"
        onChange={passwordHandle}
        value={user.password}
        placeholder="Введите ваш пароль"
      />
      <div className="botton-block">
        <LinkUI href="#" className="forget-password">
          <small>Забыли пароль?</small>
        </LinkUI>
        <ButtonUI onClick={sendUserData}>Войти</ButtonUI>
        <small>Ещё нет аккаунта? </small>
        <LinkUI href="#" className="signup">
          <small>Зарегистрироватся</small>
        </LinkUI>
      </div>
    </div>
  );
};
