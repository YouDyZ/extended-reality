import * as alt from 'alt';
import * as native from 'natives';

alt.log('whitleist.mjs loaded!');

alt.onServer('list:socialclub', () => {
    let social = native.scGetNickname();
    alt.log(social);
    alt.emitServer('list:sendSC', social);
});

alt.onServer('kicked', (reason) => {
    let kicked = new alt.WebView('http://resources/extended-reality/client/whitelist/templates/kicked.html');
    kicked.focus();
    function emit() {
        alt.setTimeout(() => {
            kicked.emit('kick:init', reason);
            alt.log('emiited');
        }, 1000);
    }
    kicked.on('ready', emit);
    alt.setTimeout(() => {
        kicked.destroy();
    }, 30000);
});

alt.onServer('banned', (reason, time) => {
    let ban = new alt.WebView('http://resources/extended-reality/client/whitelist/templates/banned.html');
    ban.focus();

    function emit() {
        alt.setTimeout(() => {
            ban.emit('ban:init', reason, time);
            alt.log('emiited');
        }, 1000);
    }

    ban.on('ready', emit);
    alt.setTimeout(() => {
        ban.destroy();
    }, 30000);
});
