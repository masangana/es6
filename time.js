/* eslint-disable no-undef */

const dateDisplay = document.getElementById('dateTime');
const setTime = () => {
  const { DateTime } = luxon;
  const now = DateTime.now();
  const date = now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  dateDisplay.innerHTML = date;
};

setInterval(setTime, 1000);
