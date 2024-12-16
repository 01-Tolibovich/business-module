import Image from "next/image";
import "./styles.scss";

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
      <h2>Наши партнеры</h2>
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
