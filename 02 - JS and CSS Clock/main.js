const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const hh = document.querySelector('.hh');
const mm = document.querySelector('.mm');
const ss = document.querySelector('.ss');

function setTime(){
    const currentTime = new Date();

    // second hand
    const second = currentTime.getSeconds();
    const secondDegrees = ((second / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    
    //minute hand
    const minute = currentTime.getMinutes();
    const minuteDegrees = ((minute / 60) * 360) + ((second / 60) * 6) + 90;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

    // hour hand
    const hour = currentTime.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((minute / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    hh.innerHTML = hour;
    mm.innerHTML = minute;
    ss.innerHTML = second;
}

setInterval(setTime, 1000);