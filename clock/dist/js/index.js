'use strict';

window.onload = function () {
    var hBtn = document.getElementById('hour'),
        mBtn = document.getElementById('min'),
        sBtn = document.getElementById('sec');

    var time = new Date(),
        hour = time.getHours(),
        min = time.getMinutes(),
        sec = time.getSeconds();

    hBtn.style.transform = 'rotateZ(' + hour * 6 + 'deg)';
    mBtn.style.transform = 'rotateZ(' + min * 6 + 'deg)';
    sBtn.style.transform = 'rotateZ(' + sec * 6 + 'deg)';

    clock();

    function clock() {
        var nTime = new Date(),
            nHour = nTime.getHours(),
            nMin = nTime.getMinutes(),
            nSec = nTime.getSeconds();

        if (hour !== nHour) {
            hour = nHour;
            hBtn.style.transform = 'rotateZ(' + hour * 6 + 'deg)';
        }
        if (min !== nMin) {
            min = nMin;
            mBtn.style.transform = 'rotateZ(' + min * 6 + 'deg)';
        }
        if (sec !== nSec) {
            sec = nSec;
            sBtn.style.transform = 'rotateZ(' + sec * 6 + 'deg)';
        }

        requestAnimationFrame(clock);
    }
};