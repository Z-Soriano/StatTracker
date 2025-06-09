"use client";
const startBtn = document.getElementById("start");
const endBtn = document.getElementById("stop");
const restartBtn = document.getElementById("reset");


let minute = 0;
let second = 0;
let count = 0;


startBtn.addEventListener('click', function () {
    let timer = true;
    stopWatch();
    console.log(second);
})
endBtn.addEventListener("click", function () {
    let timer = false;
})
restartBtn.addEventListener("click", function (){
    let timer = false;
    minute = 0;
    second = 0;
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";

})
function stopWatch() {
    if(timer){
        count++
        console.log(count)
        if(count==100){
            second++;
            count = 0;
        }
        if(second==60){
            minute++;
            second = 0;
        }
        let minString = minute
        let secondString = second
        if(minute<10){
            minString = "0" + minute;
        }
        if(second<10){
            secondString = "0" + second;
        }
        document.getElementById("minutes").innerHTML = minString;
        document.getElementById("seconds").innerHTML = secondString;
        setTimeout(stopWatch, 10);
    }
}
