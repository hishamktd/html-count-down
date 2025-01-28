# html-count-down

<style>
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
}

</style>

<div style="display: flex;
  height:60vh;
  justify-content: center;
  align-items: center;">
    <div class="countdown-circle">
        <div class="countdown-text" id="countdown">
        <div class="number"></div>
        </div>
    </div>
</div>
