import Image from "next/image";
import "./styles.scss";
import { HeadingUI } from "../ui";

export const OurPartners = () => {
  const partnersLogo = [
    "/ourPartners/1.png",
    "/ourPartners/2.png",
    "/ourPartners/3.png",
    "/ourPartners/4.png",
    "/ourPartners/5.png",
    "/ourPartners/6.png",
    "/ourPartners/7.png",
    "/ourPartners/8.png",
  ];
  return (
    <div className="our-partners">
      <HeadingUI as="h2" textAlign="center">Наши партнеры</HeadingUI>
      <div className="partner-items">
        {partnersLogo.map((img, index) => (
          <div className="partner-item" key={index}>
            <Image className="img" src={img} width={200} height={60} alt="img" />
          </div>
        ))}
      </div>
    </div>
  );
};
