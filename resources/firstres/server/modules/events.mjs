import * as alt from 'alt';
import chat from 'chat';
//import * as extended from 'altv-extended';

console.log('===> firstres werden geladen');

alt.on('playerConnect', (player) => {
    //chat.broadcast(`${player.socialId} ist beigetreten!`);
    alt.emitClient(player, 'onConnection', player);
    alt.emitClient(player, 'createMarker', 935, 47, 80);
    alt.emitClient(player, 'createMarker', 1089, 206, -50);
    // alt.emitClient(player, 'player:sync', stunde, minute, sekunde, currentWeather_string);
});

alt.on('playerDisconnect', (player, reason) => {
    alt.emit('player:disconnect', player);
});

alt.onClient('SocialClub', (player, socialClub) => {
    chat.broadcast(`${player.id} Ist Beigetreten mit:  ${socialClub}`);
});

alt.on('playerDamage', (target, attacker, damage, weapon, bodyPart) => {
    /*if (target.getMeta('god')) {
        target.armour = 100;
        target.health = target.health+100;
        return;
    }*/

    /*if (target == attacker) {
        chat.send(target, `Du hast dich Selbst verletzt!`);
    }/*

    //if (weapon == -1169823560 || weapon == 3125143736) {
   /*     target.healt = target.healt + damage;
        alt.emitClient(target, 'flash');
        return;
    }*/

    if (weapon == 911657153) {
        target.health = target.health + 10;
        alt.emitClient(target, 'taser');
        return;
    }

    if (weapon == 741814745) {
        target.health = 0;
        return;
    }

    /*if (weapon == 1119849093) {
        chat.broadcast(`{FF0000}${target.name} ist nun Gebannt!` );
        return;
    }*/

    //chat.send(target,`Du wirst angegriffen.`);
});

alt.on('playerDeath', (target, killer, weapon, x, y, z) => {
    x = target.pos.x;
    y = target.pos.y;
    z = target.pos.z - 0.2;

    if (target.getMeta('god')) {
        target.spawn(x, y, z, 1);
        target.health = target.health + 100;
        target.armour = 100;
        return;
    }

    if (killer == undefined) {
        chat.broadcast(`${target.name} hat Selbstmord begangen!`);
        target.spawn(813, -279, 66, 10);
        return;
    }
    chat.broadcast(`${target.name} wurde von ${killer.name} getötet. ${weapon}`);
    target.spawn(813, -279, 66, 14000);
    alt.emitClient(target, 'deathFade');
});

alt.on('playerEnteredVehicle', (player, vehicle, seat) => {
    //chat.send(player, `${vehicle.id}`);
});

alt.onClient('sendVehClass', (Class, player) => {
    //chat.send(player, `${Class} `);
});

/*alt.on('playerLeftVehicle', (player, vehicle, seat) => {
    chat.send(player, `${player.name} Du verlässt nun in einem ${vehicle.Name} auf Platz ${seat}.`);
});*/

//ColShape Casino

var CasinoEingang = new alt.ColshapeCylinder(935, 47, 81, 2, 2);
CasinoEingang.name = 'CasinoEingang';

var CasinoAusgang = new alt.ColshapeCylinder(1089, 206, -50, 2, 2);
CasinoAusgang.name = 'CasinoAusgang';

alt.on('entityEnterColshape', (colshape, entity) => {
    if (colshape.name == undefined) return;

    if (colshape.name == 'CasinoEingang') {
        entity.setMeta('enterCasino', 'enterCasino');
        /*entity.pos = {x: 1087, y: 218, z: -49};
        chat.send(entity, 'Du betrittst das Casino'); */
        return;
    }

    if (colshape.name == 'CasinoAusgang') {
        entity.setMeta('exitCasino', 'exitCasino');
        return;
    }
});

alt.on('entityLeaveColshape', (colshape, entity) => {
    if (colshape.name == 'CasinoEingang') {
        entity.setMeta('enterCasino', undefined);
        return;
    }

    if (colshape.name == 'CasinoAusgang') {
        entity.setMeta('exitCasino', undefined);
        return;
    }
});

chat.registerCmd('casino', (player) => {
    player.pos = { x: 930, y: 37, z: 82 };
});

//Immer wenn Client "E" gedrückt hat.

/*alt.onClient('pressE', (player) => {
 
});
*/

alt.onClient('pressedJ', (player) => {
    chat.broadcast(`${player.id} hat J gedrückt!`);
    return;
});

alt.onClient('pressedE', (player) => {
    if (player.getMeta('enterCasino')) {
        player.pos = { x: 1087, y: 218, z: -49 };
        chat.send(player, 'Du bist im Casino');
        return;
    }

    if (player.getMeta('exitCasino')) {
        player.pos = { x: 935, y: 47, z: 81 };
        chat.send(player, 'Du verlässt das Casino');
        return;
    }

    /*else {
        chat.send(player, 'Not Working');
    }
    */
});

/*chat.registerCmd('test', (player) => {
    if (player.getMeta('enterCasino'))
    {
        chat.send(player, "test");
        return;
    }

    else {
        chat.send(player, "failed");
        return;
    }
});
*/

/*
Von hier entkomma
*/

/*

import Weather from './weather_exports.mjs';

console.log(Weather);

var nextWetter;
*/
/**
 * @type {Weather}
 */
/*
let weather = new Weather();
let nextWetter_string;

var current_weather = 0;
let currentWeather_string = 'EXTRASUNNY';

setInterval(player => {
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
/*
    if (nextWetter == 0) {
        nextWetter_string = "EXTRASUNNY";
    } else if (nextWetter == 1) {
        nextWetter_string = "CLEAR";
    } else if (nextWetter == 2) {
        nextWetter_string = "CLOUDS";
    } else if (nextWetter == 3) {
        nextWetter_string = "SMOG";
    } else if (nextWetter == 4) {
        nextWetter_string = "FOGGY";
    } else if (nextWetter == 5) {
        nextWetter_string = "OVERCAST";
    } else if (nextWetter == 6) {
        nextWetter_string = "RAIN";
    } else if (nextWetter == 7) {
        nextWetter_string = "THUNDER";
    } else if (nextWetter == 8) {
        nextWetter_string = "CLEARING";
    }

    //nextWetter_string = weather.getWeatherById(nextWetter);

    console.log(nextWetter_string);

    alt.emitClient(null, 'weather:update', currentWeather_string, nextWetter_string);
    current_weather = nextWetter;
    currentWeather_string = nextWetter_string;
}, 300000);

var sekunde = 0;
var minute = 0;
var stunde = 12;

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
    console.log(`${stunde} : ${minute} : ${sekunde}`);
}, 5000);
*/

// alt.on('explosion', (source, type, pos, fx) => {
//     return false;
// });

alt.onClient('ServerDoorControl', (player, hashKey, posX, posY, posZ, state, rotX, rotY, rotZ) => {
    alt.emitClient(null, 'ClientDoorControl', hashKey, posX, posY, posZ, state, rotX, rotY, rotZ);
});
