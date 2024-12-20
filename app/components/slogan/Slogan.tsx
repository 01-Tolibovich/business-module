import { HeadingUI } from "../ui";
import "./styles.scss";

export const Slogan = () => {
  return (
    <div className="slogan">
      <HeadingUI as="h1" textAlign="center" className="title">
        <span>ONLINE</span> - РЕШЕНИЕ ДЛЯ ТЕХ, КТО ЛЕТАЕТ С УМОМ
      </HeadingUI>
      <p className="description">
        <span>FLY.TJ FOR BUSINESS</span> - сервис для организации командировок
        на базе собственного ПО. Бронируйте билеты без сервисных сборов и
        наценок субагентов. Поддержим 24/7
      </p>
    </div>
  );
};
