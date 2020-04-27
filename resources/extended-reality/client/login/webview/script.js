let submit = function() {
    let pw = document.getElementById('password').value;

    alt.emit('login:login', pw);
};

//http://resources/extended-reality/client/login/webview/script.js:11
let submit_regist = function() {
    let name = document.getElementById('name').value;
    let forum = document.getElementById('forum').value;
    let pw = document.getElementById('password').value;
    let teamspeak = document.getElementById('teamspeak').value;
    let confirm = document.getElementById('confirm').value;

    if (pw === confirm) {
        alt.emit('reg:submit', name, forum, pw, teamspeak);
    } else {
        document.getElementById('message').innerHTML = 'Dein Passwort stimmt nicht überein!';
    }
};

alt.on('error', err => {
    document.getElementById('message').innerHTML = `${err}`;
});

let submit_update = function() {
    let name = document.getElementById('name').value;
    let forum = document.getElementById('forum').value;
    let pw = document.getElementById('password').value;
    let teamspeak = document.getElementById('teamspeak').value;
    let confirm = document.getElementById('confirm').value;

    if (pw === confirm) {
        alt.emit('update:submit', name, forum, pw, teamspeak);
    } else {
        document.getElementById('message').innerHTML = 'Dein Passwort stimmt nicht überein!';
    }
};

//Bei enter: submit()

window.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        let title = document.title;
        //document.getElementById('message').innerHTML = title;
        if (title === 'Login') {
            submit();
        } else if (title === 'Register') {
            submit_regist();
        } else if (title === 'Update') {
            submit_update();
        }
    }
});

//make Input selected by default

window.addEventListener('load', function() {
    document.getElementById('password').select();
});

//Fadein/out

window.addEventListener('loadend', function() {
    let element = document.getElementById('elementToFade');
    let op = 0.1; // initial opacity
    element.style.display = 'block';
    let timer = setInterval(function() {
        if (op >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ')';
        op += op * 0.1;
    }, 100);
});
