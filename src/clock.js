const clock = document.querySelector("#clock");
let clicked = 0;

function flow(){
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    const sec = String(date.getSeconds()).padStart(2, "0");
    if(clicked){
        clock.innerText = `${hour} : ${minute} : ${sec}`;
    }
    else clock.innerText = `${hour} : ${minute}`;
}

function printSec(){
    if(clicked) {
        clicked = 0;
    }
    else {
        clicked = 1;
    }
    flow();
}

flow();
setInterval(flow, 1000);
clock.addEventListener("click", printSec);
