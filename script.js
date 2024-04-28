let analogDisplay = true;
let digitalTimeElement = document.getElementById("digital-time");

function toggleDisplay() {
  analogDisplay = !analogDisplay;
  updateDisplay();
}

function updateDisplay() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let hourHandRotation = ((hours * 30 + minutes / 2) * Math.PI) / 180;
  let minuteHandRotation = (minutes * 6 * Math.PI) / 180;
  let secondHandRotation = (seconds * 6 * Math.PI) / 180;

  let hourHand = document.querySelector(".hour-hand");
  let minuteHand = document.querySelector(".minute-hand");
  let secondHand = document.querySelector(".second-hand");

  hourHand.style.transform = `rotate(${hourHandRotation}rad)`;
  minuteHand.style.transform = `rotate(${minuteHandRotation}rad)`;
  secondHand.style.transform = `rotate(${secondHandRotation}rad)`;

  if (analogDisplay) {
    document.querySelector(".analog-display").style.display = "block";
    document.querySelector(".digital-display").style.display = "none";
    document.querySelector("#vertical-numbers").style.opacity = "1";
    document.querySelector("#horizontal-numbers").style.opacity = "1";
  } else {
    document.querySelector(".analog-display").style.display = "none";
    document.querySelector(".digital-display").style.display = "flex";
    document.querySelector("#vertical-numbers").style.opacity = "0";
    document.querySelector("#horizontal-numbers").style.opacity = "0";
    digitalTimeElement.textContent = `${hours
      .toString()
      .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }
}

setInterval(updateDisplay, 1000);
// Manually trigger tooltip to show by default
document.addEventListener("DOMContentLoaded", function () {
  const tooltipTriggerEl = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  tooltipTriggerEl.forEach((ele) => {
    const tooltip = new bootstrap.Tooltip(ele);
    tooltip.show();
    setTimeout(() => {
      tooltip.hide();
    }, 5000);
  });
});
const darkMode = () => {
  document.querySelector(".watch-face").classList.toggle("dark");
};
document.querySelector(".pill").addEventListener("click", darkMode);
document.querySelector(".crown").addEventListener("click", toggleDisplay);
