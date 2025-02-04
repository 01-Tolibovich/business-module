"use client";

import Marquee from "react-fast-marquee";

import img1 from "../../../public/cities/14.jpg";
import img2 from "../../../public/cities/Berlin_6.jpg";
import img3 from "../../../public/cities/Everything.jpg";
import img4 from "../../../public/cities/La.jpg";
import img5 from "../../../public/cities/Simplemente.jpg";
import img6 from "../../../public/cities/Tashkent.jpg";
import img7 from "../../../public/cities/Без.jpeg";
import img8 from "../../../public/cities/1.jpg";
import img9 from "../../../public/cities/14.jpg";
import img10 from "../../../public/cities/Berlin_6.jpg";
import img11 from "../../../public/cities/Everything.jpg";

import Image from "next/image";
// import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.scss";

export const Portholes = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
  ];

  return (
    <div className="portholes-wrap">
      <div className="portholes">
        <Marquee speed={100}>
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
        </Marquee>
      </div>
    </div>
  );
};
