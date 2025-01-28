# html-count-down

<style>
.countdown-container {
  display: flex;
  height:60vh;
  justify-content: center;
  align-items: center;
}

.countdown-circle {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: conic-gradient(#61dafb 0deg, transparent 0deg);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 0 0 20px rgba(97, 218, 251, 0.5);
  animation: countdown 60s linear;
}

.countdown-circle::before {
  content: "";
  position: absolute;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background-color: #282c34;
  z-index: 1;
}

.countdown-text {
  font-size: 3rem;
  color: #61dafb;
  font-weight: bold;
  z-index: 2;
}

.number::before{
    content:"60";
     animation: countdown-number 60s steps(60) forwards;
}

@keyframes countdown {
  from {
    background: conic-gradient(#61dafb 0deg, transparent 0deg);
  }
  to {
    background: conic-gradient(#61dafb 360deg, transparent 360deg);
  }
}

@keyframes countdown-number {
  0% {
    content: "60";
  }
  1.666% {
    content: "59";
  }
  3.333% {
    content: "58";
  }
  5% {
    content: "57";
  }
  6.666% {
    content: "56";
  }
  8.333% {
    content: "55";
  }
  10% {
    content: "54";
  }
  11.666% {
    content: "53";
  }
  13.333% {
    content: "52";
  }
  15% {
    content: "51";
  }
  16.666% {
    content: "50";
  }
  18.333% {
    content: "49";
  }
  20% {
    content: "48";
  }
  21.666% {
    content: "47";
  }
  23.333% {
    content: "46";
  }
  25% {
    content: "45";
  }
  26.666% {
    content: "44";
  }
  28.333% {
    content: "43";
  }
  30% {
    content: "42";
  }
  31.666% {
    content: "41";
  }
  33.333% {
    content: "40";
  }
  35% {
    content: "39";
  }
  36.666% {
    content: "38";
  }
  38.333% {
    content: "37";
  }
  40% {
    content: "36";
  }
  41.666% {
    content: "35";
  }
  43.333% {
    content: "34";
  }
  45% {
    content: "33";
  }
  46.666% {
    content: "32";
  }
  48.333% {
    content: "31";
  }
  50% {
    content: "30";
  }
  51.666% {
    content: "29";
  }
  53.333% {
    content: "28";
  }
  55% {
    content: "27";
  }
  56.666% {
    content: "26";
  }
  58.333% {
    content: "25";
  }
  60% {
    content: "24";
  }
  61.666% {
    content: "23";
  }
  63.333% {
    content: "22";
  }
  65% {
    content: "21";
  }
  66.666% {
    content: "20";
  }
  68.333% {
    content: "19";
  }
  70% {
    content: "18";
  }
  71.666% {
    content: "17";
  }
  73.333% {
    content: "16";
  }
  75% {
    content: "15";
  }
  76.666% {
    content: "14";
  }
  78.333% {
    content: "13";
  }
  80% {
    content: "12";
  }
  81.666% {
    content: "11";
  }
  83.333% {
    content: "10";
  }
  85% {
    content: "9";
  }
  86.666% {
    content: "8";
  }
  88.333% {
    content: "7";
  }
  90% {
    content: "6";
  }
  91.666% {
    content: "5";
  }
  93.333% {
    content: "4";
  }
  95% {
    content: "3";
  }
  96.666% {
    content: "2";
  }
  98.333% {
    content: "1";
  }
  100% {
    content: "0";
  }
}

</style>

<div class="countdown-container">
    <div class="countdown-circle">
        <div class="countdown-text" id="countdown">
        <div class="number"></div>
        </div>
    </div>
</div>
