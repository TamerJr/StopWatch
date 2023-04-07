const timer = document.querySelector(".timer");
const playbtn = document.querySelector(".play");
const resetbtn = document.querySelector(".reset");
let timerStatus = "notWork";
let seconds = 0;
let minutes = 0;
let hours = 0;

const counterAdd = () => {
  let landdingSeconds = seconds++ < 10 ? "0" + seconds : seconds;

  let landdingMinutes = minutes < 10 ? "0" + minutes : minutes;
  let landdingHours = hours < 10 ? "0" + hours : hours;
  if (seconds / 60 == 1) {
    minutes++;
    seconds = 0;
  } else if (minutes / 60 == 1) {
    hours++;
    minutes = 0;
  } else if (hours / 24 == 1) {
    hours = 0;
    seconds = 0;
    minutes = 0;
  }
  timer.textContent =
    landdingHours + " : " + landdingMinutes + " : " + landdingSeconds;
};
playbtn.addEventListener("click", function () {
  if (timerStatus === "notWork") {
    IntervalCount = window.setInterval(counterAdd, 0.00001);
    timerStatus = "Working";
    playbtn.textContent = "Stop";
  } else {
    window.clearInterval(IntervalCount);
    timerStatus = "notWork";
    playbtn.textContent = "start";
  }
});

resetbtn.addEventListener("click", function () {
  window.clearInterval(IntervalCount);
  hours = 0;
  seconds = 0;
  minutes = 0;
  timerStatus = "notWork";
  playbtn.textContent = "start";
  timer.textContent ="00 : 00 : 00";
});
