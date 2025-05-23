// main.js

let startTime = 0;
let elapsedTime = 0;
let timerInterval = null;
let isRunning = false;

const display = document.getElementById("display");
const startBtn = document.getElementById("startbtn");
const stopBtn = document.getElementById("stopbtn");
const resetBtn = document.getElementById("resetbtn");

function timeToString(time) {
  const hrs = Math.floor(time / 3600000);
  const mins = Math.floor((time % 3600000) / 60000);
  const secs = Math.floor((time % 60000) / 1000);

  return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
}

function pad(unit) {
  return unit.toString().padStart(2, "0");
}

function startTimer() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      display.textContent = timeToString(elapsedTime);
    }, 1000);
    isRunning = true;
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  display.textContent = "00:00:00";
  elapsedTime = 0;
  isRunning = false;
}

// Event listeners
startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
