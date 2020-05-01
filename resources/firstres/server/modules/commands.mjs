import * as alt from 'alt';
import * as chat from 'chat';

//aktuelle Position
chat.registerCmd('pos', (player) => {
    console.log(`X: ${player.pos.x}, Y: ${player.pos.y}, Z:${player.pos.z}`);
    chat.send(player, `X: ${player.pos.x}, Y: ${player.pos.y}, Z:${player.pos.z}`);
});

chat.registerCmd('id', (player) => {
    return chat.send(player, `${player.id}`);
});

//Teleportierer
chat.registerCmd('tp', (player, args) => {
    if (args.length != 3) {
        chat.send(player, '{FF0000} /tp [x] [y] [z]');
        return;
    }

    player.pos = {
        x: args[0],
        y: args[1],
        z: args[2],
    };

    chat.send(player, '{00FF00} Du wurdest erfolgreich Teleportiert.');
});

//spawn vehicle

chat.registerCmd('veh', (player, args) => {
    if (args.length > 2 || args.length < 1) {
        chat.send(player, '{FF0000} /veh [type]');
        return;
    }

    if (args[1] === undefined) {
        args[1] = 'Admin';
    }

    if (args[1].length > 8) {
        chat.send(player, `{FF0000}${args[1]} ist zu lang. max 8 Zeichen`);
        return;
    }

    try {
        var newVehicle = new alt.Vehicle(args[0], player.pos.x, player.pos.y, player.pos.z, 0, 0, 1);
        alt.emitClient(player, 'vehicle:SetInto', newVehicle);
        newVehicle.numberPlateText = args[1];
    } catch (err) {
        chat.send(player, `Das fahrzeug ${args[0]} ist nicht vorhanden!`);
    }

    //var veh = new alt.Vehicle(args[0], player.pos.x + 5, player.pos.y, player.pos.z, 0, 0, 1);
    //newVehicle.numberPlateText = args[1];
});

chat.registerCmd('vehrot', (player, args) => {
    if (!args.length == 7) {
        chat.send(player, '{FF0000} /veh [type] [x] [y] [z] [rotx] [roty] [rotz]');
        return;
    }

    let x = args[1];
    let y = args[2];
    let z = args[3];
    let rotx = args[4];
    let roty = args[5];
    let rotz = args[6];

    //var veh = new alt.Vehicle(args[0], player.pos.x + 5, player.pos.y, player.pos.z, 0, 0, 1);
    //newVehicle.numberPlateText = args[1];
});

chat.registerCmd('hp', (player) => {
    player.health = 100;
});

chat.registerCmd('weapon', (player, args) => {
    if (args.length != 2) {
        chat.send(player, '{FF0000} /weapon [weaponhash] [munition_Zahl]');
        return;
    }

    player.giveWeapon(args[0], args[1], true);
});

