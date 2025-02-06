"use client";

import { useAnimationsOnVisible } from "@/hooks";
import { HeadingUI } from "../ui";

import "./styles.scss";

interface OurAdvantagesProps {
  data: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
}

export const OurAdvantages: React.FC<OurAdvantagesProps> = ({ data }) => {
  const { visibleIndexes, refs } = useAnimationsOnVisible();

  return (
    <div className="our-advantages">
      <HeadingUI as="h2" textAlign="center">
        Наши преимущества
      </HeadingUI>
      <div className="our-advantages-items">
        {data.map((item, index) => (
          <div key={index} className="advantages-item">
            <div className="inset-block">
              <span
                ref={(el) => {
                  refs.current[index] = el;
                }}
                className={`icon ${
                  visibleIndexes.has(index) ? "is-visible" : ""
                }`}
              >
                {item.icon}
              </span>
                <HeadingUI as="h6" className={`item-title ${visibleIndexes.has(index) ? "is-visible" : ""}`}>
                  {item.title}
                </HeadingUI>
              <p className={visibleIndexes.has(index) ? "is-visible" : ""}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
