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

// let charaktes = [];

// chat.registerCmd('charsel', (player, args) => {
//     alt.emitClient(player, 'charselect:init', parseInt(args[0]), charaktes);
// });

// chat.registerCmd('addchar', (player, args) => {
//     if (args.length != 2) {
//         return;
//     }

//     let newChar = {
//         forname: args[0],
//         lastname: args[1],
//     };

//     charaktes.push(newChar);

//     chat.send(player, `${newChar.forname} ${newChar.lastname} wurde Hinzugefügt.`);
// });

// chat.registerCmd('listchar', (player) => {
//     chat.send(player, `${charaktes}`);
// });
