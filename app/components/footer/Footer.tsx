import Link from "next/link";
import "./styles.scss";
import { ButtonUI } from "../ui";
import { AtIcon, PhoneIcon } from "../ui/icons";
import Image from "next/image";

export const Footer = () => {
  const links = [
    {
      text: "Полезная информация",
      link: "#",
    },
    {
      text: "Политика конфиденциальности",
      link: "#",
    },
    {
      text: "Публичная оферта",
      link: "#",
    },
    {
      text: "Заявление о возврате",
      link: "#",
    },
    {
      text: "Офисы продаж FLY.TJ",
      link: "#",
    },
    {
      text: "О нас",
      link: "#",
    },
  ];

  const renderSocialIcon = (icon: string) => (<Image src={`/socialIcons/${icon}`} width={26} height={26} alt="instagram" />)

  const socialMedias = [
    {
      link: "#",
      className: "social-btn",
      socialIcon: renderSocialIcon("instagram.svg"),
    },
    {
      link: "#",
      className: "social-btn",
      socialIcon: renderSocialIcon("facebook.svg"),
    },
    {
      link: "#",
      className: "social-btn",
      socialIcon: renderSocialIcon("telegram.svg"),
    },
    {
      link: "#",
      className: "social-btn",
      socialIcon: renderSocialIcon("whatsapp.svg"),
    },
  ]
  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="footer-links">
          {links.map((elem, index) => (
            <Link key={index} href={elem.link}>
              {elem.text}
            </Link>
          ))}
        </div>
        <div className="contact-section">
          <h3>Наши контакты</h3>
          <div className="contact-block">
            <div className="contact-links">
              <Link href="#">
                <ButtonUI icon={<AtIcon />}>support_b2c@fly.tj</ButtonUI>
              </Link>
              <Link href="#">
                <ButtonUI icon={<PhoneIcon />}>(+992) 900 55 9009</ButtonUI>
              </Link>
              <Link href="#">
                <ButtonUI icon={<PhoneIcon />}>1133</ButtonUI>
              </Link>
            </div>
            <div className="social">
              {socialMedias.map((socialBtn, index) => (
                <Link href={socialBtn.link} key={index}>
                  <ButtonUI icon={socialBtn.socialIcon} className={socialBtn.className}/>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
