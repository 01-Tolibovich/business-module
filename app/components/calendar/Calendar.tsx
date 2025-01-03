import moment from "moment";
import "moment/locale/ru";

import "./styles.scss";
import { HeadingUI } from "../ui";

moment.locale("ru");

interface MonthData {
  year: number;
  month: number;
  days: (number | null)[];
}

export const Calendar: React.FC = () => {
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
    return months
  };

  const yearCalendar = generateYearCalendar(startMonth, startYear);

  const test = (year: number, month: number, day: number | null) => {
    const formatedDate = moment([year, month, day || 0]).format("YYYY-MM-DD");

    console.log(formatedDate);
  }

  return (
    <div className="calendar">
      {yearCalendar.map(({year, month, days}) => (
        <div key={`${year}-${month}`}>
          <HeadingUI className="title" as="h4">{moment().year(year).month(month).format("MMMM YYYY")}</HeadingUI>
          <div className="weeks">
            {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((day) => (
              <div className="week-day" key={day}>{day}</div>
            ))}
            {days.map((day, index) => (
              <button className={`${day ? "day" : ""}`} key={index} onClick={() => day && test(year, month, day)}>{day || ''}</button>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
};