chat.registerCmd('giveall', (player) => {
    //Source: https://wiki.gtanet.work/index.php?title=Weapons_Models

    //Melee
    player.giveWeapon(-1716189206, 1, false); //Knife
    player.giveWeapon(1737195953, 1, false); //Nightstick
    player.giveWeapon(1317494643, 1, false); //Hammer
    player.giveWeapon(-1786099057, 1, false); //Bat
    player.giveWeapon(-2067956739, 1, false); //Crowbar
    player.giveWeapon(1141786504, 1, false); //Golfclub
    player.giveWeapon(-102323637, 1, false); //Bottle
    player.giveWeapon(-1834847097, 1, false); //Dagger
    player.giveWeapon(-102973651, 1, false); //Hatchet
    player.giveWeapon(-656458692, 1, false); //KnuckleDuster
    player.giveWeapon(-581044007, 1, false); //Machete
    player.giveWeapon(-1951375401, 1, false); //Flashlight
    player.giveWeapon(-538741184, 1, false); //SwitchBlade
    player.giveWeapon(-1810795771, 1, false); //Poolcue
    player.giveWeapon(419712736, 1, false); //Wrench
    player.giveWeapon(-853065399, 1, false); //battleaxe

    //Handguns
    player.giveWeapon(453432689, 500, false); //Pistol
    player.giveWeapon(3219281620, 500, false); //PistolMk2
    player.giveWeapon(1593441988, 500, false); //CombadPistol
    player.giveWeapon(-1716589765, 500, false); //Pistol50
    player.giveWeapon(-1076751822, 500, false); //SNSPistol
    player.giveWeapon(-771403250, 500, false); //HeavyPistol
    player.giveWeapon(137902532, 500, false); //VintagePistol
    player.giveWeapon(-598887786, 500, false); //MarksmanPistol
    player.giveWeapon(-1045183535, 500, false); //Revolver
    player.giveWeapon(584646201, 500, false); //APPistol
    player.giveWeapon(911657153, 500, false); //StunGun
    player.giveWeapon(1198879012, 500, false); //FlareGun

    //Machine Guns
    player.giveWeapon(324215364, 500, false); //MicroSMG
    player.giveWeapon(-619010992, 500, false); //MachinePistol
    player.giveWeapon(736523883, 500, false); //SMG
    player.giveWeapon(2024373456, 500, false); //SMGMk2
    player.giveWeapon(-270015777, 500, false); //AssaultSMG
    player.giveWeapon(171789620, 500, false); //CombatPDW
    player.giveWeapon(-1660422300, 500, false); //MG
    player.giveWeapon(2144741730, 500, false); //CombatMG
    player.giveWeapon(3686625920, 500, false); //CombatMGMk2
    player.giveWeapon(1627465347, 500, false); //Gusenberg
    player.giveWeapon(-1121678507, 500, false); //MiniSMG

    //Assault Rifles
    player.giveWeapon(-1074790547, 500, false); //AssaultRifle
    player.giveWeapon(961495388, 500, false); //AssaultRifleMk2
    player.giveWeapon(-2084633992, 500, false); //CarbineRifle
    player.giveWeapon(4208062921, 500, false); //CarbineRifleMk2
    player.giveWeapon(-1357824103, 500, false); //AdvancedRifle
    player.giveWeapon(-1063057011, 500, false); //SpecialCarbine
    player.giveWeapon(2132975508, 500, false); //BullpupRifle
    player.giveWeapon(1649403952, 500, false); //CompactRifle

    //Sniper Rifles
    player.giveWeapon(100416529, 500, false); //SniperRifle
    player.giveWeapon(205991906, 500, false); //HeavySniper
    player.giveWeapon(177293209, 500, false); //HeavySniperMk2
    player.giveWeapon(-952879014, 500, false); //MarksmanRifle

    //Shotguns
    player.giveWeapon(487013001, 500, false); //PumpShotgun
    player.giveWeapon(2017895192, 500, false); //SawnoffShotgun
    player.giveWeapon(-1654528753, 500, false); //BullpupShotgun
    player.giveWeapon(-494615257, 500, false); //AssaultShotgun
    player.giveWeapon(-1466123874, 500, false); //Musket
    player.giveWeapon(984333226, 500, false); //HeavyShotgun
    player.giveWeapon(-275439685, 500, false); //DoubleBarrelShotgun
    player.giveWeapon(317205821, 500, false); //Autoshotgun

    //HeavyWeapons
    player.giveWeapon(-1568386805, 500, false); //GrenadeLauncher
    player.giveWeapon(-1312131151, 500, false); //RPG
    player.giveWeapon(1119849093, 500, false); //Minigun
    player.giveWeapon(2138347493, 500, false); //Firework
    player.giveWeapon(1834241177, 500, false); //Railgun
    player.giveWeapon(1672152130, 500, false); //HomingLauncher
    player.giveWeapon(1305664598, 500, false); //GrenadeLauncherSmoke - Not Working
    player.giveWeapon(125959754, 500, false); //CompactLauncher

    //Thrown Weapons
    player.giveWeapon(-1813897027, 500, false); //Grenade
    player.giveWeapon(741814745, 500, false); //Stickybomb
    player.giveWeapon(-1420407917, 500, false); //ProximityMine
    player.giveWeapon(-1600701090, 500, false); //BZGas
    player.giveWeapon(615608432, 500, false); //Molotov
    player.giveWeapon(101631238, 2000, false); //FireExtinguisher
    player.giveWeapon(883325847, 5000, false); //PetrolCan
    player.giveWeapon(1233104067, 500, false); //Flare
    player.giveWeapon(600439132, 500, false); //Ball
    player.giveWeapon(126349499, 500, true); //Snowball
    player.giveWeapon(-37975472, 500, false); //SmokeGrenade
    player.giveWeapon(-1169823560, 500, false); //Pipebomb

    //Extras
    player.giveWeapon(-72657034, 1, false); //Parachute
    player.giveWeapon(0x476bf155, 250, false); //weapon_raycarbine
    player.giveWeapon(0xb62d1f67, 250, false);
    player.giveWeapon(0xaf3696a1, 1, false); // UpnAtomiser
});

