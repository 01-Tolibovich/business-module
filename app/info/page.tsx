import {
  Auth,
  OurAdvantages,
  OurPartners,
  ServicesAndTechnologies,
  Slogan,
} from "../components";
import {
  ArmchairsIcon,
  PortfolioIcon,
  SafetyIcon,
  SettingsIcon,
  SnowIcon,
  SpyIcon,
  SupportIcon,
  TwentyFourIcon,
} from "../components/ui/icons";
import {
  AgreementIcon,
  PaymentIcon,
  PlaneTicketIcon,
} from "../components/ui/icons";

export default async function Home() {
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
    <div>
      <section>
        <Slogan />
        <Auth />
      </section>
      <section>
        <OurAdvantages data={ourAdvantagesdata} />
      </section>
      <section>
        <ServicesAndTechnologies info={servicesInfo} />
      </section>
      <section>
        <OurPartners />
      </section>
    </div>
  );
}
