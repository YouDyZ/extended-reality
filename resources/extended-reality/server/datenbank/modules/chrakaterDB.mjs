import * as alt from 'alt';
import chat from 'chat';
import mongoose from 'mongoose';

const CharSchema = new mongoose.Schema(
    {
        player: {
            type: String,
            required: true,
        },
        forname: {
            type: String,
            required: [true, 'Dein Charakter benötigt einen Vornamen!'],
        },
        lastname: {
            type: String,
            required: [true, 'Dein Charakter benötigt einen Nachnamen!'],
        },
        height: {
            type: Number,
            required: [true, 'Dein Charakter benötigt eine Größe!'],
        },
        dateOfBirth: {
            type: Date,
            required: [true, 'Du Charakter benötigt ein Geburtstag!'],
        },
        genderskin: {
            type: String,
            required: [true, 'Überprüfe bitte dein Geschlecht!'],
        },
        //Alles mit Draw und Texture
        maskDraw: {
            type: Number,
            required: true,
        },
        maskTexture: {
            type: Number,
            required: true,
        },
        hair: {
            type: Number,
            required: true,
        },
        legsDraw: {
            type: Number,
            required: true,
        },
        legsTexture: {
            type: Number,
            required: true,
        },
        shoesDraw: {
            type: Number,
            required: true,
        },
        shoesTexture: {
            type: Number,
            required: true,
        },
        accessoriesDraw: {
            type: Number,
            required: true,
        },
        accessoriesTexture: {
            type: Number,
            required: true,
        },
        undershirtDraw: {
            type: Number,
            required: true,
        },
        undershirtTexture: {
            type: Number,
            required: true,
        },
        decalsDraw: {
            type: Number,
            required: true,
        },
        decalsTexture: {
            type: Number,
            required: true,
        },
        topsDraw: {
            type: Number,
            required: true,
        },
        topsTexture: {
            type: Number,
            required: true,
        },
        torso: {
            type: Number,
            required: true,
        },
        blemishesIndex: {
            type: Number,
            required: true,
        },
        blemishesOpcaity: {
            type: Number,
            required: true,
        },
        facialHairTexture: {
            type: Number,
            required: true,
        },
        facialHairOpacity: {
            type: Number,
            required: true,
        },
        eyebrowsIndex: {
            type: Number,
            required: true,
        },
        eyebrowsOpacity: {
            type: Number,
            required: true,
        },
        ageingIndex: {
            type: Number,
            required: true,
        },
        ageingOpacity: {
            type: Number,
            required: true,
        },
        makeupIndex: {
            type: Number,
            required: true,
        },
        makeupOpacity: {
            type: Number,
            required: true,
        },
        blushIndex: {
            type: Number,
            required: true,
        },
        blushOpacity: {
            type: Number,
            required: true,
        },
        complexionIndex: {
            type: Number,
            required: true,
        },
        complexionOpacity: {
            type: Number,
            required: true,
        },
        sunDamageIndex: {
            type: Number,
            required: true,
        },
        sunDamageOpacity: {
            type: Number,
            required: true,
        },
        lipstickIndex: {
            type: Number,
            required: true,
        },
        lipstickOpacity: {
            type: Number,
            required: true,
        },
        fracklesIndex: {
            type: Number,
            required: true,
        },
        fracklesOpacity: {
            type: Number,
            required: true,
        },
        chestHairIndex: {
            type: Number,
            required: true,
        },
        chestHairOpacity: {
            type: Number,
            required: true,
        },
        bodyBlemishesIndex: {
            type: Number,
            required: true,
        },
        bodyBlemishesOpacity: {
            type: Number,
            required: true,
        },
        addbodyBlemishesIndex: {
            type: Number,
            required: true,
        },
        addbodyBlemishesOpacity: {
            type: Number,
            required: true,
        },

        hairColorIndex: {
            type: Number,
            required: true,
        },
        hairColorHighlight: {
            type: Number,
            required: true,
        },
        eyeColor: {
            type: Number,
            required: true,
        },

        eyebrowscolorIndex: {
            type: Number,
            required: true,
        },
        eyebrowscolorHighlight: {
            type: Number,
            required: true,
        },
        chesthaircolorIndex: {
            type: Number,
            required: true,
        },
        chesthaircolorHighlight: {
            type: Number,
            required: true,
        },
        blushcolorIndex: {
            type: Number,
            required: true,
        },
        blushcolorHighlight: {
            type: Number,
            required: true,
        },
        beardcolorIndex: {
            type: Number,
            required: true,
        },
        beardcolorHighlight: {
            type: Number,
            required: true,
        },
        lipstickcolorIndex: {
            type: Number,
            required: true,
        },
        lipstickcolorHighlight: {
            type: Number,
            required: true,
        },

        parentsShapeM: {
            type: Number,
            required: true,
        },
        parentsShapeW: {
            type: Number,
            required: true,
        },
        parentsShapeMix: {
            type: Number,
            required: true,
        },
        parentsSkinM: {
            type: Number,
            required: true,
        },
        parentsSkinW: {
            type: Number,
            required: true,
        },
        parentsSkinMix: {
            type: Number,
            required: true,
        },

        nosewith: {
            type: Number,
            required: true,
        },
        noseheigh: {
            type: Number,
            required: true,
        },
        noselength: {
            type: Number,
            required: true,
        },
        noseback: {
            type: Number,
            required: true,
        },
        nosetip: {
            type: Number,
            required: true,
        },
        nosebridge: {
            type: Number,
            required: true,
        },
        browheight: {
            type: Number,
            required: true,
        },
        browwidth: {
            type: Number,
            required: true,
        },
        cheekbonesheight: {
            type: Number,
            required: true,
        },
        cheekboneswidth: {
            type: Number,
            required: true,
        },
        cheekwidth: {
            type: Number,
            required: true,
        },
        eyelid: {
            type: Number,
            required: true,
        },
        lips: {
            type: Number,
            required: true,
        },
        jawwidth: {
            type: Number,
            required: true,
        },
        jawheight: {
            type: Number,
            required: true,
        },
        chinlength: {
            type: Number,
            required: true,
        },
        chinpos: {
            type: Number,
            required: true,
        },
        chinwidth: {
            type: Number,
            required: true,
        },
        chinshape: {
            type: Number,
            required: true,
        },
        neckwidth: {
            type: Number,
            required: true,
        },

        hatsDraw: {
            type: Number,
            required: true,
        },
        hatsTexture: {
            type: Number,
            required: true,
        },
        glassesDraw: {
            type: Number,
            required: true,
        },
        glassesTexture: {
            type: Number,
            required: true,
        },
        earsDraw: {
            type: Number,
            required: true,
        },
        earsTexture: {
            type: Number,
            required: true,
        },
        watchesDraw: {
            type: Number,
            required: true,
        },
        watchesTexture: {
            type: Number,
            required: true,
        },
        braceletsDraw: {
            type: Number,
            required: true,
        },
        braceletsTexture: {
            type: Number,
            required: true,
        },
        wearhats: {
            type: Boolean,
            required: true,
        },
        wearglasses: {
            type: Boolean,
            required: true,
        },
        wearears: {
            type: Boolean,
            required: true,
        },
        wearwatches: {
            type: Boolean,
            required: true,
        },
        wearbracelets: {
            type: Boolean,
            required: true,
        },

        //Roleplay Data (Defaults)
        stamina: {
            type: Number,
            required: true,
            default: 1000,
        },
        saturation: {
            type: Number,
            required: true,
            default: 100,
        },

        hydration: {
            type: Number,
            required: true,
            default: 100,
        },
        toilet: {
            type: Number,
            required: true,
        },
        cash: {
            type: Number,
            required: true,
            default: 1000,
        },
        health: {
            type: Number,
            required: true,
            default: 200,
        },
        armour: {
            type: Number,
            required: true,
            default: 0,
        },
        dirty: {
            type: Number,
            required: true,
            default: 0,
        },

        //x: -1040.756103515625, y: -2742.923095703125, z: 13.9296875
        lastPosX: {
            type: Number,
            required: true,
            default: -1040,
        },
        lastPosY: {
            type: Number,
            required: true,
            default: -2742,
        },
        lastPosZ: {
            type: Number,
            required: true,
            default: 13,
        },
        hotkeys: {
            type: [String],
            required: true,
            defualt: [],
        }, //todo vordefinieren
        inventory: {
            type: [String],
        },
        job: {
            type: String,
            required: false,
            default: undefined,
        },
        jobrank: {
            type: Number,
        },
        gang: {
            type: [String],
            required: false,
            defualt: [],
        },
        bank: {
            type: [String],
            required: true,
            default: [],
        },
        housing: {
            type: [String],
            required: true,
            default: [],
        },
        alc: {
            type: Number,
            required: true,
            default: 0,
        },
        drug: {
            type: Number,
            required: true,
            default: 0,
        },
        energy: {
            type: Number,
            default: 0,
            required: true,
        },
        drinkedenegry: {
            type: Number,
            default: 0,
            required: true,
        },
        dimension: {
            type: Number,
            default: 0,
            required: true,
        },
        persoID: {
            type: Number,
            default: undefined,
        },
        phone: {
            type: Number,
        },
        licence: {
            type: Array,
            default: [],
            required: true,
        },
        garage: {
            type: Array,
            required: true,
            default: [],
        },
        death: {
            type: Array,
            required: true,
            default: [false],
        },
        lastupdate: {
            type: Date,
            required: true,
            default: Date.now,
        },
        hudTheme: {
            type: String,
            default: 'green',
            required: true,
        },
        addiction_nicotine: {
            type: Boolean,
            default: false,
            required: true,
        },
        addiction_alcohol: {
            type: Boolean,
            default: false,
            required: true,
        },
        addiction_cocaine: {
            type: Boolean,
            default: false,
            required: true,
        },
        addiction_marijuana: {
            type: Boolean,
            default: false,
            required: true,
        },
        addiction_lsd: {
            type: Boolean,
            default: false,
            required: true,
        },
        addiction_heroin: {
            type: Boolean,
            default: false,
            required: true,
        },
        addiction_opium: {
            type: Boolean,
            default: true,
            required: true,
        },
        addiction_meth: {
            type: Boolean,
            default: false,
            required: true,
        },
        addiction_caffeine: {
            type: Boolean,
            default: false,
            required: true,
        },
        fat: {
            type: Number,
            required: true,
            default: 50,
        },
        muscle: {
            type: Number,
            required: true,
            default: 50,
        },
        skills: {
            type: [String],
            required: true,
            default: [],
        },
    },
    { autoCreate: true }
);

const CharModels = mongoose.model('Charakter', CharSchema);

export { CharSchema, CharModels };
