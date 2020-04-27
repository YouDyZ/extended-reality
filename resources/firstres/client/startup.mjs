import game from 'natives';
import * as alt from 'alt';
import * as native from 'natives';
import * as chat from 'chat';
//import { compare } from 'bcryptjs';
//import * as player from 'player-sound';

var markerPosition = [];

alt.onServer('onConnection', (player) => {
    alt.log('Du bist Verbunden!');
    //alt.emitServer('spawnPlayer');
    //alt.emitServer('SocialClub', (alt.Player.local.scriptID, native.scGetNickname()));
    alt.emit('connectionComplete');
    // });

    // alt.on('connectionComplete', () => {
    //     alt.emit('load:Interiors');
    // });

    // alt.requestIpl('ex_dt1_02_office_02b');
    // let coordLoc = native.getInteriorAtCoords(-141.1987, -620.913, 168.8205);
    // native.pinInteriorInMemory(coordLoc);
    // native.requestIpl('chop_props');
    // native.requestIpl('FIBlobby');
    // native.removeIpl('FIBlobbyfake');
    // native.requestIpl('FBI_colPLUG');
    // native.requestIpl('FBI_repair');
    // native.requestIpl('v_tunnel_hole');
    // native.requestIpl('TrevorsMP');
    // native.requestIpl('TrevorsTrailer');
    // native.requestIpl('TrevorsTrailerTidy');
    // native.removeIpl('farm_burnt');
    // native.removeIpl('farm_burnt_lod');
    // native.removeIpl('farm_burnt_props');
    // native.removeIpl('farmint_cap');
    // native.removeIpl('farmint_cap_lod');
    // native.requestIpl('farm');
    // native.requestIpl('farmint');
    // native.requestIpl('farm_lod');
    // native.requestIpl('farm_props');
    // native.requestIpl('facelobby');
    // native.removeIpl('CS1_02_cf_offmission');
    // native.requestIpl('CS1_02_cf_onmission1');
    // native.requestIpl('CS1_02_cf_onmission2');
    // native.requestIpl('CS1_02_cf_onmission3');
    // native.requestIpl('CS1_02_cf_onmission4');
    // native.requestIpl('v_rockclub');
    // native.requestIpl('v_janitor');
    // native.removeIpl('hei_bi_hw1_13_door');
    // native.requestIpl('bkr_bi_hw1_13_int');
    // native.requestIpl('ufo');
    // native.requestIpl('ufo_lod');
    // native.requestIpl('ufo_eye');
    // native.removeIpl('v_carshowroom');
    // native.removeIpl('shutter_open');
    // native.removeIpl('shutter_closed');
    // native.removeIpl('shr_int');
    // native.requestIpl('csr_afterMission');
    // native.requestIpl('v_carshowroom');
    // native.requestIpl('shr_int');
    // native.requestIpl('shutter_closed');
    // native.requestIpl('smboat');
    // native.requestIpl('smboat_distantlights');
    // native.requestIpl('smboat_lod');
    // native.requestIpl('smboat_lodlights');
    // native.requestIpl('cargoship');
    // native.requestIpl('railing_start');
    // native.removeIpl('sp1_10_fake_interior');
    // native.removeIpl('sp1_10_fake_interior_lod');
    // native.requestIpl('sp1_10_real_interior');
    // native.requestIpl('sp1_10_real_interior_lod');
    // native.removeIpl('id2_14_during_door');
    // native.removeIpl('id2_14_during1');
    // native.removeIpl('id2_14_during2');
    // native.removeIpl('id2_14_on_fire');
    // native.removeIpl('id2_14_post_no_int');
    // native.removeIpl('id2_14_pre_no_int');
    // native.removeIpl('id2_14_during_door');
    // native.requestIpl('id2_14_during1');
    // native.removeIpl('Coroner_Int_off');
    // native.requestIpl('coronertrash');
    // native.requestIpl('Coroner_Int_on');
    // native.removeIpl('bh1_16_refurb');
    // native.removeIpl('jewel2fake');
    // native.removeIpl('bh1_16_doors_shut');
    // native.requestIpl('refit_unload');
    // native.requestIpl('post_hiest_unload');
    // native.requestIpl('Carwash_with_spinners');
    // native.requestIpl('KT_CarWash');
    // native.requestIpl('ferris_finale_Anim');
    // native.removeIpl('ch1_02_closed');
    // native.requestIpl('ch1_02_open');
    // native.requestIpl('AP1_04_TriAf01');
    // native.requestIpl('CS2_06_TriAf02');
    // native.requestIpl('CS4_04_TriAf03');
    // native.removeIpl('scafstartimap');
    // native.requestIpl('scafendimap');
    // native.removeIpl('DT1_05_HC_REMOVE');
    // native.requestIpl('DT1_05_HC_REQ');
    // native.requestIpl('DT1_05_REQUEST');
    // native.requestIpl('dt1_05_hc_remove');
    // native.requestIpl('dt1_05_hc_remove_lod');
    // native.requestIpl('FINBANK');
    // native.removeIpl('DT1_03_Shutter');
    // native.removeIpl('DT1_03_Gr_Closed');
    // native.requestIpl('golfflags');
    // native.requestIpl('airfield');
    // native.requestIpl('v_garages');
    // native.requestIpl('v_foundry');
    // native.requestIpl('hei_yacht_heist');
    // native.requestIpl('hei_yacht_heist_Bar');
    // native.requestIpl('hei_yacht_heist_Bedrm');
    // native.requestIpl('hei_yacht_heist_Bridge');
    // native.requestIpl('hei_yacht_heist_DistantLights');
    // native.requestIpl('hei_yacht_heist_enginrm');
    // native.requestIpl('hei_yacht_heist_LODLights');
    // native.requestIpl('hei_yacht_heist_Lounge');
    // native.requestIpl('hei_carrier');
    // native.requestIpl('hei_Carrier_int1');
    // native.requestIpl('hei_Carrier_int2');
    // native.requestIpl('hei_Carrier_int3');
    // native.requestIpl('hei_Carrier_int4');
    // native.requestIpl('hei_Carrier_int5');
    // native.requestIpl('hei_Carrier_int6');
    // native.requestIpl('hei_carrier_LODLights');
    // native.requestIpl('bkr_bi_id1_23_door');
    // native.requestIpl('lr_cs6_08_grave_closed');
    // native.requestIpl('hei_sm_16_interior_v_bahama_milo_');
    // native.requestIpl('CS3_07_MPGates');
    // native.requestIpl('cs5_4_trains');
    // native.requestIpl('v_lesters');
    // native.requestIpl('v_trevors');
    // native.requestIpl('v_michael');
    // native.requestIpl('v_comedy');
    // native.requestIpl('v_cinema');
    // native.requestIpl('V_Sweat');
    // native.requestIpl('V_35_Fireman');
    // native.requestIpl('redCarpet');
    // native.requestIpl('triathlon2_VBprops');
    // native.requestIpl('jetstenativeurnel');
    // native.requestIpl('Jetsteal_ipl_grp1');
    // native.requestIpl('v_hospital');
    // native.removeIpl('RC12B_Default');
    // native.removeIpl('RC12B_Fixed');
    // native.requestIpl('RC12B_Destroyed');
    // native.requestIpl('RC12B_HospitalInterior');
    // native.requestIpl('canyonriver01');
    // native.requestIpl('canyonriver01_lod');
    // native.requestIpl('cs3_05_water_grp1');
    // native.requestIpl('cs3_05_water_grp1_lod');
    // native.requestIpl('trv1_trail_start');
    // native.requestIpl('CanyonRvrShallow');

    // // CASINO
    // native.requestIpl('vw_casino_penthouse');
    // native.requestIpl('vw_casino_main');
    // let interiorID = native.getInteriorAtCoords(1100.0, 220.0, -50.0);
    // if (native.isValidInterior(interiorID)) {
    //     native.activateInteriorEntitySet(interiorID, '0x30240D11');
    //     native.activateInteriorEntitySet(interiorID, '0xA3C89BB2');

    //     native.refreshInterior(interiorID);
    // }
    // interiorID = native.getInteriorAtCoords(976.6364, 70.29476, 115.1641);
    // if (native.isValidInterior(interiorID)) {
    //     native.activateInteriorEntitySet(interiorID, 'teste1');
    //     native.activateInteriorEntitySet(interiorID, 'teste2');
    //     native.activateInteriorEntitySet(interiorID, 'teste3');
    //     native.activateInteriorEntitySet(interiorID, 'teste4');
    //     native.activateInteriorEntitySet(interiorID, 'teste11');
    //     native.activateInteriorEntitySet(interiorID, 'teste17');
    //     native.activateInteriorEntitySet(interiorID, 'teste18');
    //     native.activateInteriorEntitySet(interiorID, 'teste19');
    //     native.activateInteriorEntitySet(interiorID, 'teste20');
    //     native.activateInteriorEntitySet(interiorID, 'teste21');
    //     native.activateInteriorEntitySet(interiorID, 'teste29');
    //     native.activateInteriorEntitySet(interiorID, 'teste32');
    //     native.activateInteriorEntitySet(interiorID, 'teste33');
    //     native.activateInteriorEntitySet(interiorID, 'teste34');
    //     native.activateInteriorEntitySet(interiorID, 'teste1', 3);
    //     native.activateInteriorEntitySet(interiorID, 'teste2', 3);
    //     native.activateInteriorEntitySet(interiorID, 'teste4', 3);
    //     native.activateInteriorEntitySet(interiorID, 'teste11', 3);
    //     native.refreshInterior(interiorID);
    // }
});

