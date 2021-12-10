// var min = +prompt('Enter a Minuts');
// var sec = +prompt('Enter a Minuts');
// var millisec = +prompt('Enter a Minuts');
min = 0
sec = 0
millisec = 0

var minuts = document.getElementById('minuts');
var seconds = document.getElementById('sec');
var milli_second = document.getElementById('millisec');
function start() {
    interval = setInterval(timeout, 10)
    interval
}

function timeout() {
    millisec++
    milli_second.innerHTML = millisec
    if (millisec >= 100) {
        sec++
        seconds.innerHTML = sec
        millisec = 0
    }
    else if (sec >= 60) {
        min++
        minuts.innerHTML = min
        sec = 0
    }
    document.getElementById('strt').className = " disable"
}
function stop() {
    clearInterval(interval);
    document.getElementById('strt').className = " visible btn btn-primary mybtn"

}
function reset() {
    // milli_second.innerHTML = 0
    stop()
    seconds.innerHTML = 0
    minuts.innerHTML = 0
}