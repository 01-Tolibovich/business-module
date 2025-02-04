"use client";

import { ButtonUI, HeadingUI, InputUI, LinkUI } from "../../ui";
import { getUserInfo, loginRequest } from "@/services";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { validateEmail, validatePassword } from "@/formValidate";
import userAuth from "@/store/userAuth";
import "./styles.scss";

export const LoginForm = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<{
    email: string | null;
    password: string | undefined;
  }>({
    email: "",
    password: "",
  });
  const [isLoad, setIsLoad] = useState(false);

  const setUserData = userAuth((state) => state.setUserData);
  const setIsAuth = userAuth((state) => state.setIsAuth);
  const router = useRouter();

  const validate = () => {
    return {
      email: validateEmail(user.email),
      password: validatePassword(user.password),
    };
  };

  const sendUserData = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoad(true);
    const { email, password } = user;
    const newError = validate();

    if (Object.values(newError).every((error) => !error)) {
      loginRequest(email, password).then((res) => {
        setIsLoad(false);
        getUserInfo().then((userData) => {
          if (userData) {
            setUserData(userData);
            setIsAuth(true);
            router.push("/");             
          }
        });
        if (!res) {
          setIsLoad(false);
        }
      });
    } else {
      setErrors(newError);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
    if (Object.values(validate()).every((error) => error)) {
      setErrors(validate());
    } else {
      setErrors({
        email: "",
        password: "",
      });
    }
  };

  return (
    <form onSubmit={sendUserData} className="login-form">
      <HeadingUI as="h3" className="title">
        Войти
      </HeadingUI>
      <InputUI
        label="Email"
        name="email"
        type="text"
        onChange={handleChange}
        value={user.email}
        placeholder="Введите свой email"
        onBlur={() => setErrors(validate())}
        errors={errors.email}
      />
      <InputUI
        label="Пароль"
        name="password"
        type="password"
        onChange={handleChange}
        value={user.password}
        placeholder="Введите ваш пароль"
        onBlur={() => setErrors(validate())}
        errors={errors.password}
      />
      <div className="botton-block">
        <LinkUI href="#" className="forget-password">
          <small>Забыли пароль?</small>
        </LinkUI>
        <ButtonUI isLoad={isLoad} loadText="Войти" type="submit">
          Войти
        </ButtonUI>
        <small>Ещё нет аккаунта? </small>
        <LinkUI href="#" className="signup">
          <small>Зарегистрироватся</small>
        </LinkUI>
      </div>
    </form>
  );
};