//Setup Casino
/*alt.requestIpl('vw_casino_penthouse');
alt.requestIpl('hei_dlc_windows_casino');
alt.requestIpl('vw_casino_carpark');
alt.requestIpl('vw_casino_garage');
alt.requestIpl('vw_casino_main');

//farm
alt.requestIpl('farm');
alt.requestIpl('farm_props');
alt.requestIpl('farm_int');
//burned
/*alt.removeIpl('farmint');
alt.removeIpl('farm_burnt');
alt.removeIpl('farm_burnt_props');
alt.removeIpl('des_farmhs_endimap');
alt.removeIpl('des_farmhs_end_occl');*/

//Krankenhaus
/*alt.requestIpl('coronertrash');
alt.requestIpl('Coroner_Int_On');

//SetupFIB
alt.requestIpl('FIBlobby');

alt.requestIpl('FINBANK');

//Test Iql
///tp -3058.714 3329.19 12.5844
alt.requestIpl('gr_case10_bunkerclosed');

//tp 899.5518 -3246.038 -98.04907

alt.requestIpl('SP1_10_real_interior');
alt.requestIpl('gr_case9_bunkerclosed');
alt.requestIpl('SP1_10_real_interior');
alt.requestIpl('ex_dt1_11_office_02b');*/

//markers

