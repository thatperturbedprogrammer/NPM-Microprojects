const nowDate = dayjs().format("YYYY-MM-DD");
const nowTime = dayjs().format("HH:mm:ss");
const nowWeekDay = dayjs().format("ddd");
const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("nowDate").innerText = nowDate;
  document.getElementById("nowTime").innerText = nowTime;
  document.getElementById("nowWeekDay").innerText = nowWeekDay;
  document.getElementById("userTimezone").innerText = userTimezone;
});
