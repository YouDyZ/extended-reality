import * as alt from 'alt';
import chat from 'chat';

import './commands.mjs';
import './speedometer.mjs';
import './whitelist/whitelist.mjs';
import './admin/admin.mjs';
import './chareditor/editor.mjs';
import './charselect/charselect.mjs';
//mport './vehicle/EnterVehicle.js';
import './attachment/attachment.mjs';

console.log('===> Extended-reality werden geladen');

function distance(vector1, vector2) {
    if (vector1 === undefined || vector2 === undefined) {
        throw new Error('AddVector => vector1 or vector2 is undefined');
    }

    return Math.sqrt(Math.pow(vector1.x - vector2.x, 2) + Math.pow(vector1.y - vector2.y, 2) + Math.pow(vector1.z - vector2.z, 2));
}

function toggleLock(player, data) {
    let vehicle = data.vehicle;
    if (!vehicle) {
        vehicle = alt.Vehicle.all.find((veh) => {
            if (veh && distance(veh.pos, player.pos) <= 4) return veh;
        });
    }
    if (!vehicle) return;
    const dist = distance(player.pos, vehicle.pos);
    if (dist > 5) {
        chat.send(player, `{FF0000} You're too far away to toggle the lock.`);
        return;
    }

    if (player.vehicles === undefined) return;

    if (!player.vehicles.includes(vehicle)) return;

    if (vehicle.lockState >= 2 || vehicle.lockState === 0) {
        vehicle.lockState = 1; // Unlocked
        chat.send(player, 'Your vehicle is now unlocked.');

        if (!player.vehicle) {
            alt.emitClient(null, 'vehicle:SoundHorn', vehicle, false);
        }
    } else {
        vehicle.lockState = 2; // Locked
        chat.send(player, 'Your vehicle is now locked.');

        if (!player.vehicle) {
            alt.emitClient(null, 'vehicle:SoundHorn', vehicle, true);
        }
    }
}

alt.onClient('vehicle:ToggleLock', () => {
    toggleLock();
});
