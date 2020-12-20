import * as alt from 'alt';
import chat from 'chat';
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import { PlayersModel, PlayerSchema, CharModels } from '../datenbank/modules/exports';

const salt = 10;
let maxcharchalc = function (rank) {
    if (rank == 0) {
        //normaler Spieler
        return 2;
    } else if (rank == 1) {
        //ProbeSupporter
        return 2;
    } else if (rank == 2) {
        //Supporter
        return 3;
    } else if (rank == 3) {
        //admin
        return 4; //2 Normale, 1 admin, 1 Tier
    } else if (rank == 4) {
        //Teamleitung
        return 4; //2 Normale, 1 admin, 1 Tier
    } else if (rank == 5) {
        //Projektleitung
        return 365;
    }
};

const startall = function (player, dbid, rank) {
    const dbPlayer = PlayersModel.findById(dbid);

    let maxchars = dbPlayer.maxchars || maxcharchalc(rank);
    player.setSyncedMeta('dbID', `${dbid}`);
    alt.emit('charselect:start', player.id, maxchars);
    alt.emit('sync');
};

alt.on('playerConnect', (player) => {
    alt.emitClient(player, 'list:socialclub');
    alt.emitClient(player, 'login:cam', 0, 0, 0);
    player.spawn(3426.698974609375, 5174.4130859375, 7.4088134765625, 0);
    player.dimension = Math.floor(Math.random * 1000);
});

alt.onClient('list:sendSC', (player, SocialID) => {
    player.setMeta('socialclub', SocialID);
    PlayersModel.findOne({ social: SocialID }, function (err, res) {
        //console.log(res.pw);
        if (err) console.log(err);
        else if (res == null) {
            alt.emitClient(player, 'login:register');
        } else if (res.banstate.length != 0) {
            let bandate = Date(res.banstate[1]);
            alt.emitClient(player, 'banned', res.banstate[0], bandate);
            alt.setTimeout(function () {
                player.kick();
            }, 30000);
            chat.send(player, 'banned');
        } else if (res.pw === undefined && res.teamspeak === undefined) {
            chat.send(player, 'login:register');
            alt.emitClient(player, 'login:register');
        } else if (res.pw == undefined || res.pw == '') {
            alt.emitClient(player, 'login:newpw');
        } else if (res.pw && res.teamspeak) {
            chat.send(player, 'login:open');
            alt.emitClient(player, 'login:open');
        } else {
            chat.send(player, 'Error');
        }
    });
});

chat.registerCmd('removewl', (player, args) => {
    if (args[0] == 'help') {
        chat.send(player, 'mit /removewl kannst du Einen Spieler von der Whitelist Entfernen');
        chat.send(player, 'Der SocialClubName ist der Name im Social club und muss übereinstimmen!');
        chat.send(player, 'Den SocialClubname musste du 2x eigeben, damit kein ban versehendlich geschiet!');
        return;
    }

    if (!args.length == 2 || args[0] != args[1]) {
        chat.send(player, `{FF0000}/removewl [SocialClubName] [SocialClubName]`);
        return;
    }

    let scname = args[0];

    PlayersModel.deleteOne({ social: scname }, function (err) {
        if (err) {
            chat.send(player, `{FF0000}ERROR: ${err}`);
        } else {
            chat.send(player, `{00FF00} ${scname} wurde entfernt!`);
        }
    });
});

chat.registerCmd('addwl', (player, args) => {
    if (args[0] == 'help') {
        chat.send(player, 'mit /addwl kannst du Einen Spieler hinzufügen');
        chat.send(player, 'Der Playername ist der Spielername, und ist frei wählbar, darf sich allerdings nicht doppeln');
        chat.send(player, 'Der SocialClubName ist der Name im Social club und muss übereinstimmen! Auch hier darf er sich nicht doppeln!');
        return;
    }

    if (!args.length == 2) {
        chat.send(player, `{FF0000}/addwl [Playername] [SocialClubName]`);
    }

    let playerName = args[0];
    let scname = args[1];

    // Person.updateOne({}, { age: 'bar' });
    PlayersModel.updateOne({ name: playerName, social: scname }, { whitelisted: true })
        .then(chat.send(player, ` ${scname} wurde gewhitlisted`))
        .catch((err) => {
            chat.send(player, err);
            return;
        });
});

// chat.registerCmd('login', player => {
//     alt.emitClient(player, 'login:open');
// });

