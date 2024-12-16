import { AgreementIcon, PaymentIcon, PlaneTicketIcon } from "../ui/icons";
import "./styles.scss";

export const ServicesAndTechnologies = () => {
  const servicesInfo = [
    {
      icon: <AgreementIcon />,
      title: "Спектр услуг",
      description:
        "Спектр услуг, которые оказывает наша компания, весьма разнообразна. Помимо пассажирских авиаперевозок, наши специалисты также помогут Вам в организации Вашей деловой поездки (забронировать отель, оформить страховой полис и визу). Компания «FLY.TJ» является лидером продаж авиабилетов по всем направлениям на рынке авиаперевозок",
    },
    {
      icon: <PlaneTicketIcon />,
      title: "Бронирование",
      description:
        "За это время нами была разработана и оптимизирована онлайн система по реализации авиабилетов, которая не имеет аналогов в Таджикистане. Данная система позволяет Вам легко и просто оценивать, бронировать и покупать авиабилеты самостоятельно на сайт.",
    },
    {
      icon: <PaymentIcon />,
      title: "Оплата",
      description:
        "За это время нами была разработана и оптимизирована онлайн система по реализации авиабилетов, которая не имеет аналогов в Таджикистане. Данная система позволяет Вам легко и просто оценивать, бронировать и покупать авиабилеты самостоятельно на сайт.",
    },
  ];
  return (
    <div className="services-and-technologies">
      <h2>Сервисы и технологии</h2>
      <div className="items">
      {servicesInfo.map((item, index) => (
        <div key={index} className="item">
          <div className="head">
            <span>{item.icon}</span>
            <h4>{item.title}</h4>
          </div>
          <p>{item.description}</p>
        </div>
      ))}
      </div>
    </div>
  );
};
