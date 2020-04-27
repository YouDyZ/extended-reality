import * as alt from 'alt';
import * as chat from 'chat';


alt.onClient("createCharacter", (player, data) => {
    //You Database Handle
});

chat.registerCmd('char', (player, args) => {
    if (args[0] == "start") {
        alt.emitClient(player, 'startCreator');
    }
    if (args[0] == "stop") {
        alt.emitClient(player, 'stopCreator');
    }
    else {
        chat.send(player, "/char  [start/stop]")
    }
});