import * as alt from 'alt';
import * as chat from 'chat';

//alt.emit('charselect:start', player, playerchars, maxchars);
alt.on('charselect:start', (player, charakters, max, dbID) => {
    alt.emitClient(player, 'charselect:init', max, charakters);
    player.setMeta('dbID', dbID);
    alt.log('charselect:open');
});

alt.on('charselect:reopen', (player, charakters, max) => {
    alt.emitClient(player, 'charselect:regenerate', max, charakters);
});

alt.onClient('charselect:resetpos', (player) => {
    player.pos = {
        x: 2021.7230224609375,
        y: 3020.47900390625,
        z: -72.6951904296875,
    };
});

alt.on('charselect:finished', (player, char) => {
    player.pos = {
        x: char.position.x,
        y: char.position.y,
        z: char.position.z,
    };
    player.health = char.health;
    player.armour = char.armour;
    player.setMeta('roleplayname', `${char.forname} ${char.lastname}`);
    player.setMeta('forname', char.forname);
    player.setMeta('lastname', char.lastname);
    player.setMeta('dayOfBirth', `${char.dayOfBirth}`);
    player.setMeta('jobs', char.jobs);
    player.setMeta('jobRank', char.jobrank);
    player.setMeta('working', char.working);
    player.setMeta('money', char.money);
    player.setMeta('bankMoney', char.bankMoney);
    player.setMeta('saturation', char.saturation);
    player.setMeta('hydration', char.hydration);
    player.setMeta('stamina', char.stamina);
    player.setMeta('inventory', char.inventory);
});

alt.onClient('charselect:skin', (player, skin, char) => {
    player.model = char.genderskin;
    player.pos = {
        x: 2021.7230224609375,
        y: 3020.47900390625,
        z: -72.6951904296875,
    };

    alt.emitClient(player, 'charselect:props', char);
});

alt.onClient('charselect:new', (player) => {
    player.model = 'mp_m_freemode_01';
    player.pos = {
        x: 2021.7230224609375,
        y: 3020.47900390625,
        z: -72.6951904296875,
    };
});

