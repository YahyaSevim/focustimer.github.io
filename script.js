let mainTimerInterval;
let bottomTimerInterval;
let mainTimerSeconds = 0;
let bottomTimerSeconds = 0;

function startMainTimer() {
  mainTimerInterval = setInterval(() => {
    mainTimerSeconds++;
    const formattedTime = formatTime(mainTimerSeconds);
    document.getElementById('main-timer').textContent = formattedTime;
  }, 1000);
}

function startBottomTimer() {
  bottomTimerInterval = setInterval(() => {
    bottomTimerSeconds++;
    const formattedTime = formatTime(bottomTimerSeconds);
    document.getElementById('bottom-timer').textContent = formattedTime;
  }, 1000);
}

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  return `${pad(hours)}:${pad(minutes)}:${pad(remainingSeconds)}`;
}

function pad(number) {
  return (number < 10 ? '0' : '') + number;
}

startMainTimer();
startBottomTimer();

function updateCurrentTime() {
  const currentTime = new Date();
  const hours = pad(currentTime.getHours());
  const minutes = pad(currentTime.getMinutes());
  const seconds = pad(currentTime.getSeconds());
  document.getElementById('current-time').textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateCurrentTime, 1000);

updateCurrentTime();

function resetTimer() {
  mainTimerSeconds = 0;
  bottomTimerSeconds = 0;
  document.getElementById('main-timer').textContent = formatTime(mainTimerSeconds);
  document.getElementById('bottom-timer').textContent = formatTime(bottomTimerSeconds);
}

function startTimer() {
  clearInterval(mainTimerInterval);
  clearInterval(bottomTimerInterval);
  startMainTimer();
  startBottomTimer();
}

function stopTimer() {
  clearInterval(mainTimerInterval);
  clearInterval(bottomTimerInterval);
}

function createGreenBoxes() {
    const count = 100; 
    const scene = document.querySelector('.green-boxes'); 
    for (let i = 0; i < count; i++) {
        const box = document.createElement('div'); 
        const x = Math.random() * window.innerWidth; 
        const y = Math.random() * window.innerHeight; 
        const delay = Math.random() * 8; 
        box.style.left = x + 'px'; 
        box.style.top = y + 'px'; 
        box.style.animationDelay = '-' + delay + 's'; 
        box.classList.add('green-box'); 
        scene.appendChild(box); 
    }
}

createGreenBoxes();