chat.registerCmd('police', (player) => {
    player.giveWeapon(-72657034, 1, false); //Parachute
    player.giveWeapon(1737195953, 1, false); //Nightstick
    player.giveWeapon(1593441988, 500, false); //CombadPistol
    player.giveWeapon(-37975472, 500, false); //SmokeGrenade
    player.giveWeapon(487013001, 500, false); //PumpShotgun
    player.giveWeapon(-2084633992, 500, false); //CarbineRifle
    player.giveWeapon(911657153, 500, false); //StunGun
    player.giveWeapon(171789620, 500, false); //CombatPDW
    player.giveWeapon(-1951375401, 1, false); //Flashlight
});

chat.registerCmd('armour', (player) => {
    player.armour = 100;
});

chat.registerCmd('all', (player) => {
    player.armour = 100;
    player.health = player.health + 100;
});

chat.registerCmd('kill', (player) => {
    player.health = 0;
});

chat.registerCmd('god', (player) => {
    if (!player.getMeta('admin')) {
        chat.send(player, '{FF0000} Keine Rechte auf diesen Command');
        return;
    }
    if (!player.getMeta('god')) {
        player.setMeta('god', 'god');
        chat.send(player, 'godmode on');
        alt.emitClient(player, 'godOn');
        return;
    }
    player.setMeta('god', undefined);
    chat.send(player, 'Godmode off');
    alt.emitClient(player, 'godOff');
});

chat.registerCmd('skin', (player, args) => {
    if (args.length != 1) {
        chat.send(player, '{FF0000} /skin [Skin]');
        return;
    }

    player.model = args[0];
});

chat.registerCmd('clear', (player) => {
    alt.emitClient(player, 'clear');
});

chat.registerCmd('jva', (player) => {
    player.pos = { x: 1806, y: 2628, z: 46 };
});

chat.registerCmd('tryparticle', (player, args) => {
    const _dict = args[0];
    const _name = args[1];
    const _duration = args[2];
    const _scale = args[3];
    const _x = parseFloat(args[4]);
    const _y = parseFloat(args[5]);
    const _z = parseFloat(args[6]);

    if (args.length < 6) {
        player.send(`/tryparticle dict name duration scale x y z`);
        return;
    }

    console.log({ input: args, X: _x, Y: _y, Z: _z });

    alt.emitClient(player, 'tryParticle', _dict, _name, parseFloat(_duration), parseFloat(_scale), _x, _y, _z);
});

chat.registerCmd('tryprop', (player, args) => {
    const _prop = args[0];
    const _bone = args[1];
    const _x = parseFloat(args[2]);
    const _y = parseFloat(args[3]);
    const _z = parseFloat(args[4]);
    const _pitch = parseFloat(args[5]);
    const _roll = parseFloat(args[6]);
    const _yaw = parseFloat(args[7]);
    if (args.length < 7) {
        player.send(`/tryprop prop bone x y z pitch roll yaw`);
        return;
    }

    alt.emitClient(player, 'tryprop', _prop, _bone, _x, _y, _z, _pitch, _roll, _yaw);
});

chat.registerCmd('fahrschule', (player) => {
    if (!player.getMeta('fahrschule')) {
        player.setMeta('fahrschule', 'fahrschule');
        chat.send(player, 'Fahrschul modus on.');
        return;
    }
    player.setMeta('fahrschule', undefined);
    chat.send(player, 'Fahrschulmodus off');
});

chat.registerCmd('admin', (player) => {
    if (!player.getMeta('admin')) {
        player.setMeta('admin', 'admin');
        chat.send(player, 'Admin Mode On');
        return;
    }
    player.setMeta('admin', undefined);
    chat.send(player, 'Admin Mode Off');
});

chat.registerCmd('MF', (player, args) => {
    if (args[0] === 'f' || args[0] === 'F') {
        player.model = 'mp_f_freemode_01';
        return;
    }

    if (args[0] === 'm' || args[0] === 'M') {
        player.model = 'mp_m_freemode_01';
        return;
    }

    chat.send(player, 'Eingabe muss M oder F sein.');
});

chat.registerCmd('mf', (player, args) => {
    if (args[0] === 'f' || args[0] === 'F') {
        player.model = 'mp_f_freemode_01';
        return;
    }

    if (args[0] === 'm' || args[0] === 'M') {
        player.model = 'mp_m_freemode_01';
        return;
    }

    chat.send(player, 'Eingabe muss M oder F sein.');
});

chat.registerCmd('haircolor', (player, args) => {
    if (args[1] == undefined) {
        args[1] = args[0];
        chat.send(player, 'Event triggered');
    }

    color = args[0];
    highlight = args[1];

    alt.emitClient(player, 'hairColor', color, highlight);

    chat.send(player, 'Sucsessfull');
});

