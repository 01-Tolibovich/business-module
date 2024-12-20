import { HeadingUI } from "../ui";
import {
  ArmchairsIcon,
  PortfolioIcon,
  SafetyIcon,
  SettingsIcon,
  SnowIcon,
  SpyIcon,
  SupportIcon,
  TwentyFourIcon,
} from "../ui/icons";
import "./styles.scss";

export const OurAdvantages = () => {
  const ourAdvantagesdata = [
    {
      icon: <ArmchairsIcon />,
      title: "Удобства",
      description: "Простой, приятный и удобный интерфейс",
    },
    {
      icon: <TwentyFourIcon />,
      title: "Доступ 24/7",
      description: "Покупка билетов на любые направления",
    },
    {
      icon: <SnowIcon />,
      title: "Уникальность",
      description: "Доступ к уникальному продукту",
    },
    {
      icon: <SupportIcon />,
      title: "Удобства",
      description: "Простой, приятный и удобный интерфейс",
    },
    {
      icon: <SpyIcon />,
      title: "Конфиденциальность",
      description: "Без предоставления данных третьим лицам",
    },
    {
      icon: <SafetyIcon />,
      title: "Безопасность",
      description: "Безопасное соединение",
    },
    {
      icon: <PortfolioIcon />,
      title: "Профессионализм",
      description: "Оперативное обслуживание",
    },
    {
      icon: <SettingsIcon />,
      title: "Софт",
      description: "Собственная система бронирования",
    },
  ];

  return (
    <div className="our-advantages">
      <HeadingUI as="h2" textAlign="center">Наши преимущества</HeadingUI>
      <div className="our-advantages-items">
        {ourAdvantagesdata.map((item, index) => (
          <div key={index} className="advantages-item">
            <div className="inset-block">
              <span className="icon">{item.icon}</span>
              <HeadingUI as="h6" className="item-title">{item.title}</HeadingUI>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
