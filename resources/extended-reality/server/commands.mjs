import * as alt from 'alt';
import chat from 'chat';

/*
######  ######  ####### #####
  #     #       #         #
  #     ######  #######   #
  #     #             #   #
  #     ####### #######   #
*/

chat.registerCmd('taser', player => {
    alt.emitClient(player, 'taser');
});

// chat.registerCmd('restart', (player, args) => {
//     let timer = args[0];
//     chat.broadcast(`{FF0000} Restart in: ${timer}`);
//     timer = timer * 60000;
//     let countdown = timer;

//     alt.setInterval(() => {
//         if(countdown == 60000) {
//             server_stop
//         }
//     }, 1);
// });

chat.registerCmd('v', (player, args) => {
    if (args[0] == 'on') {
        alt.emitClient(player, 'vanish', true);
        return;
    }
    if (args[0] == 'off') {
        alt.emitClient(player, 'vanish', false);
        return;
    }

    chat.send(player, '/v on/off');
});
//args.length
chat.registerCmd('kick', (player, args) => {
    if (args[0] == undefined) {
        chat.send(player, '/kick [spieler] [nachticht]');
        return;
    }

    if (args[1] == undefined) {
        chat.send(player, 'Bitte gebe einen Grund an!');
        return;
    }
    if (args.length > 10) {
        chat.send(player, 'Grund zu lang!');
        return;
    }

    let target = alt.Player.all.find(player => player.id == args[0]);
    if (target == undefined) {
        chat.send(player, 'Ziel nicht gefunden');
    }
    args.splice(0, 1);

    let reason = '' + args.join(' ');

    alt.emitClient(target, 'kicked', reason);

    alt.setTimeout(() => {
        target.kick();
    }, 30000);
});
