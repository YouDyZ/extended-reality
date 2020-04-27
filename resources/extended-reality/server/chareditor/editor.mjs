import * as alt from 'alt';
import * as chat from 'chat';
import mongoose from 'mongoose';

alt.onClient('charedit:start', (player) => {
    alt.emitClient(player, 'charedit:start', player.pos.x, player.pos.y, player.pos.z);
    player.pos = {
        x: 2021.7230224609375,
        y: 3020.47900390625,
        z: -72.6951904296875,
    };
    player.rot = {
        x: 0,
        y: 0,
        z: -1.880008339881897,
    };
});

chat.registerCmd('head', (player, args) => {
    if (args.length == 3) {
        let overlay = parseInt(args[0]);
        let index = parseInt(args[1]);
        let opacity = parseInt(args[2]);

        opacity = opacity / 100;

        alt.emitClient(player, 'update:headOverlay', overlay, index, opacity);
    }
});

// Event Listener

alt.onClient('gender:male', (player) => {
    player.model = 'mp_m_freemode_01';
    alt.emitClient(player, 'charedit:default');
    alt.emitClient(player, 'gender:update');
    player.pos = {
        x: 2021.7230224609375,
        y: 3020.47900390625,
        z: -72.6951904296875,
    };
});

alt.onClient('gender:female', (player) => {
    player.model = 'mp_f_freemode_01';
    alt.emitClient(player, 'charedit:default');
    player.pos = {
        x: 2021.7230224609375,
        y: 3020.47900390625,
        z: -72.6951904296875,
    };
});

alt.onClient('charedit:tpback', (player, x, y, z) => {
    player.pos = {
        x: x,
        y: y,
        z: z,
    };
});

//alt.emitServer('databas:newChar', data);
