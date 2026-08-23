const hourHandle = document.querySelector(`.handle__hour`);
const minuteHandle = document.querySelector(`.handle__minute`);
const secondHandle = document.querySelector(`.handle__second`);
const millisecondHandle = document.querySelector(`.handle__milliSecond`);

requestAnimationFrame(setHandles);

function setHandles() {
  const d = new Date();

  const hours = d.getHours();
  const minutes = d.getMinutes();
  const seconds = d.getSeconds();
  const milliseconds = d.getMilliseconds();

  const extraHoursAngle = minutes * 0.5;
  const hoursAngle = hours * 30 + extraHoursAngle;

  const extraMinutesAngle = seconds * 0.1;
  const minutesAngle = minutes * 6 + extraMinutesAngle;

  const secondDegrees = (seconds + milliseconds / 1000) * 6;

  const millisecondsAngle = milliseconds * 0.36;

  hourHandle.style.transform = `translateX(-50%) rotate(${hoursAngle}deg)`;
  minuteHandle.style.transform = `translateX(-50%) rotate(${minutesAngle}deg)`;
  secondHandle.style.transform = `translateX(-50%) rotate(${secondDegrees}deg)`;
  millisecondHandle.style.transform = `translateX(-50%) rotate(${millisecondsAngle}deg)`;;
  requestAnimationFrame(setHandles);
}
