setInterval(date, 1000);

function date() {
    let d = new Date();
    let hour = zr(d.getHours());
    let minutes = zr(d.getMinutes());
    let seconds = zr(d.getSeconds());
    document.querySelector('.hours').textContent = `${hour}:${minutes}:${seconds}`;
    let day = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    document.querySelector('.date').textContent = `${day}.${1+month}.${year}`;

}

function zr(time) {
    return time < 10 ? '0' + time : time;
}
var timeMinut;

console.log(timeMinut);
$(".pl").click(function(event) {
    let num = $('.choose').text();
    num = parseInt(num);
    if (num < 59) {
        $('.choose').text(num + 1);
    }
    timeMinut = parseInt($('.choose').text() * 60);
});
$(".mi").click(function(event) {
    let num = $('.choose').text();
    num = parseInt(num);
    if (num > 1) {
        $('.choose').text(num - 1);
    }
    timeMinut = parseInt($('.choose').text() * 60);

});

var time = timeMinut;

$(".start2").click(function(event) {
    timer = setInterval(function() {
        seconds = timeMinut % 60;
        minutes = timeMinut / 60 % 60;

        if (seconds == 0 || seconds < 10) {
            seconds = "0" + seconds;
        }
        if (timeMinut <= 0) {
            clearInterval(timer);
            alert("Час закінчився");
            $(".tme").text("00:00");
            $('.choose').text(0);
            clearInterval(timer);
        } else {
            let strTimer = `${Math.trunc(minutes)}:${seconds}`;
            $(".tme").text(strTimer);
        }
        timeMinut--;
    }, 1000);
});
$(".reset2").click(function(event) {
    $(".tme").text("00:00");
    $('.choose').text(0);
    clearInterval(timer);
    timeMinut = time;

});
$(".stop2").click(function(event) {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
});
var startDate;
var clocktimer;
var i = 0;
var zz;

function startTIME() {
    var thisDate = new Date();
    var t = thisDate.getTime() - startDate.getTime();
    zz = t
    var ms = t % 1000;
    t -= ms;
    t = Math.floor(t / 1000);
    var s = t % 60;
    t -= s;
    t = Math.floor(t / 60);
    var m = t % 60;
    t -= m;
    t = Math.floor(t / 60);
    var h = t % 60;
    if (h < 10) { h = '0' + h; }
    if (m < 10) { m = '0' + m; }
    if (s < 10) { s = '0' + s; }
    if (ms < 10) { ms = '00' + ms; }
    if (ms >= 10 && ms <= 99) { ms = '0' + ms; }
    var tm = `${h}:${m}:${s}: ${ms}`;
    $(".show_mils").text(tm);

}

var j = 0;
$(".start").click(function(event) {
    if (j == 0) {
        startDate = new Date();
        j++;
    }
    clocktmer = setInterval(startTIME, 1);
});
$(".stop").click(function(event) {
    if (clocktmer) {
        clearInterval(clocktmer);
        clocktmer = null;
    }

});
$(".reset").click(function(event) {
    $(".show_mils").text("00:00:00:000");
    clearInterval(clocktmer);
    j = 0;
});
$(".loop").click(function(event) {
    var text_time = $(".show_mils").text();
    if (i < 8) {
        $(".output").append(text_time + "<br/>");
        i++;
    }
});