import img1 from "../../../public/cities/14.jpg";
import img2 from "../../../public/cities/Berlin_6.jpg";
import img3 from "../../../public/cities/Everything.jpg";
import img4 from "../../../public/cities/La.jpg";
import img5 from "../../../public/cities/Simplemente.jpg";
import img6 from "../../../public/cities/Tashkent.jpg";
import img7 from "../../../public/cities/Без.jpeg";
import img8 from "../../../public/cities/1.jpg";
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.scss";

export const Portholes = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="portholes">
      <Slider {...settings}>
        {images.map((img) => (
          <div key={Math.random() * 100} className="porthole-items">
            <div className="outside">
              <div className="inside">
                <div className="img-wrap">
                  <Image
                    className="image"
                    src={img}
                    width={500}
                    height={500}
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
