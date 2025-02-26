import { DropDownUI, HeadingUI, InputUI } from "@/app/components/ui";
import { useExtraWindow } from "@/hooks";
import { useState } from "react";

import "./styles.scss";
import { MinusIcon, PlusIcon } from "@/app/components/ui/icons";

export const PassengerAndCabin: React.FC = () => {
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
  const { isShowExtraWindow, setIsShowExtraWindow, handleToggleExtraWindow } =
    useExtraWindow();

  // const [totalCount, setTotalCount] = useState(1);

  const handleCounter = (type: string, operator: "+" | "-") => {
    setPassenger((prev) => {
      const total = prev.reduce((sum, p) => sum + p.count, 0);
      
      
      if (total >= 9 && operator === "+") return prev;

      if (operator === "-" && prev.find(p => p.type && type === "adt")?.count === 1) {
        return prev.map((p) =>
          p.type === "adt" ? { ...p, count: 1} : p
        )
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
    const pCount = total.toString()

    if (total === 1) {
      return `${pCount} пассажир`
    } else if (total < 5) {
      return `${pCount} пассажира`
    } else {
      return `${pCount} пассажиров` 
    }
  }

  console.log(passenger.reduce((sum, p) => sum + p.count, 0));
  
  

  return (
    <DropDownUI
      {...isShowExtraWindow}
      setIsShowDropDown={setIsShowExtraWindow}
      right="0"
    >
      <div onClick={() => handleToggleExtraWindow()}>
        <InputUI
          readOnly
          label={renderTotalPassengers()}
          placeholder="Без привязки к классу"
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
                  <p>{el.title}</p>
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
        <div></div>
      </div>
    </DropDownUI>
  );
};
