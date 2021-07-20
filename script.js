function countdown() {
    let now = new Date();
    let eventDate = new Date("Dec 25, 2021 00:00");
    let currentTime = now.getTime();
    let eventTime = eventDate.getTime();
    let remTime = eventTime - currentTime;

    let seconds = Math.floor(remTime / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    hours %= 24;
    minutes %= 60;
    seconds %= 60;


    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    document.getElementById("day-count").innerHTML = days;
    document.getElementById("hour-count").innerHTML = hours;
    document.getElementById("minute-count").innerHTML = minutes;
    document.getElementById("second-count").innerHTML = seconds;

    // if (distance < 0) {
    //     clearInterval(x);
    //     document.getElementById("demo").innerHTML = "Priecīgus Ziemassvētkus";
    // }

    setTimeout(countdown, 1000);
}

countdown();
