export function getFormatedRemainingTime(diffTime) {
  let days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  let hour = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minute = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
  let second = Math.floor((diffTime % (1000 * 60)) / 1000);

  hour = hour < 10 ? '0' + hour : hour;
  minute = minute < 10 ? '0' + minute : minute;
  second = second < 10 ? '0' + second : second;

  return `${days}j:${hour}:${minute}:${second}`;
}
