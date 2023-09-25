const hourEl = document.getElementById("hours");
const minuteEl = document.getElementById("Minutes");
const secondEl = document.getElementById("Seconds");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  ampm, (innerText = ampm);
      setTimeout(() => {
         updateClock()
      }, 1000);
}

updateClock();
