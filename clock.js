const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${changeTime(hours)}:${changeTime(minutes)}:${changeTime(seconds)}`;
}

function changeTime(time)
{
    if(time < 10){
        resultTime = `0${time}`
    }
    else {
        resultTime = time;
    }
    return resultTime;

}

function init(){


}

getTime();

setInterval(getTime, 1000);