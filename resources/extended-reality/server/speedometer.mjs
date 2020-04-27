import * as alt from 'alt';


//Spieler steigt als Fahrer ins Auto, Wenn Spieler ist Fahrschullehrer -> Speedo wird angezeigt als Beifahrer
alt.on('playerEnteredVehicle', (player, vehicle, seat) => {
    if (!player.getMeta('fahrschule')) {
    alt.emitClient(player, 'playerEnterVehicle', vehicle, seat)
    return
    }
    alt.emitClient(player, 'speedoFahrschule', vehicle);
});

//Spieler steigt aus dem auto aus -> Speedo schaltet sich aus, auch als Fahschullerher
alt.on('playerLeftVehicle', (player, vehicle, seat) => {
    if(!player.getMeta('fahrschule')) {
        alt.emitClient(player, 'playerLeftVehicle', seat);
        return;
    }
    alt.emitClient(player, 'FahrschuleLeft');
});

//Spieler wechselt auf Fahrerseite
alt.on('playerChangedVehicleSeat', (player, vehicle, oldseat, newseat) => {
    alt.emitClient(player,'playerChangedVehicleSeat', vehicle, newseat);
});

