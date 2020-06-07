import game from 'natives';
import * as alt from 'alt-client';
import * as native from 'natives';

let weaponMap = new Map();
alt.onServer('attach', (player, hash, y, z, rx, rz) => {
    alt.log('try to attatch');
    let displayWeapon = weaponMap.get(player);
    if (displayWeapon) {
        native.deleteEntity(displayWeapon);
    }

    ///att -739394447 0.1 -0.15 0.35 0 90 0 (Im Rücken)

    displayWeapon = native.createObjectNoOffset(hash, player.pos.x, player.pos.y, player.pos.z, false, true, false);
    alt.log('created weapon');
    weaponMap.set(player.scriptID, displayWeapon);
    ///att 0.25 -0.15 0 0 0
    native.attachEntityToEntity(displayWeapon, player.scriptID, 36, 0.25, -0.15, 0, 0, 180, 0, false, false, false, true, 0, true);
    alt.log('attached entity');
    //native.attachEntityToEntity(entity1_number, entity2_number, boneIndex_number, xPos_number, yPos_number, zPos_number, xRot_number, yRot_number, zRot_number, p9_boolean, useSoftPinning_boolean, collision_boolean, isPed_boolean, vertexIndex_number, fixedRot_boolean);
});

alt.onServer('attach:destroy', (player) => {
    let displayWeapon = weaponMap.get(player);
    if (displayWeapon) {
        native.deleteEntity(displayWeapon);
    }

    alt.log('attach:destroy wurde ausgeführt');
    weaponMap.set(player.scriptID, undefined);
});
