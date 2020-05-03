import * as alt from 'alt';
import chat from 'chat';

function attach(target, args, event, player) {
    let hash = parseInt(args[0]);
    let px = parseFloat(args[1]);
    let py = parseFloat(args[2]);
    let pz = parseFloat(args[3]);
    let rx = parseFloat(args[4]);
    let ry = parseFloat(args[5]);
    let rz = parseFloat(args[6]);

    if (event === 'null') {
        alt.emitClient(null, 'attach', target, hash, px, py, pz, rx, ry, rz);
    } else if (event === 'player') {
        alt.emitClient(player, 'attach', target, hash, px, py, pz, rx, ry, rz);
    }
}

let attachedPlayers = new Map();

chat.registerCmd('att', (player, args) => {
    if (args.length != 7) {
        chat.send(player, '/att hash px py pz rx ry rz');
        return;
    } else {
        attach(player, args);
        attachedPlayers.set(user, args, 'null');
    }
});

alt.onServer('player:sync', (player) => {
    attachedPlayers.forEach(function (user, args) {
        attach(user, args, 'player', player);
    });
});

alt.onServer('player:disconnect', (player) => {
    chat.broadchast(`${player.name} Disconnect!`);
    alt.emitClient(null, 'attach:destroy', player);
});
