const secondHandle = document.querySelector(".handle__second");
const minuteHandle = document.querySelector(".handle__minute");
const hourHandle = document.querySelector(".handle__hour");

const d = new Date();
const hours = d.getHours();
const minutes = d.getMinutes();
const second = d.getSeconds();

console.log(hours * 30);

hourHandle.style.transform = `transform: rotate(${hours * 30})`;
