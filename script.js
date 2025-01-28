let countdownElement = document.getElementById("countdown");
let countdownCircle = document.querySelector(".countdown-circle");
let timeLeft = 20000;
let totalTime = timeLeft;

function convertSecondsToMinutes(seconds) {
  const minutes = Math.floor(seconds / 1000);
  const remainingSeconds = seconds % 60; 

  // Format the time as "MM:SS"
  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    remainingSeconds
  ).padStart(2, "0")}`;

  return formattedTime;
}

function updateCountdown() {
  countdownElement.textContent = convertSecondsToMinutes(timeLeft);

  // Calculate the percentage of time left
  let percentage = (timeLeft / totalTime) * 360; // 360 degrees for a full circle
  countdownCircle.style.background = `conic-gradient(
        #61dafb ${percentage}deg,
        transparent ${percentage}deg
    )`;

  timeLeft--;

  if (timeLeft < 0) {
    clearInterval(countdownInterval);
    countdownElement.textContent = "0";
    countdownCircle.style.background = `conic-gradient(
            transparent 360deg,
            transparent 360deg
        )`;
  }
}

let countdownInterval = setInterval(updateCountdown, 1000);
