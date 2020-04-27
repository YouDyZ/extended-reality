import * as alt from 'alt';
import * as native from 'natives';
import { Camera } from './camera/camera.js';

//let playerScript = alt.Player.local.scriptID;

alt.onServer('charselect:exit', () => {
    native.setPedHeadBlendData(alt.Player.local.scriptID, 0, 0, 0, 0, 0, 0, 0, 0, 0, false);
});

let globalChars;

function adjustCamera() {
    const forwardVector = native.getEntityForwardVector(alt.Player.local.scriptID);
    const pPos = alt.Player.local.pos;

    campos = {
        x: pPos.x + 1 * 1.2,
        y: pPos.y + 1 * 1.2,
        z: pPos.z + zpos,
    };

    if (!camera) {
        camera = new Camera(campos, zoom);
    }
    camera.position(campos.x, campos.y, campos.z);

    const playerPosOffset = {
        x: pPos.x,
        y: pPos.y,
        z: pPos.z + zpos,
    };
    camera.pointAtCoord(playerPosOffset);
    camera.fov(zoom);
    camera.render();
}
let rotation = 180;
let zoom = 90;
let zpos = 0;
let campos;
let opened = false;
let editor;
let camera;

const url = 'http://resources/extended-reality/client/charselect/webview/test.html';

alt.onServer('charselect:camera', () => {
    alt.setTimeout(() => {
        adjustCamera();
    }, 100);
});

alt.onServer('charselect:init', (max, charakters) => {
    native.setEntityHeading(alt.Player.local.scriptID, -49);

    alt.log(charakters[0]);

    //let max = charakters[0];

    //charakters.splice(0, 1);

    globalChars = charakters;

    if (!editor) {
        //resources/extended-reality/client/charselect/webview/test.html
        editor = new alt.WebView('http://resources/extended-reality/client/charselect/webview/test.html');
        opened = true;
        alt.setTimeout(() => {
            adjustCamera();
        }, 2005);
    } else {
        alt.setTimeout(() => {
            adjustCamera();
        }, 2005);

        opened = true;
    }

    alt.log(editor.url);
    editor.emit('body:show');
    editor.emit('log', 'started');
    alt.setTimeout(() => {
        if (native.isPedFalling(alt.Player.local.scriptID)) {
            alt.emitServer('charselect:resetpos');
        }
    }, 1000);

    /* 
        INIT no Movement
        camera.position(playerCamPoint.x, playerCamPoint.y, playerCamPoint.z);
    */

    if (!camera) {
        camera = new Camera({ x: 2021.7230224609375, y: 3020.47900390625, z: -71.6951904296875 }, 35);
    }

    camera.position(2026.67, 3019.68, -72.89);
    camera.pointAtCoord({ x: 2021.7230224609375, y: 3020.47900390625, z: -71.6951904296875 });
    camera.fov(zoom);

    camera.render();

    alt.toggleGameControls(false);
    editor.focus();

    alt.showCursor(true);

    editor.on('charselect:selected', (id) => {
        if (id == 'more') {
            alt.emitServer('charselect:new');
        } else {
            viewchar(charakters[id]);
        }
    });

    /* 
    Initing Events 
    */
    editor.on('ready', () => {
        alt.log('ready');
        adjustCamera();
        editor.emit('body:show');
        editor.emit('charselect:start', charakters, max);
    });

    editor.on('charedit:start', () => {
        alt.emit('charedit:start');
    });

    editor.on('charselect:finish', (id) => {
        alt.emitServer('charselect:finished', id);
        editor.destroy();
        camera.destroy();
        alt.showCursor(false);
        alt.toggleGameControls(true);
    });
});

alt.onServer('charselect:stop', () => {
    editor.emit('body:hidden');
});

alt.onServer('charselect:regenerate', (charakters, max) => {
    native.setEntityHeading(alt.Player.local.scriptID, -49);
    globalChars = charakters;
    editor.emit('charselect:generate:new', charakters, max);
    editor.emit('body:show');
    if (!camera) {
        camera = new Camera({ x: 2021.7230224609375, y: 3020.47900390625, z: -71.6951904296875 }, 35);
    }

    camera.position(2026.67, 3019.68, -72.89);
    camera.pointAtCoord({ x: 2021.7230224609375, y: 3020.47900390625, z: -71.6951904296875 });
    camera.fov(zoom);

    camera.render();

    alt.toggleGameControls(false);
    editor.focus();

    alt.showCursor(true);
});

