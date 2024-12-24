export const validateEmail = (email: string) => {
  if (!email) return "Поле email обязательно";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Некорректный email";
  return null;
};

export const validatePassword = (password: string) => {
  if (!password) return "Поле пароль обязательно";
  if (password.length < 6) return "Пароль должен содержать минимум 6 символов";
};
