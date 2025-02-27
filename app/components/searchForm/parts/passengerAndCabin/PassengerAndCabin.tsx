import { DropDownUI, HeadingUI, InputUI } from "@/app/components/ui";
import { useExtraWindow } from "@/hooks";
import { useEffect, useState } from "react";

import "./styles.scss";
import { MinusIcon, PlusIcon } from "@/app/components/ui/icons";
import searchParams from "@/store/searchParams";

export const PassengerAndCabin: React.FC = () => {
  const setSearchParamsData = searchParams(
    (state) => state.setSearchParamsData
  );
  const searchParamsData = searchParams((state) => state.searchParamsData);

  const [passenger, setPassenger] = useState([
    {
      type: "adt",
      count: 1,
    },
    {
      type: "chd",
      count: 0,
    },
    {
      type: "ins",
      count: 0,
    },
    {
      type: "inf",
      count: 0,
    },
  ]);

  const passengersData = [
    {
      title: "Взрослый",
      info: "от 12 лет и старше",
      count: passenger[0].count,
      passengerType: passenger[0].type,
    },
    {
      title: "Ребенок",
      info: "2 - 12 лет",
      count: passenger[1].count,
      passengerType: passenger[1].type,
    },
    {
      title: "Младенец",
      info: "до 2 лет (с местом)",
      count: passenger[2].count,
      passengerType: passenger[2].type,
    },
    {
      title: "Младенец",
      info: "до 2 лет (без места)",
      count: passenger[3].count,
      passengerType: passenger[3].type,
    },
  ];

  const cabins = [
    {
      cabin: "economy",
      type: "radio",
      label: "Эконом класс",
      htmlFor: "1",
    },
    {
      cabin: "business",
      type: "radio",
      label: "Бизнес класс",
      htmlFor: "2",
    },
    {
      cabin: "first",
      type: "radio",
      label: "Первый класс",
      htmlFor: "3",
    },
    {
      cabin: "all",
      type: "radio",
      label: "Без привязки к классу",
      htmlFor: "4",
    },
  ];

  const { isShowExtraWindow, setIsShowExtraWindow, handleToggleExtraWindow } =
    useExtraWindow();

  const handleCounter = (type: string, operator: "+" | "-") => {
    setPassenger((prev) => {
      const total = prev.reduce((sum, p) => sum + p.count, 0);

      if (total >= 9 && operator === "+") return prev;

      if (
        operator === "-" &&
        prev.find((p) => p.type && type === "adt")?.count === 1
      ) {
        return prev.map((p) => (p.type === "adt" ? { ...p, count: 1 } : p));
      }

      return prev.map((p) =>
        p.type === type
          ? { ...p, count: Math.max(0, p.count + (operator === "+" ? 1 : -1)) }
          : p
      );
    });
  };

  const renderTotalPassengers = () => {
    const total = passenger.reduce((sum, p) => sum + p.count, 0);
    const pCount = total.toString();

    if (total === 1) {
      return `${pCount} пассажир`;
    } else if (total < 5) {
      return `${pCount} пассажира`;
    } else {
      return `${pCount} пассажиров`;
    }
  };

  console.log(searchParamsData);
  const [currentIndex, setCurrentIndex] = useState(3);

  const pickCabin = (index: number) => {
    setCurrentIndex(index);

    setSearchParamsData({
      ...searchParamsData,
      cabin: cabins[index].cabin
    })
  };

  useEffect(() => {
    const counter = (index: number) => {
      return passenger[index].count.toString();
    };
    setSearchParamsData({
      ...searchParamsData,
      passengers: {
        adt: counter(0),
        chd: counter(1),
        ins: counter(2),
        inf: counter(3),
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [passenger]);

  return (
    <DropDownUI
      {...isShowExtraWindow}
      setIsShowDropDown={setIsShowExtraWindow}
      right="0"
    >
      <div onClick={() => handleToggleExtraWindow()}>
        <InputUI
          readOnly
          label={cabins[currentIndex].label}
          value={renderTotalPassengers()}
          classInputBlock="passenger-and-cabin"
          classInput="passenger-and-cabin-input"
        />
      </div>
      <div>
        <div>
          <HeadingUI as="h5">Пассажиры</HeadingUI>
          <div>
            {passengersData.map((el) => (
              <div key={Math.random()} className="passenger-type-section">
                <div>
                  <p className="title">{el.title}</p>
                  <small>{el.info}</small>
                </div>
                <div className="counter-block">
                  <button
                    onClick={() => handleCounter(el.passengerType, "-")}
                    className="counter-button"
                  >
                    <MinusIcon />
                  </button>
                  <span>{el.count}</span>
                  <button
                    onClick={() => handleCounter(el.passengerType, "+")}
                    className="counter-button"
                  >
                    <PlusIcon />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="cabin-section">
          <HeadingUI className="title" as="h5">
            Выберите класс
          </HeadingUI>
          <div>
            {cabins.map((el, index) => (
              <div key={Math.random()} className="cabin">
                <InputUI
                  type={el.type}
                  label={el.label}
                  htmlFor={el.htmlFor}
                  name="cabin"
                  onChange={() => pickCabin(index)}
                  checked={currentIndex === index}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </DropDownUI>
  );
};
