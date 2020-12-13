import * as alt from 'alt';
import chat from 'chat';

import Weather from './weather_exports.mjs';
//import Players from '../../../extended-reality/server/whitelist/players.mjs';
//import { checkPropTypes } from 'prop-types';

console.log(Weather);

var nextWetter;
/**
 * @type {Weather}
 */
let weather = new Weather();
let nextWetter_string;

var current_weather = 0;
let currentWeather_string = 'EXTRASUNNY';

setInterval((player) => {
    nextWetter = weather.next(current_weather);

    //let courrent_weather = Math.round(Math.random() * 2);
    /*
    console.log('');
    console.log(counter + ':');
    console.log(`Aktuelles Wetter: ${courrent_weather}`);
    console.log('Nächstes Wetter: ' + nextWetter);
    console.log('');
    console.log('--------------');
    */

    if (nextWetter == 0) {
        nextWetter_string = 'EXTRASUNNY';
    } else if (nextWetter == 1) {
        nextWetter_string = 'CLEAR';
    } else if (nextWetter == 2) {
        nextWetter_string = 'CLOUDS';
    } else if (nextWetter == 3) {
        nextWetter_string = 'SMOG';
    } else if (nextWetter == 4) {
        nextWetter_string = 'FOGGY';
    } else if (nextWetter == 5) {
        nextWetter_string = 'OVERCAST';
    } else if (nextWetter == 6) {
        nextWetter_string = 'RAIN';
    } else if (nextWetter == 7) {
        nextWetter_string = 'THUNDER';
    } else if (nextWetter == 8) {
        nextWetter_string = 'CLEARING';
    } else if (nextWetter == 13) {
        nextWetter_string = 'HALLOWEEN';
    }

    //nextWetter_string = weather.getWeatherById(nextWetter);

    console.log(nextWetter_string);

    alt.emitClient(null, 'weather:update', currentWeather_string, nextWetter_string);
    current_weather = nextWetter;
    currentWeather_string = nextWetter_string;
}, 500000);

let now_init = weather.now();
console.log(now_init);

let stunde = now_init.h;
let minute = now_init.min;
let sekunde = now_init.sec;

console.log(sekunde, minute, stunde);

setInterval(() => {
    sekunde = sekunde + 30;
    //minute += 10;
    if (sekunde >= 60) {
        sekunde = sekunde - 60;
        minute++;
    }
    if (minute >= 60) {
        minute = minute - 60;
        stunde++;
    }
    if (stunde >= 24) {
        stunde = stunde - 24;
    }

    alt.emitClient(null, 'time:update', stunde, minute, sekunde);
    //console.log(`${stunde} : ${minute} : ${sekunde}`);
}, 5000);

chat.registerCmd('time', (player, args) => {
    if (!args.length == 3) {
        chat.send(player, '/time Stunde Minute Sekunde');
        return;
    }

    if (parseInt(args[0]) >= 24) {
        chat.send(player, 'Die Stunde darf nicht größer als 24 sein.');
        return;
    }

    if (parseInt(args[1]) >= 60) {
        chat.send(player, 'Die Minute muss kleiner als 60 sein.');
        return;
    }

    if (parseInt(args[2]) >= 60) {
        chat.send(player, 'Die Sekunde muss kleiner als 60 sein.');
        return;
    }

    stunde = parseInt(args[0]);
    minute = parseInt(args[1]);
    sekunde = parseInt(args[2]);

    alt.emitClient(null, 'time:update', stunde, minute, sekunde);
});

//Verschoben in /whitelist
// alt.on('playerConnect', (player) => {
//     alt.emitClient(player, 'player:sync', stunde, minute, sekunde, currentWeather_string);
//     alt.emitClient(player, 'noose:sync', noose);
// });

chat.registerCmd('now', (player) => {
    //var now = new Date();
    let now = weather.now();

    stunde = now.h;
    minute = now.min;
    sekunde = now.sec;

    console.log(now.h, now.min, now.sec);
    alt.emitClient(null, 'time:update', now.h, now.min, now.sec);
});

chat.registerCmd('zeit', (player) => {
    chat.send(player, `${stunde} : ${minute} Uhr`);
});

let lastWeather;
let lastWeatherString;
let noose = false;

chat.registerCmd('noose', (player) => {
    if (noose) {
        noose = false;
        chat.broadcast(`{FF0000}NOOSE PROTOKILL DEAKTIVIERT`);
        nextWetter_string = lastWeatherString;
        alt.emitClient(null, 'weather:update', currentWeather_string, nextWetter_string);
        currentWeather_string = lastWeatherString;
        current_weather = lastWeather;
        // setTimeout(() => {
        //
        // }, 10000);
        alt.emitClient(null, 'noose:stop', noose);
        return;
    }
    if (!noose) {
        noose = true;
        chat.broadcast(`{FF0000}NOOSE PROTOKILL AKTIVIERT!`);
        lastWeather = current_weather;
        lastWeatherString = currentWeather_string;
        nextWetter_string = 'HALLOWEEN';
        current_weather = 13;

        // setTimeout(() => {
        //
        // }, 10000);

        alt.emitClient(null, 'noose:start', noose);
        alt.emitClient(null, 'weather:update', currentWeather_string, nextWetter_string);
    }
});

let noose_target = undefined;
let noose_finished = true;
let noose_inited;

let displayTarget = function (target) {
    let updateTarget = setInterval((target) => {
        let player = alt.Player.all.filter((p) => p.getMeta('noose') === 'noose');

        if (player == undefined) return;

        if (noose_finished == true) {
            clearInterval(updateTarget);
            player.forEach((player) => {
                alt.emitClient(player, 'noose:finished');
                chat.send(player, 'Noose target finished!');
            });

            return;
        }

        //console.log(noose_target.pos.x, noose_target.pos.y, noose_target.pos.z, noose_target.name);

        player.forEach((player) => {
            noose_inited = true;
            alt.emitClient(player, 'noose:updateTarget', noose_target.pos.x, noose_target.pos.y, noose_target.pos.z, noose_target.name);
        });

        //alt.emitClient(player, 'eventName', noose_target.pos.x, noose_target.pos.y, noose_target.pos.z, noose_target.name);
    }, 5000);
};

chat.registerCmd('noosetarget', (player, args) => {
    if (player.getMeta('admin') == false && player.getMeta('noose') == false) {
        chat.send(player, 'Keine Berechtigung');
        return;
    }

    noose_finished = false;

    noose_target = alt.Player.all.find((player) => player.id == args[0]);

    if (noose_target.pos.x == undefined) {
        chat.send(player, 'target not found!');
        return;
    }
    alt.emitClient(player, 'noose:targetinit', noose_target.pos.x, noose_target.pos.y, noose_target.pos.z, noose_target.name);
    noose_inited = true;
    chat.send(player, `Target: ${noose_target.name}!`);

    displayTarget(noose_target);
});

chat.registerCmd('noosefinished', () => {
    noose_finished = true;
});

chat.registerCmd('nooseagent', (player) => {
    if (!player.getMeta('admin')) {
        chat.send(player, 'keine Berechtigung');
        return;
    }

    if (!player.getMeta('noose')) {
        player.setMeta('noose', 'noose');
        chat.send(player, 'Du bist im Noose Dienst!');
        return;
    }

    if (player.getMeta) {
        player.setMeta('noose', undefined);
        chat.send(player, 'Schönen Feierabend Agend ' + player.name);
    }
});

chat.registerCmd('script', (player) => {
    chat.send(player, `${player.id}`);
});
