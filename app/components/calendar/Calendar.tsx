import moment from "moment";
import "moment/locale/ru";
import { ButtonUI, HeadingUI } from "../ui";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.scss";
import { useState } from "react";
import { ArrowIcon } from "../ui/icons";

moment.locale("ru");

interface CalendarProps {
  handleSetDate: (year: number, month: number, day: number | null) => void;
}

interface MonthData {
  year: number;
  month: number;
  days: (number | null)[];
}

export const Calendar: React.FC<CalendarProps> = ({ handleSetDate }) => {
  const today = moment();
  const startMonth = today.month();
  const startYear = today.year();

  const generateYearCalendar = (
    startMonth: number,
    startYear: number
  ): MonthData[] => {
    const months: MonthData[] = [];

    for (let i = 0; i < 12; i++) {
      const currentDate = moment()
        .year(startYear)
        .month(startMonth + i)
        .startOf("month");

      const year = currentDate.year();
      const month = currentDate.month();
      const daysInMonth = currentDate.daysInMonth();

      const firstDayOfWeek = (currentDate.day() + 6) % 7;

      const days: (number | null)[] = [
        ...Array.from({ length: firstDayOfWeek }, () => null),
        ...Array.from({ length: daysInMonth }, (_, day) => day + 1),
      ];

      while (days.length % 7 !== 0) {
        days.push(null);
      }

      months.push({
        year,
        month,
        days,
      });
    }
    return months;
  };

  const yearCalendar = generateYearCalendar(startMonth, startYear);

  const currentDay = today.date();
  const handleDisableButton = (day: number | null, month: number) => {

    return day !== null && currentDay >= ++day && startMonth >= month;
  };

  const [slider, setSlider] = useState<number>(0);

  const handleMove = (operator: string) => {
    switch (operator) {
      case "+":
        setSlider(prevState => prevState + 1);
        break;
      case "-":
        setSlider(prevstate => prevstate - 1);
        break;
      default:
        break;
    }
  }

  const showedMonth = yearCalendar.filter((month) => {
    return month === yearCalendar[slider]
  });
  
  console.log(slider);
  

  return (
    <>
      <div
        className="calendar"
      >
        {showedMonth.map(({ year, month, days }) => (
          <div key={`${year}-${month}`}>
            <HeadingUI className="title" as="h4" textTransform={"uppercase"}>
              {moment().year(year).month(month).format("MMMM YYYY")}
            </HeadingUI>
            <div className="weeks">
              {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((day) => (
                <div className="week-day" key={day}>
                  {day}
                </div>
              ))}
              {days.map((day, index) => (
                <button
                  disabled={day !== null && handleDisableButton(day, month)}
                  className={`${day ? "day" : ""}`}
                  key={index}
                  onClick={() => day && handleSetDate(year, month, day)}
                >
                  {day || null}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="arrows">
        <ButtonUI
          disabled={slider === 0}
          onClick={() => handleMove("-")}
          className="prev"
          icon={<ArrowIcon />}
        />
        <ButtonUI
          disabled={slider === yearCalendar.length - 1}
          onClick={() => handleMove("+")}
          icon={<ArrowIcon />}
        />
      </div>
    </>
  );
};