alt.onClient('login:checkdata', (player, social, pw) => {
    PlayersModel.findOne({ social: social }, function (err, res) {
        let found = res;
        if (res == null) {
            chat.send(player, 'Error!');
            return;
        }
        if (res.whitelisted != true) {
            alt.emitClient(player, 'notwl');
        } else {
            bcrypt.compare(pw, res.pw).then((res) => {
                if (res == true) {
                    alt.emitClient(player, 'login:close');
                    player.pos = {
                        x: 2021.7230224609375,
                        y: 3020.47900390625,
                        z: -72.6951904296875,
                    };
                    chat.send(player, 'Spawned sucsessfull!');
                    console.log(JSON.stringify(found._id));
                    startall(player, found._id, found.rank);
                    PlayersModel.updateOne({ social: social }, { lastseen: Date.now() })
                        .then(chat.send(player, 'daten Aktuallisiert'))
                        .catch((err) => chat.send(player, err));
                    alt.emitClient(player, 'login:camfinish');
                    alt.emit('player:sync', player);
                } else {
                    alt.emitClient(player, 'login:wrongpw');
                }
            });
        }
    });

    // chat.send(player, `Input name: ${name}, input pw: ${pw}`);
    // bcrypt.genSalt(salt, function(err, salt) {
    //     bcrypt.hash(pw, salt, function(err, hash) {
    //         // pw_save = hash;
    //         chat.send(player, `saves as ${hash}`);
    //     });
    // });
});

// chat.registerCmd('compare', (player, args) => {
//     bcrypt.compare(args[0], pw_save).then(res => {
//         chat.send(player, `${res}`);
//     });
// });

/**
 * WENN SPIELER REGISTRIERT
 * Daten in Datenbank speichern,
 * anschließend, Spieler in Login schmeißen.
 */

alt.onClient('statistic:addmin', (player, scname) => {
    PlayersModel.updateOne({ social: scname }, { $inc: { uptime: 1 } }, { new: true }, function (err, res) {
        if (err) {
            chat.send(player, '{FF0000} ERROR: ' + err);
        }
    });
    // .then(chat.send(player, '+1 min'))
    // .catch((err) => {
    //     chat.send(player, err);
    //     return;
    // });
});

alt.onClient('reg:senddata', (player, name, forum, pw, teamspeak, social) => {
    bcrypt.genSalt(salt, function (err, salt) {
        if (err) alt.emitClient('reg:error', err);
        bcrypt.hash(pw, salt, function (err, hash) {
            if (err) chat.send(player, 'reg:error', err);
            let newPlayer = new PlayersModel({
                name: name,
                social: social,
                pw: hash,
                forum: forum,
                teamspeak: teamspeak,
            });
            newPlayer.save(function (err) {
                if (err) chat.send(player, 'reg:error' + err);
                else {
                    alt.emitClient(player, 'reg:succses');
                    alt.setTimeout(() => {
                        console.log('try to open login from Registation');
                        alt.emitClient(player, 'login:open');
                    }, 1000);
                }
            });
        });
    });

    //     function(err, el) {

    //         //chat.send(player, el);
    //     }
    // );
});

/**
 * Wenn ein Spieler sein Passwort vergessen hat,
 * dann bekommt kann er sich ein neues Setzten,
 * zur sicherheit werden ebenfalls die TsID, Forumname und der Selbstgegebene Name abgefragt
 */

chat.registerCmd('ban', (player, args) => {
    if (args.length <= 5) {
        chat.send(player, '/ban [Spieler] [Grund]');
    }
    let target = args[0];

    PlayersModel.findOne();
});

alt.onClient('update:senddata', (player, name, forum, pw, teamspeak, social) => {
    PlayersModel.findOne({ social: social, name: name, forum: forum, teamspeak: teamspeak }, function (err, res) {
        if (err) {
            alt.emitClient(player, 'update:error', err);
        } else if (res == null) {
            alt.emitClient(player, 'update:error', 'Überprüfe deine Daten');
        } else if (res != null) {
            /**
                 * bcrypt.hash(pw, salt, function(err, hash) {
                    if (err) chat.send(player, 'reg:error', err);
                    pw = hash;
                    chat.send(
                        player,
                        `name: ${name}, forum: ${forum}, teamspeak:${teamspeak}, social: ${social}`
                    );
                 */
            bcrypt.hash(pw, salt, function (err, hash) {
                if (err) {
                    alt.emitClient(player, 'update:error', err);
                } else {
                    PlayersModel.updateOne({ name: name, social: social }, { pw: hash }).catch((err) => {
                        chat.send(player, err);
                    });
                    alt.emitClient(player, 'update:succses');
                    alt.setTimeout(() => {
                        console.log('try to open login!');
                        alt.emitClient(player, 'login:open');
                    }, 1000);
                }
            });
        }
    });
});

// Database Events

alt.onClient('charselect:finished', (player, selected) => {
    console.log(player.getMeta('dbID'));
});
