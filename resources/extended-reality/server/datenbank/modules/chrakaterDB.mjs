import * as alt from 'alt';
import chat from 'chat';
import mongoose from 'mongoose';

const CharSchema = new mongoose.Schema({
    player: {
        type: String,
        required: true,
    },
    forname: {
        type: String,
        required: [true, 'Dein Charakter benötigt einen Vornamen!'],
        uppercase: true,
    },
    lastname: {
        type: String,
        required: [true, 'Dein Charakter benötigt einen Nachnamen!'],
        uppercase: true,
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

    mask: {
        type: Array,
        required: true,
    },
    hair: {
        type: Number,
        required: true,
    },
    legs: {
        type: Array,
        required: true,
    },
    shoes: {
        type: Array,
        required: true,
    },
    accessories: {
        type: Array,
        required: true,
    },
    undershirt: {
        type: Array,
        required: true,
    },
    decals: {
        type: Array,
        required: true,
    },
    tops: {
        type: Array,
        required: true,
    },
    torso: {
        type: Number,
        required: true,
    },

    blemishes: {
        type: Array,
        required: true,
    },
    facialHair: {
        type: Array,
        required: true,
    },
    eyebrows: {
        type: Array,
        required: true,
    },
    ageing: {
        type: Array,
        required: true,
    },
    makeup: {
        type: Array,
        required: true,
    },
    blush: {
        type: Array,
        required: true,
    },
    complexion: {
        type: Array,
        required: true,
    },
    sunDamage: {
        type: Array,
        required: true,
    },
    lipstick: {
        type: Array,
        required: true,
    },
    frackles: {
        type: Array,
        required: true,
    },
    chestHair: {
        type: Array,
        required: true,
    },
    bodyBlemishes: {
        type: Array,
        required: true,
    },
    addbodyBlemishes: {
        type: Array,
        required: true,
    },

    hairColor: {
        type: Array,
        required: true,
    },

    eyeColor: {
        type: Number,
        required: true,
    },

    eyebrowscolor: {
        type: Array,
        required: true,
    },
    chesthaircolor: {
        type: Array,
        required: true,
    },
    blushcolor: {
        type: Array,
        required: true,
    },
    beardcolor: {
        type: Array,
        required: true,
    },
    lipstickcolor: {
        type: Array,
        required: true,
    },

    parents: {
        type: Array,
        required: true,
    }, // 6 Length

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

    hats: {
        type: Array,
        required: true,
    },
    glasses: {
        type: Array,
        required: true,
    },
    ears: {
        type: Array,
        required: true,
    },
    watches: {
        type: Array,
        required: true,
    },
    bracelets: {
        type: Array,
        required: true,
    },
    wearhats: {
        type: Array,
        required: true,
    },
    wearglasses: {
        type: Array,
        required: true,
    },
    wearears: {
        type: Array,
        required: true,
    },
    wearwatches: {
        type: Array,
        required: true,
    },
    wearbracelets: {
        type: Array,
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
        default: Math.floor(Math.random() * 80),
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
    position: {
        type: Array,
        required: [true, 'Fehler beim Setzen deiner Position'],
    },
    hotkeys: {
        type: Array,
        required: true,
        defualt: [],
    }, //todo vordefinieren
    inventory: {
        type: Array,
    },
    job: {
        type: Array,
        required: true,
        default: undefined,
    },
    gang: {
        type: Array,
        required: true,
        defualt: undefined,
    },
    bank: {
        type: Array,
        required: true,
        default: [],
    },
    housing: {
        type: Array,
        required: true,
        default: [],
    },
    visiting: {
        type: String,
        required: true,
        default: '',
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
        required: true,
    },
    phone: {
        type: Array,
        default: [],
        required: true,
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
        default: green,
        required: true,
    },
    addiction: {
        nicotine: {
            type: Boolean,
            default: false,
            required: true,
        },
        alcohol: {
            type: Boolean,
            default: false,
            required: true,
        },
        cocaine: {
            type: Boolean,
            default: false,
            required: true,
        },
        marijuana: {
            type: Boolean,
            default: false,
            required: true,
        },
        lsd: {
            type: Boolean,
            default: false,
            required: true,
        },
        heroin: {
            type: Boolean,
            default: false,
            required: true,
        },
        opium: {
            type: Boolean,
            default: true,
            required: true,
        },
        meth: {
            type: Boolean,
            default: false,
            required: true,
        },
        caffeine: {
            type: Boolean,
            default: false,
            required: true,
        },
    },
    insurance: {
        type: Array,
        default: [],
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
        type: Array,
        required: true,
        default: [],
    },
});

const CharModel = mongoose.model('charakter', CharSchema);

export default CharModel;
