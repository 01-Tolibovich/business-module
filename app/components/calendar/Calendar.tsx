import moment from "moment";
import "moment/locale/ru";
import { HeadingUI } from "../ui";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.scss";

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

  const currentDay = today.date();
  const yearCalendar = generateYearCalendar(startMonth, startYear);

  yearCalendar.map(({ days }) => days);

  console.log(startYear, startMonth, currentDay);

  // day !== null && currentDay !== null && currentDay >= day

  const handleDisableButton = (day: number | null, month: number) => {
    console.log(day !== null && currentDay >= day);

    return day !== null && currentDay >= ++day && startMonth >= month
  };

  return (
    <div className="calendar">
      {yearCalendar.map(({ year, month, days }) => (
        <div key={`${year}-${month}`}>
          <HeadingUI className="title" as="h4">
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
                {day || ""}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
