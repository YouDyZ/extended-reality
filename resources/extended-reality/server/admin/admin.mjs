import * as alt from 'alt';
import * as chat from 'chat';

chat.registerCmd('tpto', (player, args) => {
    let target = alt.Player.all.find((player) => player.id == args[0]);
    let x = target.pos.x;
    let y = target.pos.y;
    let z = target.pos.z;

    player.pos = { x, y, z };
});

chat.registerCmd('listall', (player) => {
    let all = alt.Player.all;
    all.forEach((p) => {
        chat.send(player, `${p.name}: ID: ${p.id}`);
    });
});

chat.registerCmd('addipl', (player, args) => {
    if (args[1] == undefined && args.length != 0) {
        alt.emitClient(player, 'ipls:add', args[0]);
    } else if (args[1] == 'all') {
        alt.emitClient(null, 'ipls:add', args[0]);
    } else {
        chat.send(player, '{FF0000} /addipl (IPLNAME) "all"(optional)');
    }
});

chat.registerCmd('removeipl', (player, args) => {
    if (args[1] == undefined && args.length != 0) {
        alt.emitClient(player, 'ipls:remove', args[0]);
    } else if (args[1] == 'all') {
        alt.emitClient(null, 'ipls:remove', args[0]);
    } else {
        chat.send(player, '{FF0000} /removeipl (IPLNAME) "all"(optional)');
    }
});