alt.onServer('createMarker', (x, y, z) => {
    markerPosition.push({
        x: x,
        y: y,
        z: z,
    });
});

alt.on('update', () => {
    //native.enableCrosshairThisFrame();
    if (markerPosition.length >= 1) {
        for (var i = 0; i < markerPosition.length; i++) {
            game.drawMarker(1, markerPosition[i].x, markerPosition[i].y, markerPosition[i].z, 0, 0, 0, 0, 0, 0, 2, 2, 2, 255, 255, 255, 50, false, false, 2, false, undefined, undefined);
        }
    }
});

alt.on('keydown', (key) => {
    if (key == 'E'.charCodeAt(0)) {
        alt.emitServer('pressE');
        return;
    }
});

alt.on('keyup', (key) => {
    if (key == 'E'.charCodeAt(0)) {
        alt.emitServer('pressedE');
        return;
    }
});

alt.onServer('deathFade', () => {
    native.doScreenFadeOut(7000);
    alt.setTimeout(() => {
        native.doScreenFadeIn(7000);
    }, 7000);
    native.setEntityInvincible(alt.Player.local.scriptID, true);
    alt.setTimeout(() => {
        native.setEntityInvincible(alt.Player.local.scriptID, false);
    }, 30000);
});

alt.onServer('flash', () => {
    native.doScreenFadeOut(1);
    alt.setTimeout(() => {
        native.doScreenFadeIn(1000);
    }, 4000);
});

