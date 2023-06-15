function myClock() {
    var d = new Date();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();
    var amorPm = "AM";


    if (hour >= 12) {
        amorPm = "PM";
    }
    if (hour > 12) {
        hour = hour - 12;
    }
    if (hour < 10) {
        hour = "0" + hour;
    }
    if(minute < 10) {
        minute = "0" + minute;
    }
    if(second < 10) {
        second = "0" + second
    }
    
    document.getElementById("land").innerHTML = hour + ":" + minute + ":" + second + " " + amorPm;

}
setInterval(myClock, 1000);