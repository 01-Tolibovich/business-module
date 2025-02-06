"use client"

import Image from "next/image";
import { useAnimationsOnVisible } from "@/hooks";
import { HeadingUI } from "../ui";

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

  const {visibleIndexes, refs} = useAnimationsOnVisible()
  return (
    <div className="our-partners">
      <HeadingUI as="h2" textAlign="center">Наши партнеры</HeadingUI>
      <div className="partner-items">
        {partnersLogo.map((img, index) => (
          <div ref={(el) => {refs.current[index] = el}} className="partner-item" key={index}>
            <Image className={`img ${visibleIndexes.has(index) ? "is-visible" : ""}`} src={img} width={200} height={60} alt="img" />
          </div>
        ))}
      </div>
    </div>
  );
};