alt.onServer('clear', () => {
    native.doScreenFadeIn(1);
});

function playParticleFX(dict, name, duration, scale, x = 0, y = 0, z = 0) {
    const particles = [];
    if (name.includes('scr')) return; // scr particles break things easily.
    const interval = alt.setInterval(() => {
        native.requestPtfxAsset(dict);
        native.useParticleFxAsset(dict);
        const particle = native.startParticleFxLoopedOnEntity(name, alt.Player.local.scriptID, x, y, z, 0, 0, 0, scale, false, false, false);
        particles.push(particle);
    }, 0);
    alt.log(`particle.mjs ${interval}`);

    alt.setTimeout(() => {
        alt.clearInterval(interval);
        native.stopFireInRange(alt.Player.local.pos.x, alt.Player.local.pos.y, alt.Player.local.pos.z, 10);

        alt.setTimeout(() => {
            particles.forEach((particle) => {
                alt.nextTick(() => {
                    //native.removeParticleFxFromEntity(alt.Player.local.scriptID);
                    //native.removeParticleFx(particle, false);
                    native.stopParticleFxLooped(particle, false);
                });
            });
        }, duration * 2);
    }, duration);
}

alt.onServer('reset', () => {
    native.setPedHeadBlendData(alt.Player.local.scriptID, 0, 0, 0, 0, 0, 0, 0, 0, 0, false);
});

alt.onServer('tryParticle', (dict, name, duration, scale, x, y, z) => {
    playParticleFX(dict, name, duration, scale, x, y, z);
});

alt.onServer('godOn', () => {
    native.setEntityInvincible(alt.Player.local.scriptID, true);
    alt.log('Du bist nun im Godmode');
});

alt.onServer('godOff', () => {
    native.setEntityInvincible(alt.Player.local.scriptID, false);
    alt.log('Du bist nicht mehr im Godmode');
});

alt.onServer('hairColor', () => {
    native.setPedHairColor(alt.Player.local.scriptID, color, highlight);
});

alt.onServer('changeHair', (hair, primaryColor, secondaryColor) => {
    native.setPedComponentVariation(alt.Player.local.scriptID, 2, hair, 1, 1);
    native.setPedHairColor(alt.Player.local.scriptID, primaryColor, secondaryColor);
});

alt.onServer('change', (part, number, texture) => {
    native.setPedComponentVariation(alt.Player.local.scriptID, part, number, texture, 1);
});

// 2 -2 ist okay

//   /hair Variation Color
// /hair 1 20
//copy paste easy way

/*alt.onServer('getRotation', () => {
    native.getEntityHeading(alt.Player.local.scriptID);
    alt.log();
});*/

alt.onServer('prot', (posx, posy, posz, rotx, roty, rotz) => {
    alt.log('Pos: x: ' + posx + ', y: ' + posy + ', z: ' + posz);
    alt.log('Rot: x: ' + rotx + ', y: ' + roty + ', z: ' + rotz);
});

alt.onServer('teleportToWaypoint', (player) => {
    if (!native.isWaypointActive()) return;

    let wp = native.getFirstBlipInfoId(8);
    let coords = native.getBlipInfoIdCoord(wp);
    // Will fall through map until eventually lands on ground.
    //native.doScreenFadeOut(250);
    native.setEntityCoords(alt.Player.local.scriptID, coords.x, coords.y, coords.z, 1, 0, 0, 1);
    /*alt.setTimeout(function() {
        native.doScreenFadeIn(250);
    }, 2000);*/
});

