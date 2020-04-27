import * as alt from 'alt';
import * as native from 'natives';

// Vehicle Lock

//key Event

// alt.on('keydown', key => {
//     if (key == 'J'.charCodeAt(0)) {
//         alt.emit('vehicle:open');
//         return;
//     }
// });



alt.on('keyup', (key) => {
    if (key == 'J'.charCodeAt(0)) {
        alt.emit('vehicle:open', alt.Player.local);

        return;

    }
});


/*
toggleLock() {
    const vehicle = native.getVehiclePedIsIn(alt.Player.local.scriptID, 1);
    if (!native.doesEntityExist(vehicle)) return;

    let veh = alt.Vehicle.all.find(x => x.scriptID === vehicle);
    if (!veh) return;

    if (alt.Player.local.vehicle) return;

    alt.emitServer('vehicle:ToggleLock', { vehicle: alt.Player.local.vehicle });
}

*/
alt.on('vehicle:open', player => {

    // let x = player.pos.x;
    // let y = player.pos.y;
    // let z = player.pos.z;

    // let veh = native.getClosestVehicle(x, y, z, 10, 0, 70);

    // if (veh == 0) {
    //     alt.emitServer('chatmessage', "Kein Fahrzeug gefunden!");
    // } else if (!veh == 0) {
    //     let veh_class = native.getVehicleClass(veh.scriptID);
    //     alt.emitServer('chatmessage', `${veh.scriptID} ${veh.pos}`);
    // }

    const vehicle = native.getVehiclePedIsIn(alt.Player.local.scriptID, 1);
    alt.log('passed 1')
    if (!native.doesEntityExist(vehicle)) return;
    alt.log('passed 2')
    let veh = alt.Vehicle.all.find(x => x.scriptID === vehicle);
    if (!veh) return;
    alt.log('passed 3')
    if (alt.Player.local.vehicle) return;
    alt.log('passed 4')
    alt.emitServer('vehicle:ToggleLock', { player, vehicle: alt.Player.local.vehicle });
})


/**
 * als beifahrere etc Einsteigen:
 * https://natives.altv.mp/#/0xC20E50AA46D09CA8
 */