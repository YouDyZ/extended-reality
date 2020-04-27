import * as alt from 'alt';
import * as chat from 'chat';

chat.registerCmd('freecam', (player, args) => {
    if (args[0] == 'start') {
        alt.emitClient(player, 'freecam:enter', player.pos.x, player.pos.y, player.pos.z);
    } else if (args[0] == 'stop') {
        alt.emitClient(player, 'freecam:stop');
    } else {
        chat.send(player, '{FF0000}/freecam start/stop');
    }
});
