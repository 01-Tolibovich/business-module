import moment from "moment";

export const routeDuration = (seconds: number) => {
  const duration = moment.duration(seconds, "seconds");
  const formatedTime = `${Math.floor(
    duration.asHours()
  )} ч ${duration.minutes()} м`;

  return formatedTime;
};
