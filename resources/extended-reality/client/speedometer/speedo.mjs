import * as alt from 'alt';
import * as native from 'natives';

let view_1 = new alt.WebView("http://resources/extended-reality/client/speedometer/html/speedo_1/index.html"); // Supertsport, sportwagen

let speedShown = false;

let playerVehicle = false;

//Set Update intervall

alt.everyTick(() => {
    if (!view_1 || !alt.Player.local.vehicle || !speedShown) return;
    view_1.emit("drawSpeedo", getVehicleSpeed(), alt.Player.local.vehicle.gear, alt.Player.local.vehicle.rpm);
});

function getVehicleSpeed() {
    let vehicle = alt.Player.local.vehicle;
    let speed = native.getEntitySpeed(vehicle.scriptID);
    return speed * 3.6;
}

//Speedo für Supersport und Sportwagen wir ein und aus geschaltet

view_1.on('speedoLoaded', () => {
    speedShown = true;
});

view_1.on('speedoUnloaded', () => {
    speedShown = false;
});

alt.onServer('playerEnterVehicle', (vehicle, seat) => {


    playerVehicle = vehicle;
    if (seat == 1) {
        if (!speedShown) {
            view_1.emit('showSpeedo', true);
        }
    }

    let vehclass = native.getVehicleClass(vehicle.scriptID);
    alt.log(vehclass);
});

alt.onServer('playerLeftVehicle', (seat) => {
    playerVehicle = false;
    if (seat == 1) {
        if (speedShown) {
            view_1.emit('showSpeedo', false);
        }
    }
});

alt.onServer('playerChangedVehicleSeat', (vehicle, seat) => {
    playerVehicle = vehicle;
    if (seat == 1) {
        if (!speedShown) {
            view_1.emit('showSpeedo', true)
        }
    }
});

alt.onServer('speedoFahrschule', (vehicle) => {
    playerVehicle = vehicle;
    if (!speedShown) {
        view_1.emit('showSpeedo', true);
    }
});

alt.onServer('FahrschuleLeft', () => {
    playerVehicle = false;
    if (speedShown) {
        view_1.emit('showSpeedo', false);
    }
})