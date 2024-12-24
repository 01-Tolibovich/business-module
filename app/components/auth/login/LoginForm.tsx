"use client";

import { ButtonUI, HeadingUI, InputUI, LinkUI } from "../../ui";
import { loginRequest } from "@/services";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { validateEmail, validatePassword } from "@/formValidate";
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
  const router = useRouter();

  const validate = () => {
    
    return {
      email: validateEmail(user.email),
      password: validatePassword(user.password),
    };
  };

  const sendUserData = (e: React.FormEvent) => {
    e.preventDefault();

    const { email, password } = user;
    const newError = validate();

    if (Object.values(newError).every((error) => !error)) {
      loginRequest(email, password).then(() => {
        router.push("/");
      });
    } else {
      setErrors(newError);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
    if (Object.values(validate()).every((error) => error)) {
      setErrors(validate())
    } else {
      setErrors({
        email: "",
        password: "",
      })
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
      />
      {errors.email && <small>{errors.email}</small>}
      <InputUI
        label="Пароль"
        name="password"
        type="password"
        onChange={handleChange}
        value={user.password}
        placeholder="Введите ваш пароль"
        onBlur={() => setErrors(validate())}
      />
      {errors.password && <small>{errors.password}</small>}
      <div className="botton-block">
        <LinkUI href="#" className="forget-password">
          <small>Забыли пароль?</small>
        </LinkUI>
        <ButtonUI type="submit">Войти</ButtonUI>
        <small>Ещё нет аккаунта? </small>
        <LinkUI href="#" className="signup">
          <small>Зарегистрироватся</small>
        </LinkUI>
      </div>
    </form>
  );
};
