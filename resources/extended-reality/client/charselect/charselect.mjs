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

alt.onServer('charselect:init', (charakters, max) => {
    charakters = charakters;

    native.setEntityHeading(alt.Player.local.scriptID, -49);

    alt.log(charakters);

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
    }, 3000);

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
    //editor.emit('log', `char: ${JSON.stringify(char)}`);

    alt.emitServer('charselect:skin', char.genderskin, char);
};
alt.onServer('charselect:props', (char) => {
    console.log(char);

    native.setPedHeadBlendData(alt.Player.local.scriptID, 0, 0, 0, 0, 0, 0, 0, 0, 0, false);

    native.setPedComponentVariation(alt.Player.local.scriptID, 1, char.maskDraw, char.maskTexture, 0);
    native.setPedComponentVariation(alt.Player.local.scriptID, 2, char.hair, 0, 0);
    native.setPedComponentVariation(alt.Player.local.scriptID, 4, char.legsDraw, char.legsTexture, 0);
    native.setPedComponentVariation(alt.Player.local.scriptID, 6, char.shoesDraw, char.shoesTexture, 0);
    native.setPedComponentVariation(alt.Player.local.scriptID, 7, char.accessoriesDraw, char.accessoriesTexture, 0);
    native.setPedComponentVariation(alt.Player.local.scriptID, 8, char.undershirtDraw, char.undershirtTexture, 0);
    native.setPedComponentVariation(alt.Player.local.scriptID, 10, char.decalsDraw, char.decalsTexture, 0);
    native.setPedComponentVariation(alt.Player.local.scriptID, 11, char.topsDraw, char.topsTexture, 0);
    native.setPedComponentVariation(alt.Player.local.scriptID, 3, char.torsoDraw, 0, 0);

    native.setPedHeadOverlay(alt.Player.local.scriptID, 0, char.blemishesIndex, char.blemishesOpcaity);
    native.setPedHeadOverlay(alt.Player.local.scriptID, 1, char.facialHairTexture, char.facialHairOpcaity);
    native.setPedHeadOverlay(alt.Player.local.scriptID, 2, char.eyebrowsIndex, char.eyebrowsOpcaity);
    native.setPedHeadOverlay(alt.Player.local.scriptID, 3, char.ageingIndex, char.ageingOpcaity);
    native.setPedHeadOverlay(alt.Player.local.scriptID, 4, char.makeupIndex, char.makeupOpcaity);
    native.setPedHeadOverlay(alt.Player.local.scriptID, 5, char.blushIndex, char.blushOpcaity);
    native.setPedHeadOverlay(alt.Player.local.scriptID, 6, char.complexionIndex, char.complexionOpcaity);
    native.setPedHeadOverlay(alt.Player.local.scriptID, 7, char.sunDamageIndex, char.sunDamageOpcaity);
    native.setPedHeadOverlay(alt.Player.local.scriptID, 8, char.lipstickIndex, char.lipstickOpcaity);
    native.setPedHeadOverlay(alt.Player.local.scriptID, 9, char.fracklesIndex, char.fracklesOpcaity);
    native.setPedHeadOverlay(alt.Player.local.scriptID, 10, char.chestHairIndex, char.chestHairOpcaity);
    native.setPedHeadOverlay(alt.Player.local.scriptID, 11, char.bodyBlemishesIndex, char.bodyBlemishesOpcaity);
    native.setPedHeadOverlay(alt.Player.local.scriptID, 12, char.addbodyBlemishesIndex, char.addbodyBlemishesOpcaity);

    native.setPedHairColor(alt.Player.local.scriptID, char.hairColorIndex, char.hairColorHighlight);

    native.setPedEyeColor(alt.Player.local.scriptID, char.eyeColor);

    native.setPedHeadOverlayColor(alt.Player.local.scriptID, 2, 1, char.eyebrowscolorIndex, char.eyebrowscolorHighlight);
    native.setPedHeadOverlayColor(alt.Player.local.scriptID, 10, 1, char.chesthaircolorIndex, char.chesthaircolorHighlight);
    native.setPedHeadOverlayColor(alt.Player.local.scriptID, 5, 2, char.blushcolorIndex, char.blushcolorHighlight);
    native.setPedHeadOverlayColor(alt.Player.local.scriptID, 8, 2, char.beardcolorIndex, char.beardcolorHighlight);
    native.setPedHeadOverlayColor(alt.Player.local.scriptID, 1, 1, char.lipstickcolorIndex, char.lipstickcolorHighlight);

    native.setPedHeadBlendData(alt.Player.local.scriptID, char.parentsShapeM, char.parentsShapeW, 0, char.parentsShapeMix, char.parentsSkinM, 0, char.parentsSkinW, char.parentsSkinMix, 0, false);

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

    native.setPedPropIndex(alt.Player.local.scriptID, 0, char.hatsDraw, char.hatsTexture, false);
    native.setPedPropIndex(alt.Player.local.scriptID, 1, char.glassesDraw, char.glassesTexture, false);
    native.setPedPropIndex(alt.Player.local.scriptID, 2, char.earsDraw, char.earsTexture, false);
    native.setPedPropIndex(alt.Player.local.scriptID, 6, char.watchesDraw, char.watchesTexture, false);
    native.setPedPropIndex(alt.Player.local.scriptID, 7, char.braceletsDraw, char.braceletsTexture, false);
});