/*alt.onServer('getVehClass', () => {
    native.getVehicleClass(alt.Player.vehicle);
    alt.log(`${VehClass}`);
});*/

alt.onServer('getInt', (x, y, z) => {
    alt.log(`${native.getInteriorAtCoords(x, y, z)}`);
});

alt.onServer('drunk', () => {
    native.setPedIsDrunk(alt.Player.local.scriptID, true);
});

alt.onServer('vehicle:SetInto', (vehicle) => {
    alt.setTimeout(() => {
        native.setPedIntoVehicle(alt.Player.local.scriptID, vehicle.scriptID, -1);
    }, 100);
});
/*
//WETTERSYSTEM
*/
alt.onServer('weather:update', (wnow, wthen) => {
    let transitionFactor = 0.0;

    let lastInterval = alt.setInterval(() => {
        transitionFactor += 0.01;
        if (transitionFactor > 1) {
            transitionFactor = 0;
            alt.clearInterval(lastInterval);
            return;
        }
        native.setWeatherTypeTransition(native.getHashKey(wnow), native.getHashKey(wthen), transitionFactor);
    }, 50);
});

alt.onServer('time:update', (stunde, minute, sekunde) => {
    native.setClockTime(stunde, minute, sekunde);
});

alt.onServer('player:sync', (h, m, s, weather) => {
    native.setClockTime(h, m, s);
    native.setWeatherTypeNow(weather);
});

alt.onServer('test:ping', (start) => {
    let finish = parseInt(Date.now());
    start = parseFloat(start);
    let ping = finish - start;

    alt.emitServer('test:ping_finish', alt.Player.local.scriptID, ping);
});

let sounds = new alt.WebView('resources/firstres/client/index.html');

alt.onServer('noose:sync', (status) => {
    if (status == true) {
        native.setArtificialLightsState(true);
    }
    if (status == false) {
        native.setArtificialLightsState(false);
    }
    //let hud = new alt.WebView("index.html");
});

alt.onServer('noose:start', () => {
    alt.setTimeout(() => {
        native.setArtificialLightsState(true);
    }, 14000);

    alt.setTimeout(() => {
        sounds.emit('play:noose_siren');
    }, 3500);
    sounds.emit('play:noose_start');
});

alt.onServer('noose:stop', () => {
    native.setArtificialLightsState(false);
});

alt.onServer('nightvision', (status) => {
    native.setNightvision(status);
});

let targetBlip;
let noosefinished;

alt.onServer('noose:targetinit', () => {
    noosefinished = false;
});

alt.onServer('noose:updateTarget', (targetx, targety, targetz, name) => {
    if (targetBlip != undefined) {
        targetBlip.destroy();
    }

    let x = targetx;
    let y = targety;
    let z = targetz;
    alt.log(`x: ${x}, y: ${y}, z: ${z}`);
    name = name + '';

    targetBlip = new alt.PointBlip(x, y, z);
    targetBlip.shortRange = true;
    targetBlip.sprite = 303;
    targetBlip.color = 2;
    targetBlip.name = name;
    native.setNewWaypoint(x, y);
    if (noosefinished == true) {
        targetBlip.destroy();
    }
});

alt.onServer('noose:finished', () => {
    if (targetBlip == undefined) {
        return;
    }

    noosefinished = true;
});

alt.everyTick(() => {
    let weapon = native.getSelectedPedWeapon(alt.Player.local.scriptID);
    if (weapon === 100416529 || weapon === 3342088282 || weapon === 177293209 || weapon === 20599196 || weapon === 298236145 || weapon === 3056410471 || weapon === 1672152130 || weapon === 1119849093) {
        return;
    } else {
        native.hideHudComponentThisFrame(14);
    }
});

alt.everyTick(() => {
    native.hideHudComponentThisFrame(2);
});

alt.onServer('ped:random', () => {
    native.setPedRandomComponentVariation(alt.Player.local.scriptID, 0);
});

alt.onServer('ped:default', () => {
    native.setPedHeadBlendData(alt.Player.local.scriptID, 0, 0, 0, 0, 0, 0, 0, 0, 0, false);
});

