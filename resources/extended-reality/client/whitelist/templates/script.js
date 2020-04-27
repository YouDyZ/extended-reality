alt.on('ban:init', (reason, date) => {
    let DOMreason = document.getElementById('reason');
    let DOMdate = document.getElementById('date');
    let DOMcountdown = document.getElementById('time');

    DOMreason.innerHTML = `${reason}`;
    DOMdate.innerHTML = `${date}`;

    let count = 28;

    setInterval(() => {
        DOMcountdown.innerHTML = `${count}`;
        count--;
        if (count == 0) {
            clearInterval;
        }
    }, 1000);
});

//const idspeed = document.getElementById("speed");
alt.on('kick:init', reason => {
    let DOMreason = document.getElementById('reason');
    let DOMcountdown = document.getElementById('time');

    DOMreason.innerHTML = `${reason}`;

    let count = 28;

    setInterval(() => {
        DOMcountdown.innerHTML = `${count}`;
        count--;
        if (count == 0) {
            clearInterval;
        }
    }, 1000);
});

let ready = function() {
    alt.emit('ready');
};
