const dayjs = require("dayjs");

const localizedFormat = require("dayjs/plugin/localizedFormat");

// timezone
const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");

// localized format
dayjs.extend(localizedFormat);

// timezone
dayjs.extend(utc);
dayjs.extend(timezone);

const nowDate = dayjs().format("LL");
const nowTime = dayjs().format("LT");
const nowWeekDay = dayjs().format("ddd");
const userTimezone = dayjs.tz.guess();

// console.log(nowDate);
// console.log(nowTime);
// console.log(nowWeekDay);
// console.log(dayjs.tz.guess());

module.exports = { nowDate, nowTime, nowWeekDay, userTimezone };
