import * as alt from 'alt';
import * as native from 'natives';

let view;
let login_pannel;
let registration_pannel;
let update_pannel;
//C:\Users\Administrator\Desktop\altv-beta\resources\extended-reality\client\login\webview\login.php
alt.onServer('login:open', () => {
    if (view === true) {
    } else if (view === false || view == undefined) {
        native.freezeEntityPosition(alt.Player.local.scriptID, true);
        login_pannel = new alt.WebView(
            `http://resources/extended-reality/client/login/webview/login.html`
        );
        login_pannel.focus();
        alt.showCursor(true);
        view = true;
        alt.toggleGameControls(false);

        //Event Viewer
        login_pannel.on('login:login', pw => {
            alt.log('Executed!');
            alt.emitServer('login:checkdata', native.scGetNickname(), pw);
        });
    }
});

alt.onServer('login:close', () => {
    native.freezeEntityPosition(alt.Player.local.scriptID, false);
    alt.toggleGameControls(true);
    login_pannel.destroy();
    alt.showCursor(false);
    view = false;
});

alt.onServer('login:wrongpw', () => {
    login_pannel.emit('error', 'Falsches Passwort!');
});

alt.onServer('notwl', () => {
    login_pannel.emit('error', 'Du bist nicht Whitlisted!');
});

alt.onServer('login:register', () => {
    native.freezeEntityPosition(alt.Player.local.scriptID, true);
    registration_pannel = new alt.WebView(
        `http://resources/extended-reality/client/login/webview/register.html`
    );
    registration_pannel.focus();
    alt.showCursor(true);
    view = true;
    alt.toggleGameControls(false);

    //Event Viewer
    registration_pannel.on('reg:submit', (name, forum, pw, teamspeak) => {
        alt.emitServer('reg:senddata', name, forum, pw, teamspeak, native.scGetNickname());
    });
});

alt.onServer('login:newpw', () => {
    view = true;
    update_pannel = new alt.WebView(
        `http://resources/extended-reality/client/login/webview/updatepw.html`
    );
    alt.showCursor(true);
    alt.toggleGameControls(false);
    update_pannel.focus();

    //Event Listenener
    update_pannel.on('update:submit', (name, forum, pw, teamspeak) => {
        alt.emitServer('update:senddata', name, forum, pw, teamspeak, native.scGetNickname());
    });
});

// alt.on('keyup', key => {
//     if (key === 0x72) {
//         login_pannel.destroy();
//         native.freezeEntityPosition(alt.Player.local.scriptID, false);
//         alt.showCursor(false);
//         alt.toggleGameControls(true);
//     }
// });

// alt.on('keyup', key => {
//     if (key == 'I'.charCodeAt(0)) {
//         native.freezeEntityPosition(alt.Player.local.scriptID, false);
//         alt.showCursor(false);
//         alt.toggleGameControls(true);
//         return;
//     }
// });

alt.onServer('reg:error', error => {
    registration_pannel.emit('error', error);
});

alt.onServer('reg:succses', () => {
    view = false;
    registration_pannel.destroy();
    alt.showCursor(false);
});

alt.on('password:submit', (name, forum, pw, teamspeak) => {
    let social = native.scGetNickname();
    alt.log(social);
    alt.emitServer('password:send', name, forum, pw, teamspeak, social);
});

alt.onServer('update:error', err => {
    update_pannel.emit('error', err);
});

alt.onServer('update:succses', () => {
    update_pannel.destroy();
    view = false;
    alt.showCursor(true);
});

let camera;
let endCam;

alt.onServer('login:cam', (x, y, z) => {
    //x:3435.73193359375, Y: 5176.49658203125, Z:7.3751220703125
    native.newLoadSceneStartSphere(3435.73193359375, 5176.49658203125, 7.3751220703125, 200, 2);
    camera = native.createCamWithParams(
        'DEFAULT_SCRIPTED_CAMERA',
        3450.73193359375,
        5176.49658203125,
        7.3751220703125 + 15,
        0,
        0,
        90,
        90,
        true,
        0
    );

    native.setCamActive(camera, true);
    native.renderScriptCams(true, false, 0, false, false, 0);
    native.freezeEntityPosition(alt.Player.local.scriptID, true);
});

alt.onServer('login:camfinish', () => {
    alt.setTimeout(() => {
        const pos = alt.Player.local.pos;
        endCam = native.createCamWithParams(
            'DEFAULT_SCRIPTED_CAMERA',
            pos.x,
            pos.y,
            pos.z + 100,
            0,
            0,
            0,
            90,
            true,
            0
        );

        native.pointCamAtEntity(endCam, alt.Player.local.scriptID, 0, 0, 0, false);
        native.setCamActiveWithInterp(endCam, camera, 2000, 5000, 5000);
        native.renderScriptCams(true, true, 2000, false, false, 0);
        native.freezeEntityPosition(alt.Player.local.scriptID, false);
        native.clearPedTasks(alt.Player.local.scriptID);
        alt.setTimeout(() => {
            native.destroyAllCams(true);
            native.renderScriptCams(false, 0, 0, false, false, 0);
        }, 2000);
    }, 1000);
});