chat.registerCmd('hair', (player, args) => {
    if (args.length != 3) {
        chat.send(player, '/hair [ID] [primaryColor] [secondaryColor]');
        return;
    }

    if ((player.model = 'mp_m_freemode_01')) {
        alt.emitClient(player, 'changeHair', args[0], args[1], args[2]);
        return;
    }

    if ((player.model = 'mp_f_freemode_01')) {
        alt.emitClient(player, 'changeHair', args[0], args[1], args[2]);
        return;
    }

    chat.send(player, 'Nicht möglich');
});

chat.registerCmd('change', (player, args) => {
    var changeModel = (partId, id, texture = 1) => {
        alt.emitClient(player, 'change', partId, id, texture);
    };
    /*if (args.length != 2 || args.length != 3){
        chat.send(player,'/change [Part_ID] [ID] [texture]');
        return;
    }*/

    if (args && (args.length == 2 || args.length == 3)) {
        changeModel(args[0], args[1], args[2]);
    } else {
        chat.send(player, '/change [Part_ID] [ID] [texture]');
        return;
    }

    if ((player.model = 'mp_m_freemode_01')) {
        alt.emitClient(player, 'change', args[0], args[1], args[2]);
        return;
    }

    if ((player.model = 'mp_f_freemode_01')) {
        alt.emitClient(player, 'change', args[0], args[1], args[2]);
        return;
    }
});

chat.registerCmd('pd', (player) => {
    player.pos = { x: 430, y: -982, z: 32 };
});

chat.registerCmd('rot', (player) => {
    chat.send(player, `x: ${player.rot.x}, y: ${player.rot.y}, z: ${player.rot.z}`);
    alt.log(`x: ${player.rot.x}, y: ${player.rot.y}, z: ${player.rot.z}`);
});

/*chat.registerCmd('lock', (player, vehicle) => {
    alt.emitClient(player,'lockVeh');
});*/

//alt.onClient('vehicle:ToggleLock', systemsVehicles.toggleLock);

chat.registerCmd('farm', (player) => {
    player.pos = { x: 2469.03, y: 4955.278, z: 45.11892 }; //2469.03, 4955.278, 45.11892
});

chat.registerCmd('mueller', (player) => {
    player.pos = { x: 201.1780242919922, y: -926.1362915039062, z: 30.6783447265625 };
});

chat.registerCmd('prot', (player) => {
    alt.log(`x: ${player.rot.x}, y: ${player.rot.y}, z: ${player.rot.z}`);
    console.log(`X: ${player.pos.x}, Y: ${player.pos.y}, Z:${player.pos.z}`);

    alt.emitClient(player, 'prot', player.pos.x, player.pos.y, player.pos.z, player.rot.x, player.rot.y, player.rot.z);
});

alt.on('prot', (player) => {
    alt.log(`x: ${player.rot.x}, y: ${player.rot.y}, z: ${player.rot.z}`);
    console.log(`X: ${player.pos.x}, Y: ${player.pos.y}, Z:${player.pos.z}`);

    alt.emitClient(player, 'prot', player.pos.x, player.pos.y, player.pos.z, player.rot.x, player.rot.y, player.rot.z);
});

chat.registerCmd('chatclear', () => {
    chat.broadcast(` `);
    chat.broadcast(` `);
    chat.broadcast(` `);
    chat.broadcast(` `);
    chat.broadcast(` `);
    chat.broadcast(` `);
    chat.broadcast(` `);
    chat.broadcast(` `);
    chat.broadcast(` `);
    chat.broadcast(` `);
    chat.broadcast(` `);
    chat.broadcast(` `);
    chat.broadcast(` `);
    chat.broadcast(` `);
    chat.broadcast(` `);
});

chat.registerCmd('tpwp', (player) => {
    alt.emitClient(player, 'teleportToWaypoint');
});

chat.registerCmd('day', (player) => {
    return;
    //alt.emitClient(player)
});

chat.registerCmd('int', (player) => {
    alt.emitClient(player, 'getInt', player.pos.x, player.pos.y, player.pos.z);
});

chat.registerCmd('reset', (player) => {
    alt.emitClient(player, 'reset');
});

chat.registerCmd('drunk', (player) => {
    alt.emitClient(player, 'drunk');
});

chat.registerCmd('ping', (player) => {
    let date = Date.now();
    alt.emitClient(player, 'test:ping', date);
});

alt.onClient('test:ping_finish', (player, ping) => {
    chat.send(player, `${ping}`);
});

