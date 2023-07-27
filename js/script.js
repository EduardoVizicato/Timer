// variaveis
const minutesEL = document.getElementById('minutes')
const secondsEL = document.getElementById('seconds')
const millisecondsEL = document.getElementById('milliseconds')
const startBtn = document.getElementById('startBtn')
const stopBtn = document.getElementById('stopBtn')
const resumeBtn = document.getElementById('resumeBtn')
const resetBtn = document.getElementById('resetBtn')

let interval;
let minutes = 0
let seconds = 0
let milliseconds = 0
let isPaused = false

// events
startBtn.addEventListener("click", startTimer)
stopBtn.addEventListener("click", stopTimer)
resumeBtn.addEventListener("click", resumeTimer)
resetBtn.addEventListener("click", resetTimer)

// funções
function startTimer(){
    interval = setInterval(() => {

        if(!isPaused){
            milliseconds += 10

            if(milliseconds === 1000){
                seconds++;
                milliseconds = 0;
            }

            if(seconds === 60){
                minutes++;
                seconds= 0;

            }
            minutesEL.textContent = formatTimer(minutes);
            secondsEL.textContent = formatTimer(seconds);
            millisecondsEL.textContent = formatMillis(milliseconds);
        }

    }, 10)

    startBtn.style.display = "none"
    stopBtn.style.display = "block"
}

function stopTimer(){
    isPaused = true
    stopBtn.style.display = "none";
    resumeBtn.style.display = "block"
}

function resumeTimer(){
    isPaused = false
    stopBtn.style.display = "block";
        resumeBtn.style.display = "none"
}

function resetTimer(){
    clearInterval(interval)
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    minutesEL.textContent = "00"
    secondsEL.textContent = "00"
    millisecondsEL.textContent = "000"

    startBtn.style.display ="block"
    stopBtn.style.display ="none"
    resumeBtn.style.display ="none"
}

// funções de formatação

function formatTimer(time){
    return time < 10 ? `0 ${time}` : time
}

function formatMillis(time){
    return time < 100 ? `${time}`.padStart(3, "0") : time
}


