import * as alt from 'alt';
import chat from 'chat';
import { CharModels, PlayersModel } from './modules/exports';

alt.onClient('database:newChar', (player, newChar) => {
    console.log('database:newChar');

    let sc = player.getMeta('socialclub');

    const capitalizeString = (str) => {
    if(typeof str === 'string') {
        return str.replace(/^\w/, c => c.toUpperCase());
    } else {
        return '';
    }
};
    //test for Bot

    newChar.forname = capitalizeString(newChar.forname)
    newChar.lastname = capitalizeString(newChar.lastname)

    PlayersModel.findOne({ social: sc }).then((res) => {
        let newCharData = new CharModels({
            player: res._id,
            forname: newChar.forname,
            lastname: newChar.lastname,
            height: newChar.height,
            dateOfBirth: newChar.dateOfBirth,

            genderskin: newChar.genderskin,

            maskDraw: newChar.mask[0],
            maskTexture: newChar.mask[1],
            hair: newChar.hair[0],
            legsDraw: newChar.legs[0],
            legsTexture: newChar.legs[1],
            shoesDraw: newChar.shoes[0],
            shoesTexture: newChar.shoes[1],
            accessoriesDraw: newChar.accessories[0],
            accessoriesTexture: newChar.accessories[1],
            undershirtDraw: newChar.undershirt[0],
            undershirtTexture: newChar.undershirt[1],
            decalsDraw: newChar.decals[0],
            decalsTexture: newChar.decals[1],
            topsDraw: newChar.tops[0],
            topsTexture: newChar.tops[1],
            torso: newChar.torso[0],
            blemishesIndex: newChar.blemishes[0],
            blemishesOpcaity: newChar.blemishes[1],
            facialHairTexture: newChar.facialHair[0],
            facialHairOpacity: newChar.facialHair[1],
            eyebrowsIndex: newChar.eyebrows[0],
            eyebrowsOpacity: newChar.eyebrows[1],
            ageingIndex: newChar.ageing[0],
            ageingOpacity: newChar.ageing[1],
            makeupIndex: newChar.makeup[0],
            makeupOpacity: newChar.makeup[1],
            blushIndex: newChar.blush[0],
            blushOpacity: newChar.blush[1],
            complexionIndex: newChar.complexion[0],
            complexionOpacity: newChar.complexion[1],
            sunDamageIndex: newChar.sunDamage[0],
            sunDamageOpacity: newChar.sunDamage[1],
            lipstickIndex: newChar.lipstick[0],
            lipstickOpacity: newChar.lipstick[1],
            fracklesIndex: newChar.frackles[0],
            fracklesOpacity: newChar.frackles[1],
            chestHairIndex: newChar.chestHair[0],
            chestHairOpacity: newChar.chestHair[1],
            bodyBlemishesIndex: newChar.bodyBlemishes[0],
            bodyBlemishesOpacity: newChar.bodyBlemishes[1],
            addbodyBlemishesIndex: newChar.addbodyBlemishes[0],
            addbodyBlemishesOpacity: newChar.addbodyBlemishes[1],

            hairColorIndex: newChar.hairColor[0],
            hairColorHighlight: newChar.hairColor[1],

            eyeColor: newChar.eyeColor,
            eyebrowscolorIndex: newChar.eyebrowscolor[0],
            eyebrowscolorHighlight: newChar.eyebrowscolor[1],
            chesthaircolorIndex: newChar.chesthaircolor[0],
            chesthaircolorHighlight: newChar.chesthaircolor[1],
            blushcolorIndex: newChar.blushcolor[0],
            blushcolorHighlight: newChar.blushcolor[1],
            beardcolorIndex: newChar.beardcolor[0],
            beardcolorHighlight: newChar.beardcolor[1],
            lipstickcolorIndex: newChar.lipstickcolor[0],
            lipstickcolorHighlight: newChar.lipstickcolor[1],

            parentsShapeM: newChar.parents[0],
            parentsShapeW: newChar.parents[1],
            parentsShapeMix: newChar.parents[2],
            parentsSkinM: newChar.parents[3],
            parentsSkinW: newChar.parents[4],
            parentsSkinMix: newChar.parents[5],

            nosewith: newChar.nosewith,
            noseheigh: newChar.noseheigh,
            noselength: newChar.noselength,
            noseback: newChar.noseback,
            nosetip: newChar.nosetip,
            nosebridge: newChar.nosebridge,
            browheight: newChar.browheight,
            browwidth: newChar.browwidth,
            cheekbonesheight: newChar.cheekbonesheight,
            cheekboneswidth: newChar.cheekboneswidth,
            cheekwidth: newChar.cheekwidth,
            eyelid: newChar.eyelid,
            lips: newChar.lips,
            jawwidth: newChar.jawwidth,
            jawheight: newChar.jawheight,
            chinlength: newChar.chinlength,
            chinpos: newChar.chinpos,
            chinshape: newChar.chinshape,
            chinwidth: newChar.chinwidth,
            neckwidth: newChar.neckwidth,

            hatsDraw: newChar.hats[0],
            hatsTexture: newChar.hats[1],
            glassesDraw: newChar.glasses[0],
            glassesTexture: newChar.glasses[1],
            earsDraw: newChar.ears[0],
            earsTexture: newChar.ears[1],
            watchesDraw: newChar.watches[0],
            watchesTexture: newChar.watches[1],
            braceletsDraw: newChar.bracelets[0],
            braceletsTexture: newChar.bracelets[1],

            wearhats: true,
            wearglasses: true,
            wearears: true,
            wearwatches: true,
            wearbracelets: true,

            toilet: Math.floor(Math.random() * 80),
        });

        newCharData.save(function (err, res) {
            if (err) {
                alt.emitClient(player, 'database:newChar:error', err.message);
            } else {
                alt.emitClient(player, 'charedit:hide');
                CharModels.find({ player: res.player }).then((chars) => {
                    alt.emitClient(player, 'charselect:regenerate', chars, 365);
                });
            }
        });
    });

    // PlayersModel.findOneAndUpdate({ social: sc }, { $push: { character: newChar[0] } }, function (err, res) {
    //     if (err) {
    //         alt.emitClient(player, 'charedit:saveError', err);
    //     } else {
    //         player.setMeta('usedCharedit', true);
    //     }
    // });
});