const viewchar = function (char) {
    //editor.emit('log', `charid: ${JSON.parse(`${char}`)}`);
    editor.emit('log', `char: ${char}`);

    alt.emitServer('charselect:skin', char.genderskin, char);
};
alt.onServer('charselect:props', (char) => {
    native.setPedHeadBlendData(alt.Player.local.scriptID, 0, 0, 0, 0, 0, 0, 0, 0, 0, false);

    native.setPedComponentVariation(alt.Player.local.scriptID, 1, char.mask[0], char.mask[1], 0);
    native.setPedComponentVariation(alt.Player.local.scriptID, 2, char.hair[0], 0, 0);
    native.setPedComponentVariation(alt.Player.local.scriptID, 4, char.legs[0], char.legs[1], 0);
    native.setPedComponentVariation(alt.Player.local.scriptID, 6, char.shoes[0], char.shoes[1], 0);
    native.setPedComponentVariation(alt.Player.local.scriptID, 7, char.accessories[0], char.accessories[1], 0);
    native.setPedComponentVariation(alt.Player.local.scriptID, 8, char.undershirt[0], char.undershirt[1], 0);
    native.setPedComponentVariation(alt.Player.local.scriptID, 10, char.decals[0], char.decals[1], 0);
    native.setPedComponentVariation(alt.Player.local.scriptID, 11, char.tops[0], char.tops[1], 0);
    native.setPedComponentVariation(alt.Player.local.scriptID, 3, char.torso[0], 0, 0);

    native.setPedHeadOverlay(alt.Player.local.scriptID, 0, char.blemishes[0], char.blemishes[1]);
    native.setPedHeadOverlay(alt.Player.local.scriptID, 1, char.facialHair[0], char.facialHair[1]);
    native.setPedHeadOverlay(alt.Player.local.scriptID, 2, char.eyebrows[0], char.eyebrows[1]);
    native.setPedHeadOverlay(alt.Player.local.scriptID, 3, char.ageing[0], char.ageing[1]);
    native.setPedHeadOverlay(alt.Player.local.scriptID, 4, char.makeup[0], char.makeup[1]);
    native.setPedHeadOverlay(alt.Player.local.scriptID, 5, char.blush[0], char.blush[1]);
    native.setPedHeadOverlay(alt.Player.local.scriptID, 6, char.complexion[0], char.complexion[1]);
    native.setPedHeadOverlay(alt.Player.local.scriptID, 7, char.sunDamage[0], char.sunDamage[1]);
    native.setPedHeadOverlay(alt.Player.local.scriptID, 8, char.lipstick[0], char.lipstick[1]);
    native.setPedHeadOverlay(alt.Player.local.scriptID, 9, char.frackles[0], char.frackles[1]);
    native.setPedHeadOverlay(alt.Player.local.scriptID, 10, char.chestHair[0], char.chestHair[1]);
    native.setPedHeadOverlay(alt.Player.local.scriptID, 11, char.bodyBlemishes[0], char.bodyBlemishes[1]);
    native.setPedHeadOverlay(alt.Player.local.scriptID, 12, char.addbodyBlemishes[0], char.addbodyBlemishes[1]);

    native.setPedHairColor(alt.Player.local.scriptID, char.hairColor[0], char.hairColor[1]);

    native.setPedEyeColor(alt.Player.local.scriptID, char.eyeColor);

    native.setPedHeadOverlayColor(alt.Player.local.scriptID, 2, 1, char.eyebrowscolor[0], char.eyebrowscolor[1]);
    native.setPedHeadOverlayColor(alt.Player.local.scriptID, 10, 1, char.chesthaircolor[0], char.chesthaircolor[1]);
    native.setPedHeadOverlayColor(alt.Player.local.scriptID, 5, 2, char.blushcolor[0], char.blushcolor[1]);
    native.setPedHeadOverlayColor(alt.Player.local.scriptID, 8, 2, char.beardcolor[0], char.beardcolor[1]);
    native.setPedHeadOverlayColor(alt.Player.local.scriptID, 1, 1, char.lipstickcolor[0], char.lipstickcolor[1]);

    native.setPedHeadBlendData(alt.Player.local.scriptID, char.parents[0], char.parents[1], 0, char.parents[3], char.parents[4], 0, char.parents[2], char.parents[5], 0, false);

    native.setPedFaceFeature(alt.Player.local.scriptID, 0, char.nosewith);
    native.setPedFaceFeature(alt.Player.local.scriptID, 1, char.noseheigh);
    native.setPedFaceFeature(alt.Player.local.scriptID, 2, char.noselength);
    native.setPedFaceFeature(alt.Player.local.scriptID, 3, char.noseback);
    native.setPedFaceFeature(alt.Player.local.scriptID, 4, char.nosetip);
    native.setPedFaceFeature(alt.Player.local.scriptID, 5, char.nosebridge);
    native.setPedFaceFeature(alt.Player.local.scriptID, 6, char.browheight);
    native.setPedFaceFeature(alt.Player.local.scriptID, 7, char.browwidth);
    native.setPedFaceFeature(alt.Player.local.scriptID, 8, char.cheekbonesheight);
    native.setPedFaceFeature(alt.Player.local.scriptID, 9, char.cheekboneswidth);
    native.setPedFaceFeature(alt.Player.local.scriptID, 10, char.cheekwidth);
    native.setPedFaceFeature(alt.Player.local.scriptID, 11, char.eyelid);
    native.setPedFaceFeature(alt.Player.local.scriptID, 12, char.lips);
    native.setPedFaceFeature(alt.Player.local.scriptID, 13, char.jawwidth);
    native.setPedFaceFeature(alt.Player.local.scriptID, 14, char.jawheight);
    native.setPedFaceFeature(alt.Player.local.scriptID, 14, char.chinlength);
    native.setPedFaceFeature(alt.Player.local.scriptID, 16, char.chinpos);
    native.setPedFaceFeature(alt.Player.local.scriptID, 17, char.chinwidth);
    native.setPedFaceFeature(alt.Player.local.scriptID, 18, char.chinshape);
    native.setPedFaceFeature(alt.Player.local.scriptID, 19, char.neckwidth);

    native.setPedPropIndex(alt.Player.local.scriptID, 0, char.hats[0], char.hats[1], true);
    native.setPedPropIndex(alt.Player.local.scriptID, 1, char.glasses[0], char.glasses[1], true);
    native.setPedPropIndex(alt.Player.local.scriptID, 2, char.ears[0], char.ears[1], true);
    native.setPedPropIndex(alt.Player.local.scriptID, 6, char.watches[0], char.watches[1], true);
    native.setPedPropIndex(alt.Player.local.scriptID, 7, char.bracelets[0], char.bracelets[1], true);
});
