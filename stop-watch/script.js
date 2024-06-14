let seconds = 0;
let tens = 0;
let mins = 0;
let getSeconds = document.querySelector('.seconds');
let getTens = document.querySelector('.tens');
let getMins = document.querySelector('.mins');
let btnStart = document.querySelector('.btn-start');
let btnStop = document.querySelector('.btn-stop');
let btnReset = document.querySelector('.btn-reset');
let btnLap = document.querySelector('.btn-lap');
let lapContainer = document.querySelector('.laps');
let interval;
let isRunning = false;

btnStart.addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        interval = setInterval(startTimer, 10);
    }
});

btnStop.addEventListener('click', () => {
    isRunning = false;
    clearInterval(interval);
});

btnReset.addEventListener('click', () => {
    isRunning = false;
    clearInterval(interval);
    tens = 0;
    seconds = 0;
    mins = 0;
    updateDisplay();
    lapContainer.innerHTML = '';
});

btnLap.addEventListener('click', () => {
    let lapTime = `${formatTime(mins)}:${formatTime(seconds)}:${formatTime(tens)}`;
    let lapElement = document.createElement('div');
    lapElement.className = 'lap';
    lapElement.innerText = lapTime;
    lapContainer.appendChild(lapElement);
});

function startTimer() {
    tens++;
    if (tens > 99) {
        seconds++;
        tens = 0;
    }
    if (seconds > 59) {
        mins++;
        seconds = 0;
    }
    updateDisplay();
}

function updateDisplay() {
    getTens.innerHTML = formatTime(tens);
    getSeconds.innerHTML = formatTime(seconds);
    getMins.innerHTML = formatTime(mins);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
