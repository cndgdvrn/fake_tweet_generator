import { months } from "./months";

export const formatDate = (date) => {

  let newDate = date.split("-");
  let [year, month, day] = newDate;
  month = parseInt(month)
  return{
    year,
    day,
    month:months[month].substring(0,3)
  };
};
