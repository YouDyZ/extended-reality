import * as alt from 'alt';
import { Atms } from './locations/atms.mjs';
import { shop } from './locations/shops.mjs';
import { gunshop } from './locations/gunshop.mjs';
import { tankstellen } from './locations/tankstellen.mjs';
import { garagen } from './locations/garagen.mjs';
//const fs = require('fs');

alt.log('Loaded: client->blips->bliphelper.mjs');

export function createBlip(pos, type, color, label) {
    // x: number, y: number, z: number);
    const blip = new alt.PointBlip(pos.x, pos.y, pos.z);
    blip.shortRange = true;
    blip.sprite = type;
    blip.color = color;
    blip.name = label;

    return blip;
}
//ATMS-TEST
/*
fs.readFile(`${__dirname}/locations/atms.json`, 'utf-8', (err, atm) => {
    JSON.parse(atm);

});
*/
//Atms
/*
Atms.forEach(atm => {
    createBlip(atm, 108, 2, 'ATM');
});
*/

shop.forEach((shop) => {
    createBlip(shop, 628, 4, 'Shop');
});

gunshop.forEach((gunshop) => {
    createBlip(gunshop, 156, 44, 'Waffenshop');
});

tankstellen.forEach((tankstelle) => {
    createBlip(tankstelle, 361, 44, 'Tankstelle');
});

garagen.forEach((garage) => {
    createBlip(garage, 289, 4, 'Garage');
});
