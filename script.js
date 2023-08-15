var type = "1";
var currentDate = new Date();
var hour = "";

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const dayNames = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];


setInterval(clock, 1000);

function clock() {
    currentDate = new Date();    

    if(type == 1) {
        hour = currentDate.getHours();
    } else {
        hour = currentDate.getHours() % 12 || 12;
    }
    
    const min = currentDate.getMinutes();
    const sec = currentDate.getSeconds();
    const date = currentDate.getDate();
    const month = monthNames[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    const dayOfWeek = dayNames[currentDate.getDay()];
    const ampm = currentDate.getHours() < 12 ? "AM" : "PM";

    
    
    document.getElementById("hours").innerHTML = hour;
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("seconds").innerHTML = sec;
    document.getElementById("date").innerHTML = `${month} ${date}, ${year}`;
    document.getElementById("day").innerHTML = dayOfWeek;
    document.getElementById("session").innerHTML = (type == 2) ? ampm : "";
}

function toggleClock() {
    currentDate = new Date();
    if(type == 1) {
        type = 2;
        hour = currentDate.getHours() % 12 || 12;
        document.getElementById("hours").innerHTML = hour;

        const ampm = currentDate.getHours() < 12 ? "AM" : "PM";
        document.getElementById("session").innerHTML = ampm;
    } else {
        type = 1;
        hour = currentDate.getHours();
        document.getElementById("hours").innerHTML = hour;

        document.getElementById("session").innerHTML = "";
    }
}
