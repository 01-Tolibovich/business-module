"use client";

import { useAnimationsOnVisible } from "@/hooks";
import { HeadingUI } from "../ui";
import "./styles.scss";

interface SAndTProps {
  info: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
}

export const ServicesAndTechnologies: React.FC<SAndTProps> = ({ info }) => {
  const { visibleIndexes, refs } = useAnimationsOnVisible();
  return (
    <div className="services-and-technologies">
      <HeadingUI as="h2" textAlign="center">
        Сервисы и технологии
      </HeadingUI>
      <div className="items">
        {info.map((item, index) => (
          <div
            ref={(el) => {
              refs.current[index] = el;
            }}
            key={index}
            className="item"
          >
            <div
              className={`head ${
                visibleIndexes.has(index) ? "is-visible" : ""
              }`}
            >
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