alt.onServer('ped:set', (component, drawable, texture, palette) => {
    native.setPedComponentVariation(alt.Player.local.scriptID, component, drawable, texture, palette);
});

alt.onServer('veh:log', (x, y, z, rx, ry, rz) => {
    alt.log(`x: ${x}, y: ${y}, z: ${z}, rotx: ${rx}, roty: ${ry} rotz: ${rz}`);
});

let running;
alt.onServer('running:start', () => {
    running = alt.setInterval(() => {
        native.restorePlayerStamina(alt.Player.local.scriptID, 1);
    }, 1);
});

alt.onServer('running:start', () => {
    alt.clearInterval(running);
});

// alt.on('keydown', key => {
//     //Key: E
//     if (key == 69) {
//         //if player logged in...
//         if (chat.isChatOpen() || alt.Player.local.vehicle) return;

//         let findDoorEntity,
//             doorString = 'v_ilev_arm_secdoor';
//         findDoorEntity = native.getClosestObjectOfType(alt.Player.local.pos.x, alt.Player.local.pos.y, alt.Player.local.pos.z, 2.0, '749848321', false, 0, 0);
//         if (findDoorEntity == 0) {
//             findDoorEntity = native.getClosestObjectOfType(alt.Player.local.pos.x, alt.Player.local.pos.y, alt.Player.local.pos.z, 2.0, '-340230128', false, 0, 0);
//             doorString = 'v_ilev_gtdoor02';
//         }
//         if (findDoorEntity != 0) {
//             let hashKey = native.getHashKey(doorString);
//             if (native.getStateOfClosestDoorOfType(hashKey, alt.Player.local.pos.x, alt.Player.local.pos.y, alt.Player.local.pos.z)[1]) {
//                 alt.emitServer('ServerDoorControl', hashKey, alt.Player.local.pos.x, alt.Player.local.pos.y, alt.Player.local.pos.z, false, alt.Player.local.rot.x, alt.Player.local.rot.y, alt.Player.local.rot.z);
//                 //Gametext/Info => Door: OPENED
//             } else {
//                 alt.emitServer('ServerDoorControl', hashKey, alt.Player.local.pos.x, alt.Player.local.pos.y, alt.Player.local.pos.z, true, 0.0, 0.0, 0.00001);
//                 //Gametext/Info => Door: CLOSED
//             }
//         }
//     }
// });
// alt.onServer('ClientDoorControl', (hashKey, posX, posY, posZ, state, rotX, rotY, rotZ) => {
//     native.doorControl(hashKey, posX, posY, posZ, state, rotX, rotY, rotZ);
// });
let dispalyWeapon;
alt.onServer('attach', (hash, px, py, pz, rx, ry, rz) => {
    alt.log('try to attatch');
    if (dispalyWeapon) {
        native.deleteEntity(dispalyWeapon);
    }
    ///att -739394447 0.1 -0.15 0.35 0 90 0 (Im Rücken)

    dispalyWeapon = native.createObjectNoOffset(hash, alt.Player.local.pos.x, alt.Player.local.pos.y, alt.Player.local.pos.z, false, true, false);
    native.attachEntityToEntity(dispalyWeapon, alt.Player.local.scriptID, 0, px, py, pz, rx, ry, rz, false, false, false, true, 0, true);
    //native.attachEntityToEntity(entity1_number, entity2_number, boneIndex_number, xPos_number, yPos_number, zPos_number, xRot_number, yRot_number, zRot_number, p9_boolean, useSoftPinning_boolean, collision_boolean, isPed_boolean, vertexIndex_number, fixedRot_boolean);
});

alt.onServer('isinWater', () => {
    alt.log(native.isEntityInWater(alt.Player.local.scriptID));
});

alt.onServer('tune:veh', (veh, type, index) => {
    native.setVehicleMod(veh, type, index, false);
    alt.log(native.getVehicleMod(veh.scriptID, type));
});
