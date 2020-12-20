import * as alt from 'alt';
import * as native from 'natives';
import { Camera } from './camera/camera.js';

//let playerScript = alt.Player.local.scriptID;

alt.onServer('update:headOverlay', (overlay, index, opacity) => {
    native.setPedHeadOverlay(alt.Player.local.scriptID, overlay, index, opacity);
});

alt.onServer('charedit:default', () => {
    native.setPedHeadBlendData(alt.Player.local.scriptID, 0, 0, 0, 0, 0, 0, 0, 0, 0, false);
});

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
const url = 'http://resources/extended-reality/client/charedit/webview/test.html';
alt.on('charedit:start', (x, y, z) => {
    if (!editor) {
        //resources/extended-reality\client\charedit\webview\test.html
        editor = new alt.WebView('http://resources/extended-reality/client/charedit/webview/test.html');
        opened = true;
        alt.setTimeout(() => {
            //alt.setCamFrozen(true);
        }, 100);
    } else {
        alt.setTimeout(() => {
            //alt.setCamFrozen(true);
        }, 100);
        editor.emit('body:show');
        opened = true;
    }

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

    alt.setTimeout(() => {
        adjustCamera();
    }, 100);
    camera.render();

    alt.toggleGameControls(false);
    editor.focus();

    alt.showCursor(true);

    /*
    alt.on('keyup', (key) => {
        if (key == 'Z'.charCodeAt(0)) {
            if (opened) {
                alt.emitServer('charedit:tpback', x, y, z);
                opened = false;
            }

            alt.toggleGameControls(true);
            editor.emit('body:hidden');
            //delete editor;
            alt.showCursor(false);
            alt.setCamFrozen(false);
            camera.destroy();
            camera = undefined;
            return;
        }
    });
    */

    alt.onServer('database:newChar:error', (error) => {
        editor.emit('error', error);
        blockFinish = false;
    });

    alt.onServer('database:newChar:finish', () => {});

    const checkErrorsFinish = () => {
        editor.emit('finish:error', errorlog);
    };

    const senddata = (data) => {
        alt.log('sending data...');
        alt.emitServer('database:newChar', data);
    };

    const blockFinishTimer = () => {
        alt.log('blocking Finish...');
        blockFinish = true;
        alt.setTimeout(() => {
            alt.log('blocking Finish Done');
            checkErrorsFinish();
            blockFinish = false;
        }, 100000);
    };

    let blockFinish = false;

    editor.on('editor:finish', (data) => {
        if (blockFinish) {
            alt.log('finish:error');
            editor.emit('error', 'Warte bitte mit dem erneuten Abschicken.');
            return;
        } else {
            alt.log('editor:finish');
            alt.log('Vorname: ', data.forname, 'Nachname: ', data.lastname);
            senddata(data);
            blockFinishTimer();
        }
    });

    /* 
    Initing Events 
    */
    editor.on('ready', () => {
        adjustCamera();
        editor.emit('body:show');
    });

    editor.on('gender:get', () => {
        alt.emitServer('gender:male');
        editor.emit('gender:result', 'male');
    });

    /*
        event Listeners 
    */

    editor.on('charedit:rotation', (z) => {
        native.setEntityHeading(alt.Player.local.scriptID, z);
        alt.log(z);
    });

    editor.on('charedit:camzoom', (value) => {
        // alt.log(value);
        zoom = value;
        adjustCamera();
    });

    editor.on('charedit:camheight', (value) => {
        zpos = value;
        adjustCamera();
    });

    editor.on('charedit:stop', () => {
        alt.toggleGameControls(true);
        editor.emit('body:hidden');
        //delete editor;
        alt.showCursor(false);
    });

    editor.on('update:gender', (gender) => {
        if (gender == 'male') {
            alt.emitServer('gender:male');
        } else if (gender == 'female') {
            alt.emitServer('gender:female');
        }
    });

    alt.onServer('gender:update', () => {
        native.setInteriorActive(270081, true);
    });
    editor.on('update:mask', (draw, texture) => {
        native.setPedComponentVariation(alt.Player.local.scriptID, 1, draw, texture, 0);
    });

    editor.on('update:hair', (draw, texture) => {
        if (texture == undefined) {
            texture = 0;
        }
        native.setPedComponentVariation(alt.Player.local.scriptID, 2, draw, texture, 0);
    });

    editor.on('update:legs', (draw, texture) => {
        native.setPedComponentVariation(alt.Player.local.scriptID, 4, draw, texture, 0);
    });

    editor.on('update:shoes', (draw, texture) => {
        native.setPedComponentVariation(alt.Player.local.scriptID, 6, draw, texture, 0);
    });

    editor.on('update:accessories', (draw, texture) => {
        native.setPedComponentVariation(alt.Player.local.scriptID, 7, draw, texture, 0);
    });

    editor.on('update:undershirt', (draw, texture) => {
        native.setPedComponentVariation(alt.Player.local.scriptID, 8, draw, texture, 0);
    });

    editor.on('update:bodyArmors', (draw, texture) => {
        native.setPedComponentVariation(alt.Player.local.scriptID, 9, draw, texture, 0);
    });

    editor.on('update:decals', (draw, texture) => {
        native.setPedComponentVariation(alt.Player.local.scriptID, 10, draw, texture, 0);
    });

    editor.on('update:tops', (draw, texture) => {
        native.setPedComponentVariation(alt.Player.local.scriptID, 11, draw, texture, 0);
    });

    editor.on('update:torso', (draw, texture) => {
        if (texture == undefined) {
            texture = 0;
        }
        native.setPedComponentVariation(alt.Player.local.scriptID, 3, draw, texture, 0);
    });

    editor.on('update:blemishes', (index, opacity) => {
        native.setPedHeadOverlay(alt.Player.local.scriptID, 0, index, opacity);
    });

    editor.on('update:facialHair', (index, opacity) => {
        native.setPedHeadOverlay(alt.Player.local.scriptID, 1, index, opacity);
    });

    editor.on('update:eyebrows', (index, opacity) => {
        native.setPedHeadOverlay(alt.Player.local.scriptID, 2, index, opacity);
    });

    editor.on('update:ageing', (index, opacity) => {
        native.setPedHeadOverlay(alt.Player.local.scriptID, 3, index, opacity);
    });

    editor.on('update:makeup', (index, opacity) => {
        native.setPedHeadOverlay(alt.Player.local.scriptID, 4, index, opacity);
    });

    editor.on('update:blush', (index, opacity) => {
        native.setPedHeadOverlay(alt.Player.local.scriptID, 5, index, opacity);
    });

    editor.on('update:complexion', (index, opacity) => {
        native.setPedHeadOverlay(alt.Player.local.scriptID, 6, index, opacity);
    });

    editor.on('update:sunDamage', (index, opacity) => {
        native.setPedHeadOverlay(alt.Player.local.scriptID, 7, index, opacity);
    });

    editor.on('update:lipstick', (index, opacity) => {
        native.setPedHeadOverlay(alt.Player.local.scriptID, 8, index, opacity);
    });

    editor.on('update:frackles', (index, opacity) => {
        native.setPedHeadOverlay(alt.Player.local.scriptID, 9, index, opacity);
    });

    editor.on('update:chestHair', (index, opacity) => {
        native.setPedHeadOverlay(alt.Player.local.scriptID, 10, index, opacity);
    });

    editor.on('update:bodyBlemishes', (index, opacity) => {
        native.setPedHeadOverlay(alt.Player.local.scriptID, 11, index, opacity);
    });

    editor.on('update:addbodyBlemishes', (index, opacity) => {
        native.setPedHeadOverlay(alt.Player.local.scriptID, 12, index, opacity);
    });

    editor.on('update:hairColor', (index, highlight) => {
        native.setPedHairColor(alt.Player.local.scriptID, index, highlight);
    });

    editor.on('update:eyeColor', (color) => {
        // alt.log('update Eyes');
        native.setPedEyeColor(alt.Player.local.scriptID, color);
    });

    editor.on('update:eyebrowsColor', (color, highlight) => {
        native.setPedHeadOverlayColor(alt.Player.local.scriptID, 2, 1, color, highlight);
    });

    editor.on('update:chesthairColor', (color, highlight) => {
        native.setPedHeadOverlayColor(alt.Player.local.scriptID, 10, 1, color, highlight);
    });

    editor.on('update:blushColor', (color, highlight) => {
        native.setPedHeadOverlayColor(alt.Player.local.scriptID, 5, 2, color, highlight);
    });

    editor.on('update:lipstickColor', (color, highlight) => {
        native.setPedHeadOverlayColor(alt.Player.local.scriptID, 8, 2, color, highlight);
    });

    editor.on('update:beardColor', (color, highlight) => {
        native.setPedHeadOverlayColor(alt.Player.local.scriptID, 1, 1, color, highlight);
    });

    editor.on('update:pedHeadBlendData', (sf, sm, smix, skf, skm, skmix) => {
        native.setPedHeadBlendData(alt.Player.local.scriptID, sf, sm, 0, skf, skm, 0, smix, skmix, 0, false);
    });

    //native.setPedFaceFeature(alt.Player.local.scriptID, 0, scale_number);

    editor.on('update:nosewidth', (scale_number) => {
        // alt.log('update:nosewidth');
        native.setPedFaceFeature(alt.Player.local.scriptID, 0, scale_number);
    });
    editor.on('update:noseheigh', (scale_number) => {
        // alt.log('update:noseheigh');
        native.setPedFaceFeature(alt.Player.local.scriptID, 1, scale_number);
    });
    editor.on('update:noselength', (scale_number) => {
        // alt.log('update:noselength');
        native.setPedFaceFeature(alt.Player.local.scriptID, 2, scale_number);
    });
    editor.on('update:noseback', (scale_number) => {
        // alt.log('update:noseback');
        native.setPedFaceFeature(alt.Player.local.scriptID, 3, scale_number);
    });
    editor.on('update:nosetip', (scale_number) => {
        // alt.log('update:nosetip');
        native.setPedFaceFeature(alt.Player.local.scriptID, 4, scale_number);
    });
    editor.on('update:nosebridge', (scale_number) => {
        // alt.log('update:nosebridge');
        native.setPedFaceFeature(alt.Player.local.scriptID, 5, scale_number);
    });
    editor.on('update:browheight', (scale_number) => {
        // alt.log('update:browheight');
        native.setPedFaceFeature(alt.Player.local.scriptID, 6, scale_number);
    });
    editor.on('update:browwidth', (scale_number) => {
        // alt.log('update:browwidth');
        native.setPedFaceFeature(alt.Player.local.scriptID, 7, scale_number);
    });
    editor.on('update:cheekbonesheight', (scale_number) => {
        // alt.log('update:cheekbonesheight');
        native.setPedFaceFeature(alt.Player.local.scriptID, 8, scale_number);
    });
    editor.on('update:cheekboneswidth', (scale_number) => {
        // alt.log('update:cheekboneswidth');
        native.setPedFaceFeature(alt.Player.local.scriptID, 9, scale_number);
    });
    editor.on('update:cheekwidth', (scale_number) => {
        // alt.log('update:cheekwidth');
        native.setPedFaceFeature(alt.Player.local.scriptID, 10, scale_number);
    });
    editor.on('update:eyelid', (scale_number) => {
        // alt.log('update:eyelid');
        native.setPedFaceFeature(alt.Player.local.scriptID, 11, scale_number);
    });
    editor.on('update:lips', (scale_number) => {
        // alt.log('update:lips');
        native.setPedFaceFeature(alt.Player.local.scriptID, 12, scale_number);
    });
    editor.on('update:jawwidth', (scale_number) => {
        // alt.log('update:jawwidth');
        native.setPedFaceFeature(alt.Player.local.scriptID, 13, scale_number);
    });
    editor.on('update:jawheight', (scale_number) => {
        // alt.log('update:jawheight');
        native.setPedFaceFeature(alt.Player.local.scriptID, 14, scale_number);
    });
    editor.on('update:chinlength', (scale_number) => {
        // alt.log('update:chinlength');
        native.setPedFaceFeature(alt.Player.local.scriptID, 14, scale_number);
    });

    editor.on('update:chinpos', (scale_number) => {
        // alt.log('update:chinpos');
        native.setPedFaceFeature(alt.Player.local.scriptID, 16, scale_number);
    });
    editor.on('update:chinwidth', (scale_number) => {
        // alt.log('update:chinwidth');
        native.setPedFaceFeature(alt.Player.local.scriptID, 17, scale_number);
    });
    editor.on('update:chinshape', (scale_number) => {
        // alt.log('update:chinshape');
        native.setPedFaceFeature(alt.Player.local.scriptID, 18, scale_number);
    });
    editor.on('update:neckwidth', (scale_number) => {
        // alt.log('update:neckwidth');
        native.setPedFaceFeature(alt.Player.local.scriptID, 19, scale_number);
    });

    editor.on('update:hats', (draw, texture) => {
        native.setPedPropIndex(alt.Player.local.scriptID, 0, draw, texture, true);
    });

    editor.on('update:glasses', (draw, texture) => {
        native.setPedPropIndex(alt.Player.local.scriptID, 1, draw, texture, true);
    });

    editor.on('update:ears', (draw, texture) => {
        native.setPedPropIndex(alt.Player.local.scriptID, 2, draw, texture, true);
    });

    editor.on('update:watches', (draw, texture) => {
        native.setPedPropIndex(alt.Player.local.scriptID, 6, draw, texture, true);
    });

    editor.on('update:bracelets', (draw, texture) => {
        native.setPedPropIndex(alt.Player.local.scriptID, 7, draw, texture, true);
    });
});

alt.on('charedit:error', (err) => {
    editor.emit('error', err);
});

alt.onServer('charedit:hide', () => {
    alt.toggleGameControls(true);
    editor.emit('body:hidden');
    alt.showCursor(false);
    alt.setCamFrozen(false);
    camera.destroy();
    camera = undefined;

    alt.emit('charselect:reopen');
});

alt.onServer('charedit:hide', () => {
    editor.emit('body:hidden');
});
