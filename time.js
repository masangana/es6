/* eslint-disable no-undef */

const time = document.getElementById('dateTime');
const { DateTime } = luxon;
const dt = DateTime.now();

setTimeout(time.innerHTML = dt.toLocaleString(DateTime.DATETIME_MED), 1000);