const nowWeekDay = dayjs().format("dddd");
const nowMonth = dayjs().format("MMMM");
const nowDate = dayjs().format("D");
const nowYear = dayjs().format("YYYY");

const nowDay = `${nowWeekDay}, ${nowDate} ${nowMonth}, ${nowYear}`;
const nowTime = dayjs().format("HH:mm:ss");
const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("userTimezone").innerText = userTimezone;
  document.getElementById("nowTime").innerText = nowTime;
  document.getElementById("nowDay").innerText = nowDay;
});
