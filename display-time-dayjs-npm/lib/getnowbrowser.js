import { dayjs } from "https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js";

const nowDate = dayjs().format("YYYY-MM-DD");
const nowTime = dayjs().format("HH:mm:ss");
const nowWeekDay = dayjs().format("dddd");
const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
