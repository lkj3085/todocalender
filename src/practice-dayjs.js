import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";

dayjs.extend(isBetween);
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);

export const runPracticeDayjs = () => {
  const hour = new Date().getHours();

  const now = dayjs("2022-12-09 13:37:00");

  const aDate = dayjs("2022-12-09 13:37:20");

  const bDate = dayjs("2022-12-09 13:38:00");
};