chat.registerCmd('night', (player) => {
    let status;

    if (!player.getMeta('nightvision')) {
        player.setMeta('nightvision', 'nightvision');
        status = true;
        alt.emitClient(player, 'nightvision', status);
        return;
    }

    if (player.getMeta('nightvision')) {
        player.setMeta('nightvision', undefined);
        status = false;
        alt.emitClient(player, 'nightvision', status);
    }

    //setNightvision(toggle: boolean)

    console.log(status);
});

chat.registerCmd('nooseskin', (player) => {
    player.model = 'u_m_y_juggernaut_01';
});

chat.registerCmd('eval', (player, args) => {
    let output = eval(args[0]);
    output;

    //alt.emitClient(player, args[0], player);
});

chat.registerCmd('randomped', (player) => {
    alt.emitClient(player, 'ped:random');
});

chat.registerCmd('peddefault', (player) => {
    chat.send(player, 'Du bist nun im default!');
    alt.emitClient(player, 'ped:default');
});

chat.registerCmd('pedset', (player, args) => {
    if (args.length != 4) {
        chat.send(player, '/pedset [component] [drawableID] [textureid] [paletid]');
    } else {
        let component = parseInt(args[0]);
        let drawable = parseInt(args[1]);
        let texture = parseInt(args[2]);
        let palet = parseInt(args[3]);
        alt.emitClient(player, 'ped:set', component, drawable, texture, palet);
    }
});

chat.registerCmd('vrot', (player) => {
    if (!player.vehicle) {
        chat.send(player, '{FF0000}Du bist in keinem Fahrzeug!');
    } else {
        let x = player.vehicle.pos.x;
        let y = player.vehicle.pos.y;
        let z = player.vehicle.pos.z;
        let rotx = player.vehicle.rot.x;
        let roty = player.vehicle.rot.y;
        let rotz = player.vehicle.rot.z;

        chat.send(player, `x: ${x}, y: ${y}, z: ${z}, rotx: ${rotx}, roty: ${roty} rotz: ${rotz}`);

        alt.emitClient(player, 'veh:log', x, y, z, rotx, roty, rotz);
    }
});

chat.registerCmd('run', (player) => {
    if (!player.getMeta('running')) {
        chat.send(player, 'du rennst nun.');
        player.setMeta('running', 'running');
        alt.emitClient(player, 'running:start');
    } else {
        chat.send(player, 'du rennst nun nicht mehr');
        player.setMeta('running', undefined);
        alt.emitClient(player, 'running:stop');
    }
});

chat.registerCmd('modkit', (player, args) => {
    if (!player.vehicle) {
        chat.send(player, 'Du musst in einem Fahrzeug sein!');
    } else {
        player.vehicle.modKit = 1;
    }
});

chat.registerCmd('tune', (player, args) => {
    if (!player.vehicle) {
        chat.send(player, 'Du musst in einem Fahrzeug sein!');
    } else {
        if (args.length != 2) {
            chat.send(player, '{FF0000} /tune [ID] [tune]');
        } else {
            let id = parseInt(args[0]);
            let vari = parseInt(args[1]);
            player.vehicle.setMod(id, vari);
        }
    }
});

chat.registerCmd('att', (player, args) => {
    if (args.length != 7) {
        chat.send(player, '/att hash px py pz rx ry rz');
        return;
    } else {
        alt.emitClient(player, 'attach:getPlayer', args);
    }
});

alt.onClient('attach:return', (player, scriptID, args) => {
    let hash = parseInt(args[0]);
    let px = parseFloat(args[1]);
    let py = parseFloat(args[2]);
    let pz = parseFloat(args[3]);
    let rx = parseFloat(args[4]);
    let ry = parseFloat(args[5]);
    let rz = parseFloat(args[6]);

    chat.send(player, `${scriptID}`);
    alt.emitClient(null, 'attach', player, hash, px, py, pz, rx, ry, rz);
});

chat.registerCmd('water', (player) => {
    alt.emitClient(player, 'isinWater');
});

chat.registerCmd('reload', (player, args) => {
    alt.restartResource(args[0]);
});

chat.registerCmd('speedup', (player, args) => {
    if (!player.vehicle) {
        chat.send(player, 'geht nur im Fahrzeug');
    } else if (args.length == 0 || args.length >= 2) {
        chat.send(player, '/speedup [value] (Normal ist 1)');
    } else {
        alt.emitClient(player, 'cheat:vehicle', player.vehicle, parseFloat(args[0]));
    }
});

chat.registerCmd('dimension', (player, args) => {
    chat.send(player, `Du wirst von Dimension ${player.dimension} in ${args[0]} verschoben!`);
    player.dimension = parseInt(args[0]);
});
