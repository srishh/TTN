function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var x = "AM";
    document.getElementById("message").innerHTML = "Good Morning";
    if(h == 0){
        h = 12;
    }
    if(h > 12){
        h = h - 12;
        x = "PM";
        document.getElementById("message").innerHTML = "Good Evening";
    }
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    var time = h + ":" + m + ":" + s + " " + x;
    document.getElementById("time").innerHTML = time;
    setTimeout(showTime, 1000);
    var d = date.getDate();
    var mo = date.getMonth();
    var y = date.getFullYear();
    d = (d < 10) ? "0" + d : d;
    if(mo === 0) {
        mo = "Jan";
    }
    if(mo === 1) {
        mo = "Feb";
    }
    if(mo === 2) {
        mo = "Mar";
    }
    if(mo === 3) {
        mo = "Apr";
    }
    if(mo === 4) {
        mo = "May";
    }
    if(mo === 5) {
        mo = "Jun";
    }
    if(mo === 6) {
        mo = "Jul";
    }
    if(mo === 7) {
        mo = "Aug";
    }
    if(mo === 8) {
        mo = "Sep";
    }
    if(mo === 9) {
        mo = "Oct";
    }
    if(mo === 10) {
        mo = "Nov";
    }
    if(mo === 11) {
        mo = "Dec";
    }
    var cDate = d + " " + mo + " " + y;
    document.getElementById("date").innerHTML = cDate;
}