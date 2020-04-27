let apiM = import('./api/male.js');
let apiF = import('./api/female.js');

let log = function (obj) {
    // console.log(obj);
};
/**
 * @param api
 * pedComponent.component[value].
 */
//Alt:V Event for
let gender = 'male';

alt.on('body:hidden', () => {
    document.getElementById('body').classList.add('unselectable');
});

alt.on('body:show', () => {
    globalApi = setApi(gender);
    document.getElementById('body').classList.remove('unselectable');
});

alt.on('error', (error) => {
    document.getElementById('errormsg').innerHTML = `${error}`;
});

alt.on('gender:result', (getGender) => {
    alt.emit('ready');

    if (getGender == 'male') {
        // console.log('gender-male');
        genderbuttonM.checked = true;
        gender = 'male';
        globalApi = apiM;
    } else if (getGender == 'female') {
        // console.log('gender-female');
        genderbuttonF.checked = true;
        gender = 'female';
        globalApi = apiF;
    } else {
        // console.log('gender-male');
        genderbuttonM.checked = true;
        gender = 'male';
        globalApi = apiM;
    }
});

const emitUpdate = function (component, draw, texture) {
    alt.emit(`update:${component}`, draw, texture);
};

const skinUpdate = function (shapef, shapem, shapemix, skinf, skinm, skinmix) {
    alt.emit('update:pedHeadBlendData', shapef, shapem, shapemix, skinf, skinm, skinmix);
};

//Alle komonenten als globale Variable
let forname;
let lastname;
let height;
let dateOfBirth;

//pedComponents
let globalApi = apiM;
let rotation;
let camzoom;
let camheight;

let genderbuttonM;
let genderbuttonF;

let maskDraw;
let maskTexture;

let hairDraw;

let legsDraw;
let legsTexture;

let shoesDraw;
let shoesTexture;

let accessoriesDraw;
let accessoriesTexture;

let undershirtDraw;
let undershirtTexture;

let decalsDraw;
let decalsTexture;

let topsDraw;
let topsTexture;

//headOverlay

let blemishes;
let facialHair;
let eyebrows;
let ageing;
let makeup;
let blush;
let complexion;
let sunDamage;
let lipstick;
let freckles;
let chestHair;
let bodyBlemishes;
let addbodyBlemishes;

let blemishesOpacity;
let facialHairOpacity;
let eyebrowsOpacity;
let ageingOpacity;
let makeupOpacity;
let blushOpacity;
let complexionOpacity;
let sunDamageOpacity;
let lipstickOpacity;
let frecklesOpacity;
let chestHairOpacity;
let bodyBlemishesOpacity;
let addbodyBlemishesOpacity;

let primaryColor;
let colorHighlight;
//ped hairColor

//Eyecolor
let eyeColor;
//headOverlayColor

//More Colors
let eyebrowsprimary;
let eyebrowshighlight;
let chesthairprimary;
let chesthairhighlight;
let blushprimary;
let blushhighlight;
let beardprimary;
let beardhighlight;
let lipstickprimary;
let lipstickhighlight;

//setheadblendData
let shapefather;
let shapemother;
let shapemix;
let skinfather;
let skinmother;
let skinmix;

//details
let nosewidth;
let noseheigh;
let noselength;
let noseback;
let nosetip;
let nosebridge;
let browheight;
let browwidth;
let cheekbonesheight;
let cheekboneswidth;
let cheekwidth;
let eyelid;
let lips;
let jawwidth;
let jawheight;
let chinlength;
let chinpos;
let chinwidth;
let chinshape;
let neckwidth;

let hatsdraw;
let glassesdraw;
let earsdraw;
let watchesdraw;
let braceletsdraw;

let hatstexture;
let glassestexture;
let earstexture;
let watchestexture;
let braceletstexture;

//functions

const unselectable = function (component) {
    document.getElementById(`${component}`).classList.add('unselectable');
};

const selectable = function (component) {
    document.getElementById(`${component}`).classList.remove('unselectable');
};

//Value Change
window.addEventListener('load', function () {
    forname = document.getElementById('forname');
    lastname = document.getElementById('lastname');
    height = document.getElementById('playerheight');
    dateOfBirth = document.getElementById('dateOfBirth');

    //alt.emit('gender:get');

    rotation = document.getElementById('rotation');
    camzoom = document.getElementById('camzoom');
    camheight = document.getElementById('camheight');
    //pedComponent
    genderbuttonM = document.getElementById('male');
    genderbuttonF = document.getElementById('female');

    maskDraw = document.getElementById('maskdraw');
    maskTexture = document.getElementById('masktexture');

    hairDraw = document.getElementById('hairdraw');

    legsDraw = document.getElementById('legsdraw');
    legsTexture = document.getElementById('legstexture');

    shoesDraw = document.getElementById('shoesdraw');
    shoesTexture = document.getElementById('shoestexture');

    accessoriesDraw = document.getElementById('accessoriesdraw');
    accessoriesTexture = document.getElementById('accessoriestexture');

    undershirtDraw = document.getElementById('undershirtdraw');
    undershirtTexture = document.getElementById('undershirttexture');

    decalsDraw = document.getElementById('decalsdraw');
    decalsTexture = document.getElementById('decalstexture');

    topsDraw = document.getElementById('topsdraw');
    topsTexture = document.getElementById('topstexture');

    //
    blemishes = document.getElementById('blemishes');
    facialHair = document.getElementById('facialHair');
    eyebrows = document.getElementById('eyebrows');
    ageing = document.getElementById('ageing');
    makeup = document.getElementById('makeup');
    blush = document.getElementById('blush');
    complexion = document.getElementById('complexion');
    sunDamage = document.getElementById('sunDamage');
    lipstick = document.getElementById('lipstick');
    freckles = document.getElementById('frackles');
    chestHair = document.getElementById('chestHair');
    bodyBlemishes = document.getElementById('bodyBlemishes');
    addbodyBlemishes = document.getElementById('addbodyBlemishes');

    blemishesOpacity = document.getElementById('blemishesOpacity');
    facialHairOpacity = document.getElementById('facialHairOpacity');
    eyebrowsOpacity = document.getElementById('eyebrowsOpacity');
    ageingOpacity = document.getElementById('ageingOpacity');
    makeupOpacity = document.getElementById('makeupOpacity');
    blushOpacity = document.getElementById('blushOpacity');
    complexionOpacity = document.getElementById('complexionOpacity');
    sunDamageOpacity = document.getElementById('sunDamageOpacity');
    lipstickOpacity = document.getElementById('lipstickOpacity');
    frecklesOpacity = document.getElementById('fracklesOpacity');
    chestHairOpacity = document.getElementById('chestHairOpacity');
    bodyBlemishesOpacity = document.getElementById('bodyBlemishesOpacity');
    addbodyBlemishesOpacity = document.getElementById('addbodyBlemishesOpacity');

    // Haarfarbe
    primaryColor = document.getElementById('primaryColor');
    colorHighlight = document.getElementById('highlightColor');

    //eyeColor
    eyeColor = document.getElementById('eyeColor');

    //morecolors
    eyebrowsprimary = document.getElementById('eyebrowsprimary');
    eyebrowshighlight = document.getElementById('eyebrowshighlight');
    chesthairprimary = document.getElementById('chesthairprimary');
    chesthairhighlight = document.getElementById('chesthairhighlight');
    blushprimary = document.getElementById('blushprimary');
    blushhighlight = document.getElementById('blushhighlight');
    beardprimary = document.getElementById('beardprimary');
    beardhighlight = document.getElementById('beardhighlight');
    lipstickprimary = document.getElementById('lipstickprimary');
    lipstickhighlight = document.getElementById('lipstickhighlight');

    //pedheadblenddata
    shapefather = document.getElementById('shapefather');
    shapemother = document.getElementById('shapemother');
    shapemix = document.getElementById('shapemix');
    skinfather = document.getElementById('skinfather');
    skinmother = document.getElementById('skinmother');
    skinmix = document.getElementById('skinmix');

    //deteils
    nosewidth = document.getElementById('nosewidth');
    noseheigh = document.getElementById('noseheight');
    noselength = document.getElementById('noselength');
    noseback = document.getElementById('noseback');
    nosetip = document.getElementById('nosetip');
    nosebridge = document.getElementById('nosebridge');
    browheight = document.getElementById('browheight');
    browwidth = document.getElementById('browwidth');
    cheekbonesheight = document.getElementById('cheekbonesheight');
    cheekboneswidth = document.getElementById('cheekboneswidth');
    cheekwidth = document.getElementById('cheekwidth');
    eyelid = document.getElementById('eyelid');
    lips = document.getElementById('lips');
    jawwidth = document.getElementById('jawwidth');
    jawheight = document.getElementById('jawheight');
    chinlength = document.getElementById('chinlength');
    chinpos = document.getElementById('chinpos');
    chinwidth = document.getElementById('chinwidth');
    chinshape = document.getElementById('chinshape');
    neckwidth = document.getElementById('neckwidth');
    //Eventlistener

    hatsdraw = document.getElementById('hatsdraw');
    glassesdraw = document.getElementById('glassesdraw');
    earsdraw = document.getElementById('earsdraw');
    watchesdraw = document.getElementById('watchesdraw');
    braceletsdraw = document.getElementById('braceletsdraw');

    hatstexture = document.getElementById('hatstexture');
    glassestexture = document.getElementById('glassestexture');
    earstexture = document.getElementById('earstexture');
    watchestexture = document.getElementById('watchestexture');
    braceletstexture = document.getElementById('braceletstexture');

    rotation.addEventListener('input', function () {
        let rot = parseInt(rotation.value);
        alt.emit('charedit:rotation', rot);
    });

    camzoom.addEventListener('input', function () {
        let zoom = parseInt(camzoom.value);
        alt.emit('charedit:camzoom', zoom);
    });

    camheight.addEventListener('input', function () {
        let height = parseInt(camheight.value) / 100;
        alt.emit('charedit:camheight', height);
    });

    genderbuttonF.addEventListener('click', function () {
        gender = this.value;
        globalApi = apiF;

        emitUpdate('gender', 'female');
    });

    genderbuttonM.addEventListener('click', function () {
        gender = this.value;
        globalApi = apiM;

        emitUpdate('gender', 'male');
    });

    maskDraw.addEventListener('input', function () {
        let draw = parseInt(maskDraw.value);
        let max = globalApi.pedComponent.mask.length;

        // console.log(draw);
        // console.log(max);

        if (draw >= max) {
            maskDraw.value = max;
            draw = max;
            selectable('maskdrawprev');
            unselectable('maskdrawnext');
        } else if (draw <= 1) {
            maskDraw.value = 1;
            draw = 1;
            selectable('maskdrawnext');
            unselectable('maskdrawprev');
        } else if (draw >= 2) {
            maskDraw.value = draw;
            selectable('maskdrawnext');
            selectable('maskdrawprev');
        }

        //Kleidung setzten

        emitUpdate('mask', globalApi.pedComponent.mask[draw - 1].draw, globalApi.pedComponent.mask[draw - 1].texture[0]);

        //texture

        maskTexture.value = 1;

        unselectable('masktextureprev');

        if (globalApi.pedComponent.mask[draw - 1].texture.length == 1) {
            unselectable('masktextureprev');
            unselectable('masktexturenext');
        } else {
            selectable('masktexturenext');
        }
    });

    maskTexture.addEventListener('input', function () {
        maskTexture.value = parseInt(maskTexture.value);
        let draw = maskDraw.value;
        let max = globalApi.pedComponent.mask[draw - 1].texture.length;
        let texture = maskTexture.value;

        if (texture >= max) {
            maskTexture.value = max;
            draw = max;
            unselectable('masktexturenext');
            selectable('masktextureprev');
        } else if (texture <= 1) {
            maskTexture.value = 1;
            draw = 1;
            unselectable('masktexturenext');
            selectable('masktexturenext');
        } else if (texture <= 2) {
            selectable('masktexturenext');
            selectable('masktextureprev');
        }

        emitUpdate('mask', globalApi.pedComponent.mask[draw - 1].draw, globalApi.pedComponent.mask[draw - 1].texture[texture - 1]);
    });

    hairDraw.addEventListener('input', function () {
        let draw = parseInt(hairDraw.value);
        let max = globalApi.pedComponent.hair.length;

        // console.log(draw);
        // console.log(max);

        if (draw >= max) {
            hairDraw.value = max;
            draw = max;
            selectable('hairdrawprev');
            unselectable('hairdrawnext');
        } else if (draw <= 1) {
            hairDraw.value = 1;
            draw = 1;
            selectable('hairdrawnext');
            unselectable('hairdrawprev');
        } else if (draw >= 2) {
            hairDraw.value = draw;
            selectable('hairdrawnext');
            selectable('hairdrawprev');
        }

        //Kleidung setzten

        emitUpdate('hair', globalApi.pedComponent.hair[draw - 1].draw, globalApi.pedComponent.hair[draw - 1].texture[0]);
    });

    legsDraw.addEventListener('input', function () {
        let draw = parseInt(legsDraw.value);
        let max = globalApi.pedComponent.legs.length;

        // console.log(draw);
        // console.log(max);

        if (draw >= max) {
            legsDraw.value = max;
            draw = max;
            selectable('legsdrawprev');
            unselectable('legsdrawnext');
        } else if (draw <= 1) {
            legsDraw.value = 1;
            draw = 1;
            selectable('legsdrawnext');
            unselectable('legsdrawprev');
        } else if (draw >= 2) {
            legsDraw.value = draw;
            selectable('legsdrawnext');
            selectable('legsdrawprev');
        }

        //Kleidung setzten

        emitUpdate('legs', globalApi.pedComponent.legs[draw - 1].draw, globalApi.pedComponent.legs[draw - 1].texture[0]);

        //texture

        legsTexture.value = 1;

        unselectable('legstextureprev');

        if (globalApi.pedComponent.legs[draw - 1].texture.length == 1) {
            unselectable('legstextureprev');
            unselectable('legstexturenext');
        } else {
            selectable('legstexturenext');
        }
    });

    legsTexture.addEventListener('input', function () {
        legsTexture.value = parseInt(legsTexture.value);
        let draw = legsDraw.value;
        let max = globalApi.pedComponent.legs[draw - 1].texture.length;
        let texture = legsTexture.value;

        if (texture >= max) {
            legsTexture.value = max;
            draw = max;
            unselectable('legstexturenext');
            selectable('legstextureprev');
        } else if (texture <= 1) {
            legsTexture.value = 1;
            draw = 1;
            unselectable('legstexturenext');
            selectable('legstexturenext');
        } else if (texture <= 2) {
            selectable('legstexturenext');
            selectable('legstextureprev');
        }

        emitUpdate('legs', globalApi.pedComponent.legs[draw - 1].draw, globalApi.pedComponent.legs[draw - 1].texture[texture - 1]);
    });

    shoesDraw.addEventListener('input', function () {
        let draw = parseInt(shoesDraw.value);
        let max = globalApi.pedComponent.shoes.length;

        // console.log(draw);
        // console.log(max);

        if (draw >= max) {
            shoesDraw.value = max;
            draw = max;
            selectable('shoesdrawprev');
            unselectable('shoesdrawnext');
        } else if (draw <= 1) {
            shoesDraw.value = 1;
            draw = 1;
            selectable('shoesdrawnext');
            unselectable('shoesdrawprev');
        } else if (draw >= 2) {
            shoesDraw.value = draw;
            selectable('shoesdrawnext');
            selectable('shoesdrawprev');
        }

        //Kleidung setzten

        emitUpdate('shoes', globalApi.pedComponent.shoes[draw - 1].draw, globalApi.pedComponent.shoes[draw - 1].texture[0]);

        //texture

        shoesTexture.value = 1;

        unselectable('shoestextureprev');

        if (globalApi.pedComponent.shoes[draw - 1].texture.length == 1) {
            unselectable('shoestextureprev');
            unselectable('shoestexturenext');
        } else {
            selectable('shoestexturenext');
        }
    });

    shoesTexture.addEventListener('input', function () {
        shoesTexture.value = parseInt(shoesTexture.value);
        let draw = shoesDraw.value;
        let max = globalApi.pedComponent.shoes[draw - 1].texture.length;
        let texture = shoesTexture.value;

        if (texture >= max) {
            shoesTexture.value = max;
            draw = max;
            unselectable('shoestexturenext');
            selectable('shoestextureprev');
        } else if (texture <= 1) {
            shoesTexture.value = 1;
            draw = 1;
            unselectable('shoestexturenext');
            selectable('shoestexturenext');
        } else if (texture <= 2) {
            selectable('shoestexturenext');
            selectable('shoestextureprev');
        }

        emitUpdate('shoes', globalApi.pedComponent.shoes[draw - 1].draw, globalApi.pedComponent.shoes[draw - 1].texture[texture - 1]);
    });

    accessoriesDraw.addEventListener('input', function () {
        let draw = parseInt(accessoriesDraw.value);
        let max = globalApi.pedComponent.accessories.length;

        // console.log(draw);
        // console.log(max);

        if (draw >= max) {
            accessoriesDraw.value = max;
            draw = max;
            selectable('accessoriesdrawprev');
            unselectable('accessoriesdrawnext');
        } else if (draw <= 1) {
            accessoriesDraw.value = 1;
            draw = 1;
            selectable('accessoriesdrawnext');
            unselectable('accessoriesdrawprev');
        } else if (draw >= 2) {
            accessoriesDraw.value = draw;
            selectable('accessoriesdrawnext');
            selectable('accessoriesdrawprev');
        }

        //Kleidung setzten

        emitUpdate('accessories', globalApi.pedComponent.accessories[draw - 1].draw, globalApi.pedComponent.accessories[draw - 1].texture[0]);

        //texture

        accessoriesTexture.value = 1;

        unselectable('accessoriestextureprev');

        if (globalApi.pedComponent.accessories[draw - 1].texture.length == 1) {
            unselectable('accessoriestextureprev');
            unselectable('accessoriestexturenext');
        } else {
            selectable('accessoriestexturenext');
        }
    });

    accessoriesTexture.addEventListener('input', function () {
        accessoriesTexture.value = parseInt(accessoriesTexture.value);
        let draw = accessoriesDraw.value;
        let max = globalApi.pedComponent.accessories[draw - 1].texture.length;
        let texture = accessoriesTexture.value;

        if (texture >= max) {
            accessoriesTexture.value = max;
            draw = max;
            unselectable('accessoriestexturenext');
            selectable('accessoriestextureprev');
        } else if (texture <= 1) {
            accessoriesTexture.value = 1;
            draw = 1;
            unselectable('accessoriestexturenext');
            selectable('accessoriestexturenext');
        } else if (texture <= 2) {
            selectable('accessoriestexturenext');
            selectable('accessoriestextureprev');
        }

        emitUpdate('accessories', globalApi.pedComponent.accessories[draw - 1].draw, globalApi.pedComponent.accessories[draw - 1].texture[texture - 1]);
    });

    undershirtDraw.addEventListener('input', function () {
        let draw = parseInt(undershirtDraw.value);
        let max = globalApi.pedComponent.undershirt.length;

        // console.log(draw);
        // console.log(max);

        if (draw >= max) {
            undershirtDraw.value = max;
            draw = max;
            selectable('undershirtdrawprev');
            unselectable('undershirtdrawnext');
        } else if (draw <= 1) {
            undershirtDraw.value = 1;
            draw = 1;
            selectable('undershirtdrawnext');
            unselectable('undershirtdrawprev');
        } else if (draw >= 2) {
            undershirtDraw.value = draw;
            selectable('undershirtdrawnext');
            selectable('undershirtdrawprev');
        }

        //Kleidung setzten

        emitUpdate('undershirt', globalApi.pedComponent.undershirt[draw - 1].draw, globalApi.pedComponent.undershirt[draw - 1].texture[0]);

        //texture

        undershirtTexture.value = 1;

        unselectable('undershirttextureprev');

        if (globalApi.pedComponent.undershirt[draw - 1].texture.length == 1) {
            unselectable('undershirttextureprev');
            unselectable('undershirttexturenext');
        } else {
            selectable('undershirttexturenext');
        }
    });

    undershirtTexture.addEventListener('input', function () {
        undershirtTexture.value = parseInt(undershirtTexture.value);
        let draw = undershirtDraw.value;
        let max = globalApi.pedComponent.undershirt[draw - 1].texture.length;
        let texture = undershirtTexture.value;

        if (texture >= max) {
            undershirtTexture.value = max;
            draw = max;
            unselectable('undershirttexturenext');
            selectable('undershirttextureprev');
        } else if (texture <= 1) {
            undershirtTexture.value = 1;
            draw = 1;
            unselectable('undershirttexturenext');
            selectable('undershirttexturenext');
        } else if (texture <= 2) {
            selectable('undershirttexturenext');
            selectable('undershirttextureprev');
        }

        emitUpdate('undershirt', globalApi.pedComponent.undershirt[draw - 1].draw, globalApi.pedComponent.undershirt[draw - 1].texture[texture - 1]);
    });

    decalsDraw.addEventListener('input', function () {
        let draw = parseInt(decalsDraw.value);
        let max = globalApi.pedComponent.decals.length;

        // console.log(draw);
        // console.log(max);

        if (draw >= max) {
            decalsDraw.value = max;
            draw = max;
            selectable('decalsdrawprev');
            unselectable('decalsdrawnext');
        } else if (draw <= 1) {
            decalsDraw.value = 1;
            draw = 1;
            selectable('decalsdrawnext');
            unselectable('decalsdrawprev');
        } else if (draw >= 2) {
            decalsDraw.value = draw;
            selectable('decalsdrawnext');
            selectable('decalsdrawprev');
        }

        //Kleidung setzten

        emitUpdate('decals', globalApi.pedComponent.decals[draw - 1].draw, globalApi.pedComponent.decals[draw - 1].texture[0]);

        //texture

        decalsTexture.value = 1;

        unselectable('decalstextureprev');

        if (globalApi.pedComponent.decals[draw - 1].texture.length == 1) {
            unselectable('decalstextureprev');
            unselectable('decalstexturenext');
        } else {
            selectable('decalstexturenext');
        }
    });

    decalsTexture.addEventListener('input', function () {
        decalsTexture.value = parseInt(decalsTexture.value);
        let draw = decalsDraw.value;
        let max = globalApi.pedComponent.decals[draw - 1].texture.length;
        let texture = decalsTexture.value;

        if (texture >= max) {
            decalsTexture.value = max;
            draw = max;
            unselectable('decalstexturenext');
            selectable('decalstextureprev');
        } else if (texture <= 1) {
            decalsTexture.value = 1;
            draw = 1;
            unselectable('decalstexturenext');
            selectable('decalstexturenext');
        } else if (texture <= 2) {
            selectable('decalstexturenext');
            selectable('decalstextureprev');
        }

        emitUpdate('decals', globalApi.pedComponent.decals[draw - 1].draw, globalApi.pedComponent.decals[draw - 1].texture[texture - 1]);
    });

    topsDraw.addEventListener('input', function () {
        let draw = parseInt(topsDraw.value);
        let max = globalApi.pedComponent.tops.length;

        // console.log(draw);
        // console.log(max);

        if (draw >= max) {
            topsDraw.value = max;
            draw = max;
            selectable('topsdrawprev');
            unselectable('topsdrawnext');
        } else if (draw <= 1) {
            topsDraw.value = 1;
            draw = 1;
            selectable('topsdrawnext');
            unselectable('topsdrawprev');
        } else if (draw >= 2) {
            topsDraw.value = draw;
            selectable('topsdrawnext');
            selectable('topsdrawprev');
        }

        //Kleidung setzten

        emitUpdate('tops', globalApi.pedComponent.tops[draw - 1].draw, globalApi.pedComponent.tops[draw - 1].texture[0]);
        emitUpdate('torso', globalApi.pedComponent.tops[draw - 1].tops, 0);

        //texture

        topsTexture.value = 1;

        unselectable('topstextureprev');

        if (globalApi.pedComponent.tops[draw - 1].texture.length == 1) {
            unselectable('topstextureprev');
            unselectable('topstexturenext');
        } else {
            selectable('topstexturenext');
        }
    });

    topsTexture.addEventListener('input', function () {
        topsTexture.value = parseInt(topsTexture.value);
        let draw = topsDraw.value;
        let max = globalApi.pedComponent.tops[draw - 1].texture.length;
        let texture = topsTexture.value;

        if (texture >= max) {
            topsTexture.value = max;
            draw = max;
            unselectable('topstexturenext');
            selectable('topstextureprev');
        } else if (texture <= 1) {
            topsTexture.value = 1;
            draw = 1;
            unselectable('topstexturenext');
            selectable('topstexturenext');
        } else if (texture <= 2) {
            selectable('topstexturenext');
            selectable('topstextureprev');
        }

        emitUpdate('tops', globalApi.pedComponent.tops[draw - 1].draw, globalApi.pedComponent.tops[draw - 1].texture[texture - 1]);
        emitUpdate('torso', globalApi.pedComponent.tops[draw - 1].tops, 0);
    });

    blemishes.addEventListener('input', function () {
        let draw = parseInt(blemishes.value);
        let max = globalApi.headOverlay.blemishes.length;

        // console.log(draw);
        // console.log(max);

        if (draw >= max) {
            blemishes.value = max;
            draw = max;
            selectable('blemishesprev');
            unselectable('blemishesnext');
        } else if (draw <= 1) {
            blemishes.value = 1;
            draw = 1;
            selectable('blemishesnext');
            unselectable('blemishesprev');
        } else if (draw >= 2) {
            blemishes.value = draw;
            selectable('blemishesnext');
            selectable('blemishesprev');
        }

        //Kleidung setzten

        emitUpdate('blemishes', globalApi.headOverlay.blemishes[draw - 1], 1);

        //texture

        blemishesOpacity.value = 100;
    });

    let blemishescount = 0;
    let blemishesIntervall;
    let blemishesTimer = function (index, opacity) {
        blemishescount = 0;
        clearInterval(blemishesIntervall);
        blemishesIntervall = setInterval(() => {
            blemishescount++;
            if (blemishescount == 10) {
                // console.log(index + '/' + opacity);
                emitUpdate('blemishes', index, opacity);
                blemishescount = 0;
                clearInterval(blemishesIntervall);
            }
        }, 50);
    };

    blemishesOpacity.addEventListener('input', function () {
        // console.log(globalApi);
        blemishescount = 0;
        let draw = parseInt(blemishes.value);
        let max = globalApi.headOverlay.blemishes.length;
        let opacity = parseInt(blemishesOpacity.value);

        opacity = opacity / 100;

        if (draw >= max) {
            blemishes.value = max;
            draw = max;
            selectable('blemishesprev');
            unselectable('blemishesnext');
        } else if (draw <= 1) {
            blemishes.value = 1;
            draw = 1;
            selectable('blemishesnext');
            unselectable('blemishesprev');
        } else if (draw >= 2) {
            blemishes.value = draw;
            selectable('blemishesnext');
            selectable('blemishesprev');
        }

        //Kleidung setzten

        blemishesTimer(globalApi.headOverlay.blemishes[draw - 1], opacity);

        //texture
    });

    facialHair.addEventListener('input', function () {
        let draw = parseInt(facialHair.value);
        let max = globalApi.headOverlay.facialHair.length;

        // console.log(draw);
        // console.log(max);

        if (draw >= max) {
            facialHair.value = max;
            draw = max;
            selectable('facialHairprev');
            unselectable('facialHairnext');
        } else if (draw <= 1) {
            facialHair.value = 1;
            draw = 1;
            selectable('facialHairnext');
            unselectable('facialHairprev');
        } else if (draw >= 2) {
            facialHair.value = draw;
            selectable('facialHairnext');
            selectable('facialHairprev');
        }

        //Kleidung setzten

        emitUpdate('facialHair', globalApi.headOverlay.facialHair[draw - 1], 1);

        //texture

        facialHairOpacity.value = 100;
    });

    let facialHaircount = 0;
    let facialHairIntervall;
    let facialHairTimer = function (index, opacity) {
        facialHaircount = 0;
        clearInterval(facialHairIntervall);
        facialHairIntervall = setInterval(() => {
            facialHaircount++;
            if (facialHaircount == 10) {
                // console.log(index + '/' + opacity);
                emitUpdate('facialHair', index, opacity);
                facialHaircount = 0;
                clearInterval(facialHairIntervall);
            }
        }, 50);
    };

    facialHairOpacity.addEventListener('input', function () {
        facialHaircount = 0;
        let draw = parseInt(facialHair.value);
        let max = globalApi.headOverlay.facialHair.length;
        let opacity = parseInt(facialHairOpacity.value);

        opacity = opacity / 100;

        if (draw >= max) {
            facialHair.value = max;
            draw = max;
            selectable('facialHairprev');
            unselectable('facialHairnext');
        } else if (draw <= 1) {
            facialHair.value = 1;
            draw = 1;
            selectable('facialHairnext');
            unselectable('facialHairprev');
        } else if (draw >= 2) {
            facialHair.value = draw;
            selectable('facialHairnext');
            selectable('facialHairprev');
        }

        //Kleidung setzten

        facialHairTimer(globalApi.headOverlay.facialHair[draw - 1], opacity);

        //texture
    });

    eyebrows.addEventListener('input', function () {
        let draw = parseInt(eyebrows.value);
        let max = globalApi.headOverlay.eyebrows.length;

        // console.log(draw);
        // console.log(max);

        if (draw >= max) {
            eyebrows.value = max;
            draw = max;
            selectable('eyebrowsprev');
            unselectable('eyebrowsnext');
        } else if (draw <= 1) {
            eyebrows.value = 1;
            draw = 1;
            selectable('eyebrowsnext');
            unselectable('eyebrowsprev');
        } else if (draw >= 2) {
            eyebrows.value = draw;
            selectable('eyebrowsnext');
            selectable('eyebrowsprev');
        }

        //Kleidung setzten

        emitUpdate('eyebrows', globalApi.headOverlay.eyebrows[draw - 1], 1);

        //texture

        eyebrowsOpacity.value = 100;
    });

    let eyebrowscount = 0;
    let eyebrowsIntervall;
    let eyebrowsTimer = function (index, opacity) {
        eyebrowscount = 0;
        clearInterval(eyebrowsIntervall);
        eyebrowsIntervall = setInterval(() => {
            eyebrowscount++;
            if (eyebrowscount == 10) {
                // console.log(index + '/' + opacity);
                emitUpdate('eyebrows', index, opacity);
                eyebrowscount = 0;
                clearInterval(eyebrowsIntervall);
            }
        }, 50);
    };

    eyebrowsOpacity.addEventListener('input', function () {
        eyebrowscount = 0;
        let draw = parseInt(eyebrows.value);
        let max = globalApi.headOverlay.eyebrows.length;
        let opacity = parseInt(eyebrowsOpacity.value);

        opacity = opacity / 100;

        if (draw >= max) {
            eyebrows.value = max;
            draw = max;
            selectable('eyebrowsprev');
            unselectable('eyebrowsnext');
        } else if (draw <= 1) {
            eyebrows.value = 1;
            draw = 1;
            selectable('eyebrowsnext');
            unselectable('eyebrowsprev');
        } else if (draw >= 2) {
            eyebrows.value = draw;
            selectable('eyebrowsnext');
            selectable('eyebrowsprev');
        }

        //Kleidung setzten

        eyebrowsTimer(globalApi.headOverlay.eyebrows[draw - 1], opacity);

        //texture
    });

    ageing.addEventListener('input', function () {
        let draw = parseInt(ageing.value);
        let max = globalApi.headOverlay.ageing.length;

        // console.log(draw);
        // console.log(max);

        if (draw >= max) {
            ageing.value = max;
            draw = max;
            selectable('ageingprev');
            unselectable('ageingnext');
        } else if (draw <= 1) {
            ageing.value = 1;
            draw = 1;
            selectable('ageingnext');
            unselectable('ageingprev');
        } else if (draw >= 2) {
            ageing.value = draw;
            selectable('ageingnext');
            selectable('ageingprev');
        }

        //Kleidung setzten

        emitUpdate('ageing', globalApi.headOverlay.ageing[draw - 1], 1);

        //texture

        ageingOpacity.value = 100;
    });

    let ageingcount = 0;
    let ageingIntervall;
    let ageingTimer = function (index, opacity) {
        ageingcount = 0;
        clearInterval(ageingIntervall);
        ageingIntervall = setInterval(() => {
            ageingcount++;
            if (ageingcount == 10) {
                // console.log(index + '/' + opacity);
                emitUpdate('ageing', index, opacity);
                ageingcount = 0;
                clearInterval(ageingIntervall);
            }
        }, 50);
    };

    ageingOpacity.addEventListener('input', function () {
        ageingcount = 0;
        let draw = parseInt(ageing.value);
        let max = globalApi.headOverlay.ageing.length;
        let opacity = parseInt(ageingOpacity.value);

        opacity = opacity / 100;

        if (draw >= max) {
            ageing.value = max;
            draw = max;
            selectable('ageingprev');
            unselectable('ageingnext');
        } else if (draw <= 1) {
            ageing.value = 1;
            draw = 1;
            selectable('ageingnext');
            unselectable('ageingprev');
        } else if (draw >= 2) {
            ageing.value = draw;
            selectable('ageingnext');
            selectable('ageingprev');
        }

        //Kleidung setzten

        ageingTimer(globalApi.headOverlay.ageing[draw - 1], opacity);

        //texture
    });

    makeup.addEventListener('input', function () {
        let draw = parseInt(makeup.value);
        let max = globalApi.headOverlay.makeup.length;

        // console.log(draw);
        // console.log(max);

        if (draw >= max) {
            makeup.value = max;
            draw = max;
            selectable('makeupprev');
            unselectable('makeupnext');
        } else if (draw <= 1) {
            makeup.value = 1;
            draw = 1;
            selectable('makeupnext');
            unselectable('makeupprev');
        } else if (draw >= 2) {
            makeup.value = draw;
            selectable('makeupnext');
            selectable('makeupprev');
        }

        //Kleidung setzten

        emitUpdate('makeup', globalApi.headOverlay.makeup[draw - 1], 1);

        //texture

        makeupOpacity.value = 100;
    });

    let makeupcount = 0;
    let makeupIntervall;
    let makeupTimer = function (index, opacity) {
        makeupcount = 0;
        clearInterval(makeupIntervall);
        makeupIntervall = setInterval(() => {
            makeupcount++;
            if (makeupcount == 10) {
                // console.log(index + '/' + opacity);
                emitUpdate('makeup', index, opacity);
                makeupcount = 0;
                clearInterval(makeupIntervall);
            }
        }, 50);
    };

    makeupOpacity.addEventListener('input', function () {
        makeupcount = 0;
        let draw = parseInt(makeup.value);
        let max = globalApi.headOverlay.makeup.length;
        let opacity = parseInt(makeupOpacity.value);

        opacity = opacity / 100;

        if (draw >= max) {
            makeup.value = max;
            draw = max;
            selectable('makeupprev');
            unselectable('makeupnext');
        } else if (draw <= 1) {
            makeup.value = 1;
            draw = 1;
            selectable('makeupnext');
            unselectable('makeupprev');
        } else if (draw >= 2) {
            makeup.value = draw;
            selectable('makeupnext');
            selectable('makeupprev');
        }

        //Kleidung setzten

        makeupTimer(globalApi.headOverlay.makeup[draw - 1], opacity);

        //texture
    });

    blush.addEventListener('input', function () {
        let draw = parseInt(blush.value);
        let max = globalApi.headOverlay.blush.length;

        // console.log(draw);
        // console.log(max);

        if (draw >= max) {
            blush.value = max;
            draw = max;
            selectable('blushprev');
            unselectable('blushnext');
        } else if (draw <= 1) {
            blush.value = 1;
            draw = 1;
            selectable('blushnext');
            unselectable('blushprev');
        } else if (draw >= 2) {
            blush.value = draw;
            selectable('blushnext');
            selectable('blushprev');
        }

        //Kleidung setzten

        emitUpdate('blush', globalApi.headOverlay.blush[draw - 1], 1);

        //texture

        blushOpacity.value = 100;
    });

    let blushcount = 0;
    let blushIntervall;
    let blushTimer = function (index, opacity) {
        blushcount = 0;
        clearInterval(blushIntervall);
        blushIntervall = setInterval(() => {
            blushcount++;
            if (blushcount == 10) {
                // console.log(index + '/' + opacity);
                emitUpdate('blush', index, opacity);
                blushcount = 0;
                clearInterval(blushIntervall);
            }
        }, 50);
    };

    blushOpacity.addEventListener('input', function () {
        blushcount = 0;
        let draw = parseInt(blush.value);
        let max = globalApi.headOverlay.blush.length;
        let opacity = parseInt(blushOpacity.value);

        opacity = opacity / 100;

        if (draw >= max) {
            blush.value = max;
            draw = max;
            selectable('blushprev');
            unselectable('blushnext');
        } else if (draw <= 1) {
            blush.value = 1;
            draw = 1;
            selectable('blushnext');
            unselectable('blushprev');
        } else if (draw >= 2) {
            blush.value = draw;
            selectable('blushnext');
            selectable('blushprev');
        }

        //Kleidung setzten

        blushTimer(globalApi.headOverlay.makeup[draw - 1], opacity);

        //texture
    });

    complexion.addEventListener('input', function () {
        let draw = parseInt(complexion.value);
        let max = globalApi.headOverlay.complexion.length;

        // console.log(draw);
        // console.log(max);

        if (draw >= max) {
            complexion.value = max;
            draw = max;
            selectable('complexionprev');
            unselectable('complexionnext');
        } else if (draw <= 1) {
            complexion.value = 1;
            draw = 1;
            selectable('complexionnext');
            unselectable('complexionprev');
        } else if (draw >= 2) {
            complexion.value = draw;
            selectable('complexionnext');
            selectable('complexionprev');
        }

        //Kleidung setzten

        emitUpdate('complexion', globalApi.headOverlay.complexion[draw - 1], 1);

        //texture

        complexionOpacity.value = 100;
    });

    let complexioncount = 0;
    let complexionIntervall;
    let complexionTimer = function (index, opacity) {
        complexioncount = 0;
        clearInterval(complexionIntervall);
        complexionIntervall = setInterval(() => {
            complexioncount++;
            if (complexioncount == 10) {
                // console.log(index + '/' + opacity);
                emitUpdate('complexion', index, opacity);
                complexioncount = 0;
                clearInterval(complexionIntervall);
            }
        }, 50);
    };

    complexionOpacity.addEventListener('input', function () {
        complexioncount = 0;
        let draw = parseInt(complexion.value);
        let max = globalApi.headOverlay.complexion.length;
        let opacity = parseInt(complexionOpacity.value);

        opacity = opacity / 100;

        if (draw >= max) {
            complexion.value = max;
            draw = max;
            selectable('complexionprev');
            unselectable('complexionnext');
        } else if (draw <= 1) {
            complexion.value = 1;
            draw = 1;
            selectable('complexionnext');
            unselectable('complexionprev');
        } else if (draw >= 2) {
            complexion.value = draw;
            selectable('complexionnext');
            selectable('complexionprev');
        }

        //Kleidung setzten

        complexionTimer(globalApi.headOverlay.makeup[draw - 1], opacity);

        //texture
    });

    sunDamage.addEventListener('input', function () {
        let draw = parseInt(sunDamage.value);
        let max = globalApi.headOverlay.sunDamage.length;

        // console.log(draw);
        // console.log(max);

        if (draw >= max) {
            sunDamage.value = max;
            draw = max;
            selectable('sunDamageprev');
            unselectable('sunDamagenext');
        } else if (draw <= 1) {
            sunDamage.value = 1;
            draw = 1;
            selectable('sunDamagenext');
            unselectable('sunDamageprev');
        } else if (draw >= 2) {
            sunDamage.value = draw;
            selectable('sunDamagenext');
            selectable('sunDamageprev');
        }

        //Kleidung setzten

        emitUpdate('sunDamage', globalApi.headOverlay.sunDamage[draw - 1], 1);

        //texture

        sunDamageOpacity.value = 100;
    });

    let sunDamagecount = 0;
    let sunDamageIntervall;
    let sunDamageTimer = function (index, opacity) {
        sunDamagecount = 0;
        clearInterval(sunDamageIntervall);
        sunDamageIntervall = setInterval(() => {
            sunDamagecount++;
            if (sunDamagecount == 10) {
                // console.log(index + '/' + opacity);
                emitUpdate('sunDamage', index, opacity);
                sunDamagecount = 0;
                clearInterval(sunDamageIntervall);
            }
        }, 50);
    };

    sunDamageOpacity.addEventListener('input', function () {
        sunDamagecount = 0;
        let draw = parseInt(sunDamage.value);
        let max = globalApi.headOverlay.sunDamage.length;
        let opacity = parseInt(sunDamageOpacity.value);

        opacity = opacity / 100;

        if (draw >= max) {
            sunDamage.value = max;
            draw = max;
            selectable('sunDamageprev');
            unselectable('sunDamagenext');
        } else if (draw <= 1) {
            sunDamage.value = 1;
            draw = 1;
            selectable('sunDamagenext');
            unselectable('sunDamageprev');
        } else if (draw >= 2) {
            sunDamage.value = draw;
            selectable('sunDamagenext');
            selectable('sunDamageprev');
        }

        //Kleidung setzten

        sunDamageTimer(globalApi.headOverlay.makeup[draw - 1], opacity);

        //texture
    });

    lipstick.addEventListener('input', function () {
        let draw = parseInt(lipstick.value);
        let max = globalApi.headOverlay.lipstick.length;

        // console.log(draw);
        // console.log(max);

        if (draw >= max) {
            lipstick.value = max;
            draw = max;
            selectable('lipstickprev');
            unselectable('lipsticknext');
        } else if (draw <= 1) {
            lipstick.value = 1;
            draw = 1;
            selectable('lipsticknext');
            unselectable('lipstickprev');
        } else if (draw >= 2) {
            lipstick.value = draw;
            selectable('lipsticknext');
            selectable('lipstickprev');
        }

        //Kleidung setzten

        emitUpdate('lipstick', globalApi.headOverlay.lipstick[draw - 1], 1);

        //texture

        lipstickOpacity.value = 100;
    });

    let lipstickcount = 0;
    let lipstickIntervall;
    let lipstickTimer = function (index, opacity) {
        lipstickcount = 0;
        clearInterval(lipstickIntervall);
        lipstickIntervall = setInterval(() => {
            lipstickcount++;
            if (lipstickcount == 10) {
                // console.log(index + '/' + opacity);
                emitUpdate('lipstick', index, opacity);
                lipstickcount = 0;
                clearInterval(lipstickIntervall);
            }
        }, 50);
    };

    lipstickOpacity.addEventListener('input', function () {
        lipstickcount = 0;
        let draw = parseInt(lipstick.value);
        let max = globalApi.headOverlay.lipstick.length;
        let opacity = parseInt(lipstickOpacity.value);

        opacity = opacity / 100;

        if (draw >= max) {
            lipstick.value = max;
            draw = max;
            selectable('lipstickprev');
            unselectable('lipsticknext');
        } else if (draw <= 1) {
            lipstick.value = 1;
            draw = 1;
            selectable('lipsticknext');
            unselectable('lipstickprev');
        } else if (draw >= 2) {
            lipstick.value = draw;
            selectable('lipsticknext');
            selectable('lipstickprev');
        }

        //Kleidung setzten

        lipstickTimer(globalApi.headOverlay.makeup[draw - 1], opacity);

        //texture
    });

    frackles.addEventListener('input', function () {
        let draw = parseInt(frackles.value);
        let max = globalApi.headOverlay.frackles.length;

        // console.log(draw);
        // console.log(max);

        if (draw >= max) {
            frackles.value = max;
            draw = max;
            selectable('fracklesprev');
            unselectable('fracklesnext');
        } else if (draw <= 1) {
            frackles.value = 1;
            draw = 1;
            selectable('fracklesnext');
            unselectable('fracklesprev');
        } else if (draw >= 2) {
            frackles.value = draw;
            selectable('fracklesnext');
            selectable('fracklesprev');
        }

        //Kleidung setzten

        emitUpdate('frackles', globalApi.headOverlay.frackles[draw - 1], 1);

        //texture

        fracklesOpacity.value = 100;
    });

    let fracklescount = 0;
    let fracklesIntervall;
    let fracklesTimer = function (index, opacity) {
        fracklescount = 0;
        clearInterval(fracklesIntervall);
        fracklesIntervall = setInterval(() => {
            fracklescount++;
            if (fracklescount == 10) {
                // console.log(index + '/' + opacity);
                emitUpdate('frackles', index, opacity);
                fracklescount = 0;
                clearInterval(fracklesIntervall);
            }
        }, 50);
    };

    fracklesOpacity.addEventListener('input', function () {
        fracklescount = 0;
        let draw = parseInt(frackles.value);
        let max = globalApi.headOverlay.frackles.length;
        let opacity = parseInt(fracklesOpacity.value);

        opacity = opacity / 100;

        if (draw >= max) {
            frackles.value = max;
            draw = max;
            selectable('fracklesprev');
            unselectable('fracklesnext');
        } else if (draw <= 1) {
            frackles.value = 1;
            draw = 1;
            selectable('fracklesnext');
            unselectable('fracklesprev');
        } else if (draw >= 2) {
            frackles.value = draw;
            selectable('fracklesnext');
            selectable('fracklesprev');
        }

        //Kleidung setzten

        fracklesTimer(globalApi.headOverlay.makeup[draw - 1], opacity);

        //texture
    });

    chestHair.addEventListener('input', function () {
        let draw = parseInt(chestHair.value);
        let max = globalApi.headOverlay.chestHair.length;

        // console.log(draw);
        // console.log(max);

        if (draw >= max) {
            chestHair.value = max;
            draw = max;
            selectable('chestHairprev');
            unselectable('chestHairnext');
        } else if (draw <= 1) {
            chestHair.value = 1;
            draw = 1;
            selectable('chestHairnext');
            unselectable('chestHairprev');
        } else if (draw >= 2) {
            chestHair.value = draw;
            selectable('chestHairnext');
            selectable('chestHairprev');
        }

        //Kleidung setzten

        emitUpdate('chestHair', globalApi.headOverlay.chestHair[draw - 1], 1);

        //texture

        chestHairOpacity.value = 100;
    });

    let chestHaircount = 0;
    let chestHairIntervall;
    let chestHairTimer = function (index, opacity) {
        chestHaircount = 0;
        clearInterval(chestHairIntervall);
        chestHairIntervall = setInterval(() => {
            chestHaircount++;
            if (chestHaircount == 10) {
                // console.log(index + '/' + opacity);
                emitUpdate('chestHair', index, opacity);
                chestHaircount = 0;
                clearInterval(chestHairIntervall);
            }
        }, 50);
    };

    chestHairOpacity.addEventListener('input', function () {
        chestHaircount = 0;
        let draw = parseInt(chestHair.value);
        let max = globalApi.headOverlay.chestHair.length;
        let opacity = parseInt(chestHairOpacity.value);

        opacity = opacity / 100;

        if (draw >= max) {
            chestHair.value = max;
            draw = max;
            selectable('chestHairprev');
            unselectable('chestHairnext');
        } else if (draw <= 1) {
            chestHair.value = 1;
            draw = 1;
            selectable('chestHairnext');
            unselectable('chestHairprev');
        } else if (draw >= 2) {
            chestHair.value = draw;
            selectable('chestHairnext');
            selectable('chestHairprev');
        }

        //Kleidung setzten

        chestHairTimer(globalApi.headOverlay.makeup[draw - 1], opacity);

        //texture
    });

    bodyBlemishes.addEventListener('input', function () {
        let draw = parseInt(bodyBlemishes.value);
        let max = globalApi.headOverlay.bodyBlemishes.length;

        // console.log(draw);
        // console.log(max);

        if (draw >= max) {
            bodyBlemishes.value = max;
            draw = max;
            selectable('bodyBlemishesprev');
            unselectable('bodyBlemishesnext');
        } else if (draw <= 1) {
            bodyBlemishes.value = 1;
            draw = 1;
            selectable('bodyBlemishesnext');
            unselectable('bodyBlemishesprev');
        } else if (draw >= 2) {
            bodyBlemishes.value = draw;
            selectable('bodyBlemishesnext');
            selectable('bodyBlemishesprev');
        }

        //Kleidung setzten

        emitUpdate('bodyBlemishes', globalApi.headOverlay.bodyBlemishes[draw - 1], 1);

        //texture

        bodyBlemishesOpacity.value = 100;
    });

    let bodyBlemishescount = 0;
    let bodyBlemishesIntervall;
    let bodyBlemishesTimer = function (index, opacity) {
        bodyBlemishescount = 0;
        clearInterval(bodyBlemishesIntervall);
        bodyBlemishesIntervall = setInterval(() => {
            bodyBlemishescount++;
            if (bodyBlemishescount == 10) {
                // console.log(index + '/' + opacity);
                emitUpdate('bodyBlemishes', index, opacity);
                bodyBlemishescount = 0;
                clearInterval(bodyBlemishesIntervall);
            }
        }, 50);
    };

    bodyBlemishesOpacity.addEventListener('input', function () {
        bodyBlemishescount = 0;
        let draw = parseInt(bodyBlemishes.value);
        let max = globalApi.headOverlay.bodyBlemishes.length;
        let opacity = parseInt(bodyBlemishesOpacity.value);

        opacity = opacity / 100;

        if (draw >= max) {
            bodyBlemishes.value = max;
            draw = max;
            selectable('bodyBlemishesprev');
            unselectable('bodyBlemishesnext');
        } else if (draw <= 1) {
            bodyBlemishes.value = 1;
            draw = 1;
            selectable('bodyBlemishesnext');
            unselectable('bodyBlemishesprev');
        } else if (draw >= 2) {
            bodyBlemishes.value = draw;
            selectable('bodyBlemishesnext');
            selectable('bodyBlemishesprev');
        }

        //Kleidung setzten

        bodyBlemishesTimer(globalApi.headOverlay.makeup[draw - 1], opacity);

        //texture
    });

    addbodyBlemishes.addEventListener('input', function () {
        let draw = parseInt(addbodyBlemishes.value);
        let max = globalApi.headOverlay.addbodyBlemishes.length;

        // console.log(draw);
        // console.log(max);

        if (draw >= max) {
            addbodyBlemishes.value = max;
            draw = max;
            selectable('addbodyBlemishesprev');
            unselectable('addbodyBlemishesnext');
        } else if (draw <= 1) {
            addbodyBlemishes.value = 1;
            draw = 1;
            selectable('addbodyBlemishesnext');
            unselectable('addbodyBlemishesprev');
        } else if (draw >= 2) {
            addbodyBlemishes.value = draw;
            selectable('addbodyBlemishesnext');
            selectable('addbodyBlemishesprev');
        }

        //Kleidung setzten

        emitUpdate('addbodyBlemishes', globalApi.headOverlay.addbodyBlemishes[draw - 1], 1);

        //texture

        addbodyBlemishesOpacity.value = 100;
    });

    let addbodyBlemishescount = 0;
    let addbodyBlemishesIntervall;
    let addbodyBlemishesTimer = function (index, opacity) {
        addbodyBlemishescount = 0;
        clearInterval(addbodyBlemishesIntervall);
        addbodyBlemishesIntervall = setInterval(() => {
            addbodyBlemishescount++;
            if (addbodyBlemishescount == 10) {
                // console.log(index + '/' + opacity);
                emitUpdate('addbodyBlemishes', index, opacity);
                addbodyBlemishescount = 0;
                clearInterval(addbodyBlemishesIntervall);
            }
        }, 50);
    };

    addbodyBlemishesOpacity.addEventListener('input', function () {
        addbodyBlemishescount = 0;
        let draw = parseInt(addbodyBlemishes.value);
        let max = globalApi.headOverlay.addbodyBlemishes.length;
        let opacity = parseInt(addbodyBlemishesOpacity.value);

        opacity = opacity / 100;

        if (draw >= max) {
            addbodyBlemishes.value = max;
            draw = max;
            selectable('addbodyBlemishesprev');
            unselectable('addbodyBlemishesnext');
        } else if (draw <= 1) {
            addbodyBlemishes.value = 1;
            draw = 1;
            selectable('addbodyBlemishesnext');
            unselectable('addbodyBlemishesprev');
        } else if (draw >= 2) {
            addbodyBlemishes.value = draw;
            selectable('addbodyBlemishesnext');
            selectable('addbodyBlemishesprev');
        }

        //Kleidung setzten

        addbodyBlemishesTimer(globalApi.headOverlay.makeup[draw - 1], opacity);

        //texture
    });

    primaryColor.addEventListener('input', function () {
        //api.hairColor.primary[primaryColorValue - 1]
        let primary = parseInt(primaryColor.value);
        let max = globalApi.hairColor.primary.length;

        // console.log(primary);
        // console.log(max);

        if (primary >= max) {
            primaryColor.value = max;
            primary = max;
            selectable('primaryColorprev');
            unselectable('primaryColornext');
            selectable('highlightColorprev');
            unselectable('highlightColornext');
        } else if (primary <= 1) {
            primaryColor.value = 1;
            primary = 1;
            selectable('primaryColornext');
            unselectable('primaryColorprev');
            selectable('highlightColornext');
            unselectable('highlightColorprev');
        } else if (primary >= 2) {
            primaryColor.value = primary;
            selectable('primaryColornext');
            selectable('primaryColorprev');
            selectable('highlightColornext');
            selectable('highlightColorprev');
        }

        highlightColor.value = primary;
        //Kleidung setzten

        emitUpdate('hairColor', globalApi.hairColor.primary[primary - 1], globalApi.hairColor.primary[primary - 1]);

        //texture
    });
    colorHighlight.addEventListener('input', function () {
        //api.hairColor.primary[primaryColorValue - 1]
        let primary = parseInt(primaryColor.value);
        let max = globalApi.hairColor.highlight.length;
        let highlight = parseInt(highlightColor.value);

        // console.log(highlight);
        // console.log(max);

        if (highlight >= max) {
            highlightColor.value = max;
            highlight = max;
            selectable('highlightColorprev');
            unselectable('highlightColornext');
        } else if (highlight <= 1) {
            highlightColor.value = 1;
            highlight = 1;
            selectable('highlightColornext');
            unselectable('highlightColorprev');
        } else if (highlight >= 2) {
            highlightColor.value = highlight;
            selectable('highlightColornext');
            selectable('highlightColorprev');
        }

        highlightColor.value = highlight;
        //Kleidung setzten

        emitUpdate('hairColor', globalApi.hairColor.primary[primary - 1], globalApi.hairColor.highlight[highlight - 1]);
    });

    eyebrowsprimary.addEventListener('input', function () {
        let color = parseInt(eyebrowsprimary.value);

        let max = globalApi.headColor.eyebrowsprimary.length;

        if (color >= max) {
            color = max;
            eyebrowsprimary.value = color;
            eyebrowshighlight.value = color;
            unselectable('eyebrowsprimarynext');
            unselectable('eyebrowshighlightnext');
            selectable('eyebrowsprimaryprev');
            selectable('eyebrowshighlightprev');
        } else if (color <= 1) {
            color = 1;
            eyebrowsprimary.value = color;
            eyebrowshighlight.value = color;
            selectable('eyebrowsprimarynext');
            selectable('eyebrowshighlightnext');
            unselectable('eyebrowsprimaryprev');
            unselectable('eyebrowshighlightprev');
        } else if (color >= 2) {
            eyebrowsprimary.value = color;
            eyebrowshighlight.value = color;
            selectable('eyebrowsprimarynext');
            selectable('eyebrowshighlightnext');
            selectable('eyebrowsprimaryprev');
            selectable('eyebrowshighlightprev');
        }
        let primary = globalApi.headColor.eyebrowsprimary[color - 1];
        let highlight = globalApi.headColor.eyebrowshighlight[color - 1];
        emitUpdate('eyebrowsColor', primary, highlight);
    });

    eyebrowshighlight.addEventListener('input', function () {
        let color = parseInt(eyebrowsprimary.value);
        let highlight = eyebrowshighlight.value;
        let max = globalApi.headColor.eyebrowshighlight.length;

        if (highlight >= max) {
            highlight = max;
            eyebrowshighlight.value = highlight;
            unselectable('eyebrowshighlightnext');
            selectable('eyebrowshighlightprev');
        } else if (highlight <= 1) {
            highlight = 1;
            eyebrowshighlight.value = highlight;
            selectable('eyebrowshighlightnext');
            unselectable('eyebrowshighlightprev');
        } else if (highlight >= 2) {
            eyebrowshighlight.value = highlight;
            selectable('eyebrowshighlightnext');
            selectable('eyebrowshighlightprev');
        }
        let primary = globalApi.headColor.eyebrowsprimary[color - 1];
        emitUpdate('eyebrowsColor', primary, highlight);
    });

    chesthairprimary.addEventListener('input', function () {
        let color = parseInt(chesthairprimary.value);

        let max = globalApi.headColor.chesthairprimary.length;

        if (color >= max) {
            color = max;
            chesthairprimary.value = color;
            chesthairhighlight.value = color;
            unselectable('chesthairprimarynext');
            unselectable('chesthairhighlightnext');
            selectable('chesthairprimaryprev');
            selectable('chesthairhighlightprev');
        } else if (color <= 1) {
            color = 1;
            chesthairprimary.value = color;
            chesthairhighlight.value = color;
            selectable('chesthairprimarynext');
            selectable('chesthairhighlightnext');
            unselectable('chesthairprimaryprev');
            unselectable('chesthairhighlightprev');
        } else if (color >= 2) {
            chesthairprimary.value = color;
            chesthairhighlight.value = color;
            selectable('chesthairprimarynext');
            selectable('chesthairhighlightnext');
            selectable('chesthairprimaryprev');
            selectable('chesthairhighlightprev');
        }
        let primary = globalApi.headColor.chesthairprimary[color - 1];
        let highlight = globalApi.headColor.chesthairhighlight[color - 1];
        emitUpdate('chesthairColor', primary, highlight);
    });

    chesthairhighlight.addEventListener('input', function () {
        let color = parseInt(chesthairprimary.value);
        let highlight = chesthairhighlight.value;
        let max = globalApi.headColor.chesthairhighlight.length;

        if (highlight >= max) {
            highlight = max;
            chesthairhighlight.value = highlight;
            unselectable('chesthairhighlightnext');
            selectable('chesthairhighlightprev');
        } else if (highlight <= 1) {
            highlight = 1;
            chesthairhighlight.value = highlight;
            selectable('chesthairhighlightnext');
            unselectable('chesthairhighlightprev');
        } else if (highlight >= 2) {
            chesthairhighlight.value = highlight;
            selectable('chesthairhighlightnext');
            selectable('chesthairhighlightprev');
        }
        let primary = globalApi.headColor.chesthairprimary[color - 1];
        emitUpdate('chesthairColor', primary, highlight);
    });
    blushprimary.addEventListener('input', function () {
        let color = parseInt(blushprimary.value);

        let max = globalApi.headColor.blushprimary.length;

        if (color >= max) {
            color = max;
            blushprimary.value = color;
            blushhighlight.value = color;
            unselectable('blushprimarynext');
            unselectable('blushhighlightnext');
            selectable('blushprimaryprev');
            selectable('blushhighlightprev');
        } else if (color <= 1) {
            color = 1;
            blushprimary.value = color;
            blushhighlight.value = color;
            selectable('blushprimarynext');
            selectable('blushhighlightnext');
            unselectable('blushprimaryprev');
            unselectable('blushhighlightprev');
        } else if (color >= 2) {
            blushprimary.value = color;
            blushhighlight.value = color;
            selectable('blushprimarynext');
            selectable('blushhighlightnext');
            selectable('blushprimaryprev');
            selectable('blushhighlightprev');
        }
        let primary = globalApi.headColor.blushprimary[color - 1];
        let highlight = globalApi.headColor.blushhighlight[color - 1];
        emitUpdate('blushColor', primary, highlight);
    });

    blushhighlight.addEventListener('input', function () {
        let color = parseInt(blushprimary.value);
        let highlight = blushhighlight.value;
        let max = globalApi.headColor.blushhighlight.length;

        if (highlight >= max) {
            highlight = max;
            blushhighlight.value = highlight;
            unselectable('blushhighlightnext');
            selectable('blushhighlightprev');
        } else if (highlight <= 1) {
            highlight = 1;
            blushhighlight.value = highlight;
            selectable('blushhighlightnext');
            unselectable('blushhighlightprev');
        } else if (highlight >= 2) {
            blushhighlight.value = highlight;
            selectable('blushhighlightnext');
            selectable('blushhighlightprev');
        }
        let primary = globalApi.headColor.blushprimary[color - 1];
        emitUpdate('blushColor', primary, highlight);
    });

    beardprimary.addEventListener('input', function () {
        let color = parseInt(beardprimary.value);

        let max = globalApi.headColor.beardprimary.length;

        if (color >= max) {
            color = max;
            beardprimary.value = color;
            beardhighlight.value = color;
            unselectable('beardprimarynext');
            unselectable('beardhighlightnext');
            selectable('beardprimaryprev');
            selectable('beardhighlightprev');
        } else if (color <= 1) {
            color = 1;
            beardprimary.value = color;
            beardhighlight.value = color;
            selectable('beardprimarynext');
            selectable('beardhighlightnext');
            unselectable('beardprimaryprev');
            unselectable('beardhighlightprev');
        } else if (color >= 2) {
            beardprimary.value = color;
            beardhighlight.value = color;
            selectable('beardprimarynext');
            selectable('beardhighlightnext');
            selectable('beardprimaryprev');
            selectable('beardhighlightprev');
        }
        let primary = globalApi.headColor.beardprimary[color - 1];
        let highlight = globalApi.headColor.beardhighlight[color - 1];
        emitUpdate('beardColor', primary, highlight);
    });

    beardhighlight.addEventListener('input', function () {
        let color = parseInt(beardprimary.value);
        let highlight = beardhighlight.value;
        let max = globalApi.headColor.beardhighlight.length;

        if (highlight >= max) {
            highlight = max;
            beardhighlight.value = highlight;
            unselectable('beardhighlightnext');
            selectable('beardhighlightprev');
        } else if (highlight <= 1) {
            highlight = 1;
            beardhighlight.value = highlight;
            selectable('beardhighlightnext');
            unselectable('beardhighlightprev');
        } else if (highlight >= 2) {
            beardhighlight.value = highlight;
            selectable('beardhighlightnext');
            selectable('beardhighlightprev');
        }
        let primary = globalApi.headColor.beardprimary[color - 1];
        emitUpdate('beardColor', primary, highlight);
    });

    lipstickprimary.addEventListener('input', function () {
        let color = parseInt(lipstickprimary.value);

        let max = globalApi.headColor.lipstickprimary.length;

        if (color >= max) {
            color = max;
            lipstickprimary.value = color;
            lipstickhighlight.value = color;
            unselectable('lipstickprimarynext');
            unselectable('lipstickhighlightnext');
            selectable('lipstickprimaryprev');
            selectable('lipstickhighlightprev');
        } else if (color <= 1) {
            color = 1;
            lipstickprimary.value = color;
            lipstickhighlight.value = color;
            selectable('lipstickprimarynext');
            selectable('lipstickhighlightnext');
            unselectable('lipstickprimaryprev');
            unselectable('lipstickhighlightprev');
        } else if (color >= 2) {
            lipstickprimary.value = color;
            lipstickhighlight.value = color;
            selectable('lipstickprimarynext');
            selectable('lipstickhighlightnext');
            selectable('lipstickprimaryprev');
            selectable('lipstickhighlightprev');
        }
        let primary = globalApi.headColor.lipstickprimary[color - 1];
        let highlight = globalApi.headColor.lipstickhighlight[color - 1];
        emitUpdate('lipstickColor', primary, highlight);
    });

    lipstickhighlight.addEventListener('input', function () {
        let color = parseInt(lipstickprimary.value);
        let highlight = lipstickhighlight.value;
        let max = globalApi.headColor.lipstickhighlight.length;

        if (highlight >= max) {
            highlight = max;
            lipstickhighlight.value = highlight;
            unselectable('lipstickhighlightnext');
            selectable('lipstickhighlightprev');
        } else if (highlight <= 1) {
            highlight = 1;
            lipstickhighlight.value = highlight;
            selectable('lipstickhighlightnext');
            unselectable('lipstickhighlightprev');
        } else if (highlight >= 2) {
            lipstickhighlight.value = highlight;
            selectable('lipstickhighlightnext');
            selectable('lipstickhighlightprev');
        }
        let primary = globalApi.headColor.lipstickprimary[color - 1];
        emitUpdate('lipstickColor', primary, highlight);
    });

    shapefather.addEventListener('input', function () {
        let shapefatherValue = parseInt(shapefather.value);
        let shapemotherValue = globalApi.pedHeadBlendData.shapemother[parseInt(shapemother.value) - 1];
        let shapemixValue = parseInt(shapemix.value) / 100;
        let skinfatherValue = globalApi.pedHeadBlendData.skinfather[parseInt(skinfather.value) - 1];
        let skinmotherValue = globalApi.pedHeadBlendData.skinmother[parseInt(skinmother.value) - 1];
        let skinmixValue = parseInt(skinmix.value) / 100;

        let max = globalApi.pedHeadBlendData.shapefather.length;

        if (shapefatherValue >= max) {
            shapefatherValue = max;
            unselectable('shapefathernext');
            selectable('shapefatherprev');
        } else if (shapefatherValue > 2) {
            selectable('shapefathernext');
            selectable('shapefatherprev');
        } else if (shapefatherValue <= 1) {
            shapefatherValue = 1;
            selectable('shapefathernext');
            unselectable('shapefatherprev');
        }
        shapefather.value = shapefatherValue;

        shapefatherValue = globalApi.pedHeadBlendData.shapefather[shapefatherValue - 1];

        skinUpdate(shapefatherValue, shapemotherValue, shapemixValue, skinfatherValue, skinmotherValue, skinmixValue);
    });

    shapemother.addEventListener('input', function () {
        let shapefatherValue = globalApi.pedHeadBlendData.shapefather[parseInt(shapefather.value - 1)];
        let shapemotherValue = parseInt(shapemother.value);
        let shapemixValue = parseInt(shapemix.value) / 100;
        let skinfatherValue = globalApi.pedHeadBlendData.skinfather[parseInt(skinfather.value) - 1];
        let skinmotherValue = globalApi.pedHeadBlendData.skinmother[parseInt(skinmother.value) - 1];
        let skinmixValue = parseInt(skinmix.value) / 100;

        let max = globalApi.pedHeadBlendData.shapemother.length;

        if (shapemotherValue >= max) {
            shapemotherValue = max;
            unselectable('shapemothernext');
            selectable('shapemotherprev');
        } else if (shapemotherValue > 2) {
            selectable('shapemothernext');
            selectable('shapemotherprev');
        } else if (shapemotherValue <= 1) {
            shapemotherValue = 1;
            selectable('shapemothernext');
            unselectable('shapemotherprev');
        }
        shapemother.value = shapemotherValue;

        shapemotherValue = globalApi.pedHeadBlendData.shapemother[shapemotherValue - 1];

        skinUpdate(shapefatherValue, shapemotherValue, shapemixValue, skinfatherValue, skinmotherValue, skinmixValue);
    });

    let shapemixcount = 0;
    let shapemixIntervall;
    let shapemixTimer = function () {
        shapemixcount = 0;
        clearInterval(shapemixIntervall);
        shapemixIntervall = setInterval(() => {
            shapemixcount++;
            if (shapemixcount == 10) {
                let shapefatherValue = globalApi.pedHeadBlendData.shapefather[parseInt(shapefather.value - 1)];
                let shapemotherValue = globalApi.pedHeadBlendData.shapefather[parseInt(shapemother.value) - 1];
                let shapemixValue = parseInt(shapemix.value) / 100;
                let skinfatherValue = globalApi.pedHeadBlendData.skinfather[parseInt(skinfather.value) - 1];
                let skinmotherValue = globalApi.pedHeadBlendData.skinmother[parseInt(skinmother.value) - 1];
                let skinmixValue = parseInt(skinmix.value) / 100;
                skinUpdate(shapefatherValue, shapemotherValue, shapemixValue, skinfatherValue, skinmotherValue, skinmixValue);
                shapemixcount = 0;
                clearInterval(shapemixIntervall);
            }
        }, 50);
    };
    shapemix.addEventListener('input', function () {
        shapemixTimer();
    });

    skinfather.addEventListener('input', function () {
        let shapefatherValue = globalApi.pedHeadBlendData.shapefather[parseInt(shapefather.value - 1)];
        let shapemotherValue = globalApi.pedHeadBlendData.shapefather[parseInt(shapemother.value) - 1];
        let shapemixValue = parseInt(shapemix.value) / 100;
        let skinfatherValue = parseInt(skinfather.value);
        let skinmotherValue = globalApi.pedHeadBlendData.skinmother[parseInt(skinmother.value) - 1];
        let skinmixValue = parseInt(skinmix.value) / 100;

        let max = globalApi.pedHeadBlendData.skinfather.length;

        if (skinfatherValue >= max) {
            skinfatherValue = max;
            unselectable('skinfathernext');
            selectable('skinfatherprev');
        } else if (skinfatherValue > 2) {
            selectable('skinfathernext');
            selectable('skinfatherprev');
        } else if (skinfatherValue <= 1) {
            skinfatherValue = 1;
            selectable('skinfathernext');
            unselectable('skinfatherprev');
        }
        skinfather.value = skinfatherValue;

        skinfatherValue = globalApi.pedHeadBlendData.skinfather[skinfatherValue - 1];

        skinUpdate(shapefatherValue, shapemotherValue, shapemixValue, skinfatherValue, skinmotherValue, skinmixValue);
    });

    skinmother.addEventListener('input', function () {
        let shapefatherValue = globalApi.pedHeadBlendData.shapefather[parseInt(shapefather.value - 1)];
        let shapemotherValue = globalApi.pedHeadBlendData.shapemother[parseInt(shapemother.value) - 1];
        let shapemixValue = parseInt(shapemix.value) / 100;
        let skinfatherValue = globalApi.pedHeadBlendData.skinfather[parseInt(skinfather.value) - 1];
        let skinmotherValue = parseInt(skinmother.value);
        let skinmixValue = parseInt(skinmix.value) / 100;

        let max = globalApi.pedHeadBlendData.skinmother.length;

        if (skinmotherValue >= max) {
            skinmotherValue = max;
            unselectable('skinmothernext');
            selectable('skinmotherprev');
        } else if (skinmotherValue > 2) {
            selectable('skinmothernext');
            selectable('skinmotherprev');
        } else if (skinmotherValue <= 1) {
            skinmotherValue = 1;
            selectable('skinmothernext');
            unselectable('skinmotherprev');
        }
        skinmother.value = skinmotherValue;

        skinmotherValue = globalApi.pedHeadBlendData.skinmother[skinmotherValue - 1];

        skinUpdate(shapefatherValue, shapemotherValue, shapemixValue, skinfatherValue, skinmotherValue, skinmixValue);
    });

    let skinmixcount = 0;
    let skinmixIntervall;
    let skinmixTimer = function () {
        skinmixcount = 0;
        clearInterval(skinmixIntervall);
        skinmixIntervall = setInterval(() => {
            skinmixcount++;
            if (skinmixcount == 10) {
                let shapefatherValue = globalApi.pedHeadBlendData.shapefather[parseInt(shapefather.value - 1)];
                let shapemotherValue = globalApi.pedHeadBlendData.shapemother[parseInt(shapemother.value) - 1];
                let shapemixValue = parseInt(shapemix.value) / 100;
                let skinfatherValue = globalApi.pedHeadBlendData.skinfather[parseInt(skinfather.value) - 1];
                let skinmotherValue = globalApi.pedHeadBlendData.skinmother[parseInt(skinmother.value) - 1];
                let skinmixValue = parseInt(skinmix.value) / 100;
                skinUpdate(shapefatherValue, shapemotherValue, shapemixValue, skinfatherValue, skinmotherValue, skinmixValue);
                shapemixcount = 0;
                clearInterval(shapemixIntervall);
            }
        }, 50);
    };
    skinmix.addEventListener('input', function () {
        skinmixTimer();
    });

    let nosewidthcount = 0;
    let nosewidthIntervall;
    let nosewidthTimer = function () {
        nosewidthcount = 0;
        clearInterval(nosewidthIntervall);
        nosewidthIntervall = setInterval(() => {
            nosewidthcount++;
            if (nosewidthcount == 10) {
                let float = (parseInt(nosewidth.value) - 100) / 100;
                emitUpdate('nosewidth', float);
            }
        }, 50);
    };
    nosewidth.addEventListener('input', function () {
        nosewidthTimer();
    });
    let noseheighcount = 0;
    let noseheighIntervall;
    let noseheighTimer = function () {
        noseheighcount = 0;
        clearInterval(noseheighIntervall);
        noseheighIntervall = setInterval(() => {
            noseheighcount++;
            if (noseheighcount == 10) {
                let float = (parseInt(noseheigh.value) - 100) / 100;
                emitUpdate('noseheigh', float);
            }
        }, 50);
    };
    noseheigh.addEventListener('input', function () {
        noseheighTimer();
    });

    let noselengthcount = 0;
    let noselengthIntervall;
    let noselengthTimer = function () {
        noselengthcount = 0;
        clearInterval(noselengthIntervall);
        noselengthIntervall = setInterval(() => {
            noselengthcount++;
            if (noselengthcount == 10) {
                let float = (parseInt(noselength.value) - 100) / 100;
                emitUpdate('noselength', float);
            }
        }, 50);
    };
    noselength.addEventListener('input', function () {
        noselengthTimer();
    });

    let nosebackcount = 0;
    let nosebackIntervall;
    let nosebackTimer = function () {
        nosebackcount = 0;
        clearInterval(nosebackIntervall);
        nosebackIntervall = setInterval(() => {
            nosebackcount++;
            if (nosebackcount == 10) {
                let float = (parseInt(noseback.value) - 100) / 100;
                emitUpdate('noseback', float);
            }
        }, 50);
    };
    noseback.addEventListener('input', function () {
        nosebackTimer();
    });

    let nosetipcount = 0;
    let nosetipIntervall;
    let nosetipTimer = function () {
        nosetipcount = 0;
        clearInterval(nosetipIntervall);
        nosetipIntervall = setInterval(() => {
            nosetipcount++;
            if (nosetipcount == 10) {
                let float = (parseInt(nosetip.value) - 100) / 100;
                emitUpdate('nosetip', float);
            }
        }, 50);
    };
    nosetip.addEventListener('input', function () {
        nosetipTimer();
    });

    let nosebridgecount = 0;
    let nosebridgeIntervall;
    let nosebridgeTimer = function () {
        nosebridgecount = 0;
        clearInterval(nosebridgeIntervall);
        nosebridgeIntervall = setInterval(() => {
            nosebridgecount++;
            if (nosebridgecount == 10) {
                let float = (parseInt(nosebridge.value) - 100) / 100;
                emitUpdate('nosebridge', float);
            }
        }, 50);
    };
    nosebridge.addEventListener('input', function () {
        nosebridgeTimer();
    });

    let browheightcount = 0;
    let browheightIntervall;
    let browheightTimer = function () {
        browheightcount = 0;
        clearInterval(browheightIntervall);
        browheightIntervall = setInterval(() => {
            browheightcount++;
            if (browheightcount == 10) {
                let float = (parseInt(browheight.value) - 100) / 100;
                emitUpdate('browheight', float);
            }
        }, 50);
    };
    browheight.addEventListener('input', function () {
        browheightTimer();
    });

    let browwidthcount = 0;
    let browwidthIntervall;
    let browwidthTimer = function () {
        browwidthcount = 0;
        clearInterval(browwidthIntervall);
        browwidthIntervall = setInterval(() => {
            browwidthcount++;
            if (browwidthcount == 10) {
                let float = (parseInt(browwidth.value) - 100) / 100;
                emitUpdate('browwidth', float);
            }
        }, 50);
    };
    browwidth.addEventListener('input', function () {
        browheightTimer();
    });

    let cheekbonesheightcount = 0;
    let cheekbonesheightIntervall;
    let cheekbonesheightTimer = function () {
        cheekbonesheightcount = 0;
        clearInterval(cheekbonesheightIntervall);
        cheekbonesheightIntervall = setInterval(() => {
            cheekbonesheightcount++;
            if (cheekbonesheightcount == 10) {
                let float = (parseInt(cheekbonesheight.value) - 100) / 100;
                emitUpdate('cheekbonesheight', float);
            }
        }, 50);
    };
    cheekbonesheight.addEventListener('input', function () {
        cheekbonesheightTimer();
    });

    let cheekboneswidthcount = 0;
    let cheekboneswidthIntervall;
    let cheekboneswidthTimer = function () {
        cheekboneswidthcount = 0;
        clearInterval(cheekboneswidthIntervall);
        cheekboneswidthIntervall = setInterval(() => {
            cheekboneswidthcount++;
            if (cheekboneswidthcount == 10) {
                let float = (parseInt(cheekboneswidth.value) - 100) / 100;
                emitUpdate('cheekboneswidth', float);
            }
        }, 50);
    };
    cheekboneswidth.addEventListener('input', function () {
        cheekbonesheightTimer();
    });

    let cheekwidthcount = 0;
    let cheekwidthIntervall;
    let cheekwidthTimer = function () {
        cheekwidthcount = 0;
        clearInterval(cheekwidthIntervall);
        cheekwidthIntervall = setInterval(() => {
            cheekwidthcount++;
            if (cheekwidthcount == 10) {
                let float = (parseInt(cheekwidth.value) - 100) / 100;
                emitUpdate('cheekwidth', float);
            }
        }, 50);
    };
    cheekwidth.addEventListener('input', function () {
        cheekwidthTimer();
    });

    let eyelidcount = 0;
    let eyelidIntervall;
    let eyelidTimer = function () {
        eyelidcount = 0;
        clearInterval(eyelidIntervall);
        eyelidIntervall = setInterval(() => {
            eyelidcount++;
            if (eyelidcount == 10) {
                let float = (parseInt(eyelid.value) - 100) / 100;
                emitUpdate('eyelid', float);
            }
        }, 50);
    };
    eyelid.addEventListener('input', function () {
        eyelidTimer();
    });

    let lipscount = 0;
    let lipsIntervall;
    let lipsTimer = function () {
        lipscount = 0;
        clearInterval(lipsIntervall);
        lipsIntervall = setInterval(() => {
            lipscount++;
            if (lipscount == 10) {
                let float = (parseInt(lips.value) - 100) / 100;
                emitUpdate('lips', float);
            }
        }, 50);
    };
    lips.addEventListener('input', function () {
        lipsTimer();
    });

    let jawwidthcount = 0;
    let jawwidthIntervall;
    let jawwidthTimer = function () {
        jawwidthcount = 0;
        clearInterval(jawwidthIntervall);
        jawwidthIntervall = setInterval(() => {
            jawwidthcount++;
            if (jawwidthcount == 10) {
                let float = (parseInt(jawwidth.value) - 100) / 100;
                emitUpdate('jawwidth', float);
            }
        }, 50);
    };
    jawwidth.addEventListener('input', function () {
        jawwidthTimer();
    });

    let jawheightcount = 0;
    let jawheightIntervall;
    let jawheightTimer = function () {
        jawheightcount = 0;
        clearInterval(jawheightIntervall);
        jawheightIntervall = setInterval(() => {
            jawheightcount++;
            if (jawheightcount == 10) {
                let float = (parseInt(jawheight.value) - 100) / 100;
                emitUpdate('jawheight', float);
            }
        }, 50);
    };
    jawheight.addEventListener('input', function () {
        jawheightTimer();
    });

    //chinlength

    let chinlengthcount = 0;
    let chinlengthIntervall;
    let chinlengthTimer = function () {
        chinlengthcount = 0;
        clearInterval(chinlengthIntervall);
        chinlengthIntervall = setInterval(() => {
            chinlengthcount++;
            if (chinlengthcount == 10) {
                let float = (parseInt(chinlength.value) - 100) / 100;
                emitUpdate('chinlength', float);
            }
        }, 50);
    };
    chinlength.addEventListener('input', function () {
        chinlengthTimer();
    });

    let chinposcount = 0;
    let chinposIntervall;
    let chinposTimer = function () {
        chinposcount = 0;
        clearInterval(chinposIntervall);
        chinposIntervall = setInterval(() => {
            chinposcount++;
            if (chinposcount == 10) {
                let float = (parseInt(chinpos.value) - 100) / 100;
                emitUpdate('chinpos', float);
            }
        }, 50);
    };
    chinpos.addEventListener('input', function () {
        chinposTimer();
    });

    let chinwidthcount = 0;
    let chinwidthIntervall;
    let chinwidthTimer = function () {
        chinwidthcount = 0;
        clearInterval(chinwidthIntervall);
        chinwidthIntervall = setInterval(() => {
            chinwidthcount++;
            if (chinwidthcount == 10) {
                let float = (parseInt(chinwidth.value) - 100) / 100;
                emitUpdate('chinwidth', float);
            }
        }, 50);
    };
    chinwidth.addEventListener('input', function () {
        chinwidthTimer();
    });

    let chinshapecount = 0;
    let chinshapeIntervall;
    let chinshapeTimer = function () {
        chinshapecount = 0;
        clearInterval(chinshapeIntervall);
        chinshapeIntervall = setInterval(() => {
            chinshapecount++;
            if (chinshapecount == 10) {
                let float = (parseInt(chinshape.value) - 100) / 100;
                emitUpdate('chinshape', float);
            }
        }, 50);
    };
    chinshape.addEventListener('input', function () {
        chinshapeTimer();
    });

    let neckwidthcount = 0;
    let neckwidthIntervall;
    let neckwidthTimer = function () {
        neckwidthcount = 0;
        clearInterval(neckwidthIntervall);
        neckwidthIntervall = setInterval(() => {
            neckwidthcount++;
            if (neckwidthcount == 10) {
                let float = (parseInt(neckwidth.value) - 100) / 100;
                emitUpdate('neckwidth', float);
            }
        }, 50);
    };
    neckwidth.addEventListener('input', function () {
        neckwidthTimer();
    });

    hatsdraw.addEventListener('input', function () {
        let draw = parseInt(hatsdraw.value);
        let max = globalApi.propIndex.hats.length;

        // console.log(draw);
        // console.log(max);

        if (draw >= max) {
            hatsdraw.value = max;
            draw = max;
            selectable('hatsdrawprev');
            unselectable('hatsdrawnext');
        } else if (draw <= 1) {
            hatsdraw.value = 1;
            draw = 1;
            selectable('hatsdrawnext');
            unselectable('hatsdrawprev');
        } else if (draw >= 2) {
            hatsdraw.value = draw;
            selectable('hatsdrawnext');
            selectable('hatsdrawprev');
        }

        //Kleidung setzten

        emitUpdate('hats', globalApi.propIndex.hats[draw - 1].draw, globalApi.propIndex.hats[draw - 1].texture[0]);

        //texture

        hatstexture.value = 1;

        unselectable('hatstextureprev');

        if (globalApi.propIndex.hats[draw - 1].texture.length == 1) {
            unselectable('hatstexturenext');
        } else {
            selectable('hatstexturenext');
        }
    });

    hatstexture.addEventListener('input', function () {
        hatstexture.value = parseInt(hatstexture.value);
        let draw = hatsdraw.value;
        let max = globalApi.propIndex.hats[draw - 1].texture.length;
        let texture = hatstexture.value;

        if (texture >= max) {
            hatstexture.value = max;
            draw = max;
            unselectable('hatstexturenext');
            selectable('hatstextureprev');
        } else if (texture <= 1) {
            hatstexture.value = 1;
            draw = 1;
            unselectable('hatstextureprev');
            selectable('hatstexturenext');
        } else if (texture <= 2) {
            selectable('hatstexturenext');
            selectable('hatstextureprev');
        }

        emitUpdate('hats', globalApi.propIndex.hats[draw - 1].draw, globalApi.propIndex.hats[draw - 1].texture[texture - 1]);
    });

    glassesdraw.addEventListener('input', function () {
        let draw = parseInt(glassesdraw.value);
        let max = globalApi.propIndex.glasses.length;

        // console.log(draw);
        // console.log(max);

        if (draw >= max) {
            glassesdraw.value = max;
            draw = max;
            selectable('glassesdrawprev');
            unselectable('glassesdrawnext');
        } else if (draw <= 1) {
            glassesdraw.value = 1;
            draw = 1;
            selectable('glassesdrawnext');
            unselectable('glassesdrawprev');
        } else if (draw >= 2) {
            glassesdraw.value = draw;
            selectable('glassesdrawnext');
            selectable('glassesdrawprev');
        }

        //Kleidung setzten

        emitUpdate('glasses', globalApi.propIndex.glasses[draw - 1].draw, globalApi.propIndex.glasses[draw - 1].texture[0]);

        //texture

        glassestexture.value = 1;

        unselectable('glassestextureprev');

        if (globalApi.propIndex.glasses[draw - 1].texture.length == 1) {
            unselectable('glassestexturenext');
        } else {
            selectable('glassestexturenext');
        }
    });

    glassestexture.addEventListener('input', function () {
        glassestexture.value = parseInt(glassestexture.value);
        let draw = glassesdraw.value;
        let max = globalApi.propIndex.glasses[draw - 1].texture.length;
        let texture = glassestexture.value;

        if (texture >= max) {
            glassestexture.value = max;
            draw = max;
            unselectable('glassestexturenext');
            selectable('glassestextureprev');
        } else if (texture <= 1) {
            glassestexture.value = 1;
            draw = 1;
            unselectable('glassestextureprev');
            selectable('glassestexturenext');
        } else if (texture <= 2) {
            selectable('glassestexturenext');
            selectable('glassestextureprev');
        }

        emitUpdate('glasses', globalApi.propIndex.glasses[draw - 1].draw, globalApi.propIndex.glasses[draw - 1].texture[texture - 1]);
    });

    earsdraw.addEventListener('input', function () {
        let draw = parseInt(earsdraw.value);
        let max = globalApi.propIndex.ears.length;

        console.log(draw);
        // console.log(max);

        if (draw >= max) {
            earsdraw.value = max;
            draw = max;
            selectable('earsdrawprev');
            unselectable('earsdrawnext');
        } else if (draw <= 1) {
            earsdraw.value = 1;
            draw = 1;
            selectable('earsdrawnext');
            unselectable('earsdrawprev');
        } else if (draw >= 2) {
            earsdraw.value = draw;
            selectable('earsdrawnext');
            selectable('earsdrawprev');
        }

        //Kleidung setzten

        emitUpdate('ears', globalApi.propIndex.ears[draw - 1].draw, globalApi.propIndex.ears[draw - 1].texture[0]);

        //texture

        earstexture.value = 1;

        unselectable('earstextureprev');

        if (globalApi.propIndex.ears[draw - 1].texture.length == 1) {
            unselectable('earstexturenext');
        } else {
            selectable('earstexturenext');
        }
    });

    earstexture.addEventListener('input', function () {
        earstexture.value = parseInt(earstexture.value);
        let draw = earsdraw.value;
        let max = globalApi.propIndex.ears[draw - 1].texture.length;
        let texture = earstexture.value;

        if (texture >= max) {
            earstexture.value = max;
            draw = max;
            unselectable('earstexturenext');
            selectable('earstextureprev');
        } else if (texture <= 1) {
            earstexture.value = 1;
            draw = 1;
            unselectable('earstextureprev');
            selectable('earstexturenext');
        } else if (texture <= 2) {
            selectable('earstexturenext');
            selectable('earstextureprev');
        }

        emitUpdate('ears', globalApi.propIndex.ears[draw - 1].draw, globalApi.propIndex.ears[draw - 1].texture[texture - 1]);
    });

    watchesdraw.addEventListener('input', function () {
        let draw = parseInt(watchesdraw.value);
        let max = globalApi.propIndex.watches.length;

        // console.log(draw);
        // console.log(max);

        if (draw >= max) {
            watchesdraw.value = max;
            draw = max;
            selectable('watchesdrawprev');
            unselectable('watchesdrawnext');
        } else if (draw <= 1) {
            watchesdraw.value = 1;
            draw = 1;
            selectable('watchesdrawnext');
            unselectable('watchesdrawprev');
        } else if (draw >= 2) {
            watchesdraw.value = draw;
            selectable('watchesdrawnext');
            selectable('watchesdrawprev');
        }

        //Kleidung setzten

        emitUpdate('watches', globalApi.propIndex.watches[draw - 1].draw, globalApi.propIndex.watches[draw - 1].texture[0]);

        //texture

        watchestexture.value = 1;

        unselectable('watchestextureprev');

        if (globalApi.propIndex.watches[draw - 1].texture.length == 1) {
            unselectable('watchestexturenext');
        } else {
            selectable('watchestexturenext');
        }
    });

    watchestexture.addEventListener('input', function () {
        watchestexture.value = parseInt(watchestexture.value);
        let draw = watchesdraw.value;
        let max = globalApi.propIndex.watches[draw - 1].texture.length;
        let texture = watchestexture.value;

        if (texture >= max) {
            watchestexture.value = max;
            draw = max;
            unselectable('watchestexturenext');
            selectable('watchestextureprev');
        } else if (texture <= 1) {
            watchestexture.value = 1;
            draw = 1;
            unselectable('watchestextureprev');
            selectable('watchestexturenext');
        } else if (texture <= 2) {
            selectable('watchestexturenext');
            selectable('watchestextureprev');
        }

        emitUpdate('watches', globalApi.propIndex.watches[draw - 1].draw, globalApi.propIndex.watches[draw - 1].texture[texture - 1]);
    });

    braceletsdraw.addEventListener('input', function () {
        let draw = parseInt(braceletsdraw.value);
        let max = globalApi.propIndex.bracelets.length;

        // console.log(draw);
        // console.log(max);

        if (draw >= max) {
            braceletsdraw.value = max;
            draw = max;
            selectable('braceletsdrawprev');
            unselectable('braceletsdrawnext');
        } else if (draw <= 1) {
            braceletsdraw.value = 1;
            draw = 1;
            selectable('braceletsdrawnext');
            unselectable('braceletsdrawprev');
        } else if (draw >= 2) {
            braceletsdraw.value = draw;
            selectable('braceletsdrawnext');
            selectable('braceletsdrawprev');
        }

        //Kleidung setzten

        emitUpdate('bracelets', globalApi.propIndex.bracelets[draw - 1].draw, globalApi.propIndex.bracelets[draw - 1].texture[0]);

        //texture

        braceletstexture.value = 1;

        unselectable('braceletstextureprev');

        if (globalApi.propIndex.bracelets[draw - 1].texture.length == 1) {
            unselectable('braceletstexturenext');
        } else {
            selectable('braceletstexturenext');
        }
    });

    braceletstexture.addEventListener('input', function () {
        braceletstexture.value = parseInt(braceletstexture.value);
        let draw = braceletsdraw.value;
        let max = globalApi.propIndex.bracelets[draw - 1].texture.length;
        let texture = braceletstexture.value;

        if (texture >= max) {
            braceletstexture.value = max;
            draw = max;
            unselectable('braceletstexturenext');
            selectable('braceletstextureprev');
        } else if (texture <= 1) {
            braceletstexture.value = 1;
            draw = 1;
            unselectable('braceletstextureprev');
            selectable('braceletstexturenext');
        } else if (texture <= 2) {
            selectable('braceletstexturenext');
            selectable('braceletstextureprev');
        }

        emitUpdate('bracelets', globalApi.propIndex.bracelets[draw - 1].draw, globalApi.propIndex.bracelets[draw - 1].texture[texture - 1]);
    });
});

const setApi = function (sex) {
    if (sex == 'male') {
        return apiM;
    } else if (sex == 'female') {
        return apiF;
    } else {
        return 'err';
    }
};

const maskdrawprev = function () {
    let api = setApi(gender);

    let drawValue = parseInt(maskDraw.value);

    if (drawValue >= 2) {
        drawValue--;

        maskDraw.value = drawValue;

        let draw = api.pedComponent.mask[drawValue - 1].draw;
        let texture = api.pedComponent.mask[drawValue - 1].texture[0];

        emitUpdate('mask', draw, texture);

        // Texture 1 setzten
        maskTexture.value = 1;

        //button setzten

        selectable('maskdrawnext');

        if (api.pedComponent.mask[drawValue - 1].texture.length == 1) {
            unselectable('masktextureprev');
            unselectable('masktexturenext');
        } else {
            unselectable('masktextureprev');
            selectable('masktexturenext');
        }

        if (drawValue <= 1) {
            unselectable('maskdrawprev');
        }
    } else if (drawValue <= 1) {
        drawValue = 1;

        maskDraw.value = drawValue;

        unselectable('maskdrawprev');
    }
};

const maskdrawnext = function () {
    let api = setApi(gender);

    let drawValue = parseInt(maskDraw.value);

    let max = api.pedComponent.mask.length;

    if (drawValue <= max) {
        drawValue++;

        maskDraw.value = drawValue;

        let draw = api.pedComponent.mask[drawValue - 1].draw;
        let texture = api.pedComponent.mask[drawValue - 1].texture[0];

        emitUpdate('mask', draw, texture);

        // Texture "1" setzten
        maskTexture.value = 1;

        //button setzten

        selectable('maskdrawprev');

        if (api.pedComponent.mask[drawValue - 1].texture.length == 1) {
            unselectable('masktextureprev');
            unselectable('masktexturenext');
        } else {
            selectable('masktexturenext');
            unselectable('masktextureprev');
        }

        if (drawValue >= max) {
            unselectable('maskdrawnext');
        }
    } else if (drawValue >= max) {
        drawValue = max;

        maskDraw.value = drawValue;

        unselectable('maskdrawnext');
    }
};

const masktexturenext = function () {
    let api = setApi(gender);

    let drawValue = parseInt(maskDraw.value);

    let textureValue = parseInt(maskTexture.value);

    let max = api.pedComponent.mask[drawValue - 1].texture.length;

    if (textureValue < max) {
        textureValue++;

        maskTexture.value = textureValue;

        let draw = api.pedComponent.mask[drawValue - 1].draw;
        let texture = api.pedComponent.mask[drawValue - 1].texture[textureValue - 1];

        emitUpdate('mask', draw, texture);

        // Buttons

        if (textureValue == max) {
            unselectable('masktexturenext');
            selectable('masktextureprev');
        } else {
            selectable('masktextureprev');
        }
    } else if (textureValue >= max) {
        unselectable('masktexturenext');

        let draw = api.pedComponent.mask[drawValue - 1].draw;
        let texture = api.pedComponent.mask[drawValue - 1].texture[textureValue - 1];

        emitUpdate('mask', draw, texture);
    }
};

const masktextureprev = function () {
    let api = setApi(gender);

    let drawValue = parseInt(maskDraw.value);

    let textureValue = parseInt(maskTexture.value);

    let max = api.pedComponent.mask[drawValue - 1].texture.length;

    if (textureValue >= 2) {
        textureValue--;

        maskTexture.value = textureValue;

        let draw = api.pedComponent.mask[drawValue - 1].draw;
        let texture = api.pedComponent.mask[drawValue - 1].texture[textureValue - 1];

        emitUpdate('mask', draw, texture);

        // Buttons

        if (textureValue == 1) {
            unselectable('masktextureprev');

            selectable('masktexturenext');
        } else {
            selectable('masktexturenext');
        }
    } else if (textureValue <= 1) {
        unselectable('masktextureprev');

        let draw = api.pedComponent.mask[drawValue - 1].draw;
        let texture = api.pedComponent.mask[drawValue - 1].texture[textureValue - 1];

        emitUpdate('mask', draw, texture);
    }
};

const hairdrawprev = function () {
    let api = setApi(gender);

    let drawValue = parseInt(hairDraw.value);

    if (drawValue >= 2) {
        drawValue--;

        hairDraw.value = drawValue;

        let draw = api.pedComponent.hair[drawValue - 1].draw;
        let texture = api.pedComponent.hair[drawValue - 1].texture[0];

        emitUpdate('hair', draw, texture);

        //button setzten

        selectable('hairdrawnext');

        if (drawValue <= 1) {
            unselectable('hairdrawprev');
        }
    } else if (drawValue <= 1) {
        drawValue = 1;

        hairDraw.value = drawValue;

        unselectable('hairdrawprev');
    }
};

const hairdrawnext = function () {
    let api = setApi(gender);

    let drawValue = parseInt(hairDraw.value);

    let max = api.pedComponent.hair.length;

    if (drawValue <= max) {
        drawValue++;

        hairDraw.value = drawValue;

        let draw = api.pedComponent.hair[drawValue - 1].draw;
        let texture = api.pedComponent.hair[drawValue - 1].texture[0];

        emitUpdate('hair', draw, texture);

        //button setzten

        selectable('hairdrawprev');

        if (drawValue >= max) {
            unselectable('hairdrawnext');
        }
    } else if (drawValue >= max) {
        drawValue = max;

        hairDraw.value = drawValue;

        unselectable('hairdrawnext');
    }
};

const legsdrawprev = function () {
    let api = setApi(gender);

    let drawValue = parseInt(legsDraw.value);

    if (drawValue >= 2) {
        drawValue--;

        legsDraw.value = drawValue;

        let draw = api.pedComponent.legs[drawValue - 1].draw;
        let texture = api.pedComponent.legs[drawValue - 1].texture[0];

        emitUpdate('legs', draw, texture);

        // Texture 1 setzten
        legsTexture.value = 1;

        //button setzten

        selectable('legsdrawnext');

        if (api.pedComponent.legs[drawValue - 1].texture.length == 1) {
            unselectable('legstextureprev');
            unselectable('legstexturenext');
        } else {
            unselectable('legstextureprev');
            selectable('legstexturenext');
        }

        if (drawValue <= 1) {
            unselectable('legsdrawprev');
        }
    } else if (drawValue <= 1) {
        drawValue = 1;

        legsDraw.value = drawValue;

        unselectable('legsdrawprev');
    }
};

const legsdrawnext = function () {
    let api = setApi(gender);

    let drawValue = parseInt(legsDraw.value);

    let max = api.pedComponent.legs.length;

    if (drawValue <= max) {
        drawValue++;

        legsDraw.value = drawValue;

        let draw = api.pedComponent.legs[drawValue - 1].draw;
        let texture = api.pedComponent.legs[drawValue - 1].texture[0];

        emitUpdate('legs', draw, texture);

        // Texture "1" setzten
        legsTexture.value = 1;

        //button setzten

        selectable('legsdrawprev');

        if (api.pedComponent.legs[drawValue - 1].texture.length == 1) {
            unselectable('legstextureprev');
            unselectable('legstexturenext');
        } else {
            selectable('legstexturenext');
            unselectable('legstextureprev');
        }

        if (drawValue >= max) {
            unselectable('legsdrawnext');
        }
    } else if (drawValue >= max) {
        drawValue = max;

        legsDraw.value = drawValue;

        unselectable('legsdrawnext');
    }
};

const legstexturenext = function () {
    let api = setApi(gender);

    let drawValue = parseInt(legsDraw.value);

    let textureValue = parseInt(legsTexture.value);

    let max = api.pedComponent.legs[drawValue - 1].texture.length;

    if (textureValue < max) {
        textureValue++;

        legsTexture.value = textureValue;

        let draw = api.pedComponent.legs[drawValue - 1].draw;
        let texture = api.pedComponent.legs[drawValue - 1].texture[textureValue - 1];

        emitUpdate('legs', draw, texture);

        // Buttons

        if (textureValue == max) {
            unselectable('legstexturenext');
            selectable('legstextureprev');
        } else {
            selectable('legstextureprev');
        }
    } else if (textureValue >= max) {
        unselectable('legstexturenext');

        let draw = api.pedComponent.legs[drawValue - 1].draw;
        let texture = api.pedComponent.legs[drawValue - 1].texture[textureValue - 1];

        emitUpdate('legs', draw, texture);
    }
};

const legstextureprev = function () {
    let api = setApi(gender);

    let drawValue = parseInt(legsDraw.value);

    let textureValue = parseInt(legsTexture.value);

    let max = api.pedComponent.legs[drawValue - 1].texture.length;

    if (textureValue >= 2) {
        textureValue--;

        legsTexture.value = textureValue;

        let draw = api.pedComponent.legs[drawValue - 1].draw;
        let texture = api.pedComponent.legs[drawValue - 1].texture[textureValue - 1];

        emitUpdate('legs', draw, texture);

        // Buttons

        if (textureValue == 1) {
            unselectable('legstextureprev');

            selectable('legstexturenext');
        } else {
            selectable('legstexturenext');
        }
    } else if (textureValue <= 1) {
        unselectable('legstextureprev');

        let draw = api.pedComponent.legs[drawValue - 1].draw;
        let texture = api.pedComponent.legs[drawValue - 1].texture[textureValue - 1];

        emitUpdate('legs', draw, texture);
    }
};

const shoesdrawprev = function () {
    let api = setApi(gender);

    let drawValue = parseInt(shoesDraw.value);

    if (drawValue >= 2) {
        drawValue--;

        shoesDraw.value = drawValue;

        let draw = api.pedComponent.shoes[drawValue - 1].draw;
        let texture = api.pedComponent.shoes[drawValue - 1].texture[0];

        emitUpdate('shoes', draw, texture);

        // Texture 1 setzten
        shoesTexture.value = 1;

        //button setzten

        selectable('shoesdrawnext');

        if (api.pedComponent.shoes[drawValue - 1].texture.length == 1) {
            unselectable('shoestextureprev');
            unselectable('shoestexturenext');
        } else {
            unselectable('shoestextureprev');
            selectable('shoestexturenext');
        }

        if (drawValue <= 1) {
            unselectable('shoesdrawprev');
        }
    } else if (drawValue <= 1) {
        drawValue = 1;

        shoesDraw.value = drawValue;

        unselectable('shoesdrawprev');
    }
};

const shoesdrawnext = function () {
    let api = setApi(gender);

    let drawValue = parseInt(shoesDraw.value);

    let max = api.pedComponent.shoes.length;

    if (drawValue <= max) {
        drawValue++;

        shoesDraw.value = drawValue;

        let draw = api.pedComponent.shoes[drawValue - 1].draw;
        let texture = api.pedComponent.shoes[drawValue - 1].texture[0];

        emitUpdate('shoes', draw, texture);

        // Texture "1" setzten
        shoesTexture.value = 1;

        //button setzten

        selectable('shoesdrawprev');

        if (api.pedComponent.shoes[drawValue - 1].texture.length == 1) {
            unselectable('shoestextureprev');
            unselectable('shoestexturenext');
        } else {
            selectable('shoestexturenext');
            unselectable('shoestextureprev');
        }

        if (drawValue >= max) {
            unselectable('shoesdrawnext');
        }
    } else if (drawValue >= max) {
        drawValue = max;

        shoesDraw.value = drawValue;

        unselectable('shoesdrawnext');
    }
};

const shoestexturenext = function () {
    let api = setApi(gender);

    let drawValue = parseInt(shoesDraw.value);

    let textureValue = parseInt(shoesTexture.value);

    let max = api.pedComponent.shoes[drawValue - 1].texture.length;

    if (textureValue < max) {
        textureValue++;

        shoesTexture.value = textureValue;

        let draw = api.pedComponent.shoes[drawValue - 1].draw;
        let texture = api.pedComponent.shoes[drawValue - 1].texture[textureValue - 1];

        emitUpdate('shoes', draw, texture);

        // Buttons

        if (textureValue == max) {
            unselectable('shoestexturenext');
            selectable('shoestextureprev');
        } else {
            selectable('shoestextureprev');
        }
    } else if (textureValue >= max) {
        unselectable('shoestexturenext');

        let draw = api.pedComponent.shoes[drawValue - 1].draw;
        let texture = api.pedComponent.shoes[drawValue - 1].texture[textureValue - 1];

        emitUpdate('shoes', draw, texture);
    }
};

const shoestextureprev = function () {
    let api = setApi(gender);

    let drawValue = parseInt(shoesDraw.value);

    let textureValue = parseInt(shoesTexture.value);

    let max = api.pedComponent.shoes[drawValue - 1].texture.length;

    if (textureValue >= 2) {
        textureValue--;

        shoesTexture.value = textureValue;

        let draw = api.pedComponent.shoes[drawValue - 1].draw;
        let texture = api.pedComponent.shoes[drawValue - 1].texture[textureValue - 1];

        emitUpdate('shoes', draw, texture);

        // Buttons

        if (textureValue == 1) {
            unselectable('shoestextureprev');

            selectable('shoestexturenext');
        } else {
            selectable('shoestexturenext');
        }
    } else if (textureValue <= 1) {
        unselectable('shoestextureprev');

        let draw = api.pedComponent.shoes[drawValue - 1].draw;
        let texture = api.pedComponent.shoes[drawValue - 1].texture[textureValue - 1];

        emitUpdate('shoes', draw, texture);
    }
};

const accessoriesdrawprev = function () {
    let api = setApi(gender);

    let drawValue = parseInt(accessoriesDraw.value);

    if (drawValue >= 2) {
        drawValue--;

        accessoriesDraw.value = drawValue;

        let draw = api.pedComponent.accessories[drawValue - 1].draw;
        let texture = api.pedComponent.accessories[drawValue - 1].texture[0];

        emitUpdate('accessories', draw, texture);

        // Texture 1 setzten
        accessoriesTexture.value = 1;

        //button setzten

        selectable('accessoriesdrawnext');

        if (api.pedComponent.accessories[drawValue - 1].texture.length == 1) {
            unselectable('accessoriestextureprev');
            unselectable('accessoriestexturenext');
        } else {
            unselectable('accessoriestextureprev');
            selectable('accessoriestexturenext');
        }

        if (drawValue <= 1) {
            unselectable('accessoriesdrawprev');
        }
    } else if (drawValue <= 1) {
        drawValue = 1;

        accessoriesDraw.value = drawValue;

        unselectable('accessoriesdrawprev');
    }
};

const accessoriesdrawnext = function () {
    let api = setApi(gender);

    let drawValue = parseInt(accessoriesDraw.value);

    let max = api.pedComponent.accessories.length;

    if (drawValue <= max) {
        drawValue++;

        accessoriesDraw.value = drawValue;

        let draw = api.pedComponent.accessories[drawValue - 1].draw;
        let texture = api.pedComponent.accessories[drawValue - 1].texture[0];

        emitUpdate('accessories', draw, texture);

        // Texture "1" setzten
        accessoriesTexture.value = 1;

        //button setzten

        selectable('accessoriesdrawprev');

        if (api.pedComponent.accessories[drawValue - 1].texture.length == 1) {
            unselectable('accessoriestextureprev');
            unselectable('accessoriestexturenext');
        } else {
            selectable('accessoriestexturenext');
            unselectable('accessoriestextureprev');
        }

        if (drawValue >= max) {
            unselectable('accessoriesdrawnext');
        }
    } else if (drawValue >= max) {
        drawValue = max;

        accessoriesDraw.value = drawValue;

        unselectable('accessoriesdrawnext');
    }
};

const accessoriestexturenext = function () {
    let api = setApi(gender);

    let drawValue = parseInt(accessoriesDraw.value);

    let textureValue = parseInt(accessoriesTexture.value);

    let max = api.pedComponent.accessories[drawValue - 1].texture.length;

    if (textureValue < max) {
        textureValue++;

        accessoriesTexture.value = textureValue;

        let draw = api.pedComponent.accessories[drawValue - 1].draw;
        let texture = api.pedComponent.accessories[drawValue - 1].texture[textureValue - 1];

        emitUpdate('accessories', draw, texture);

        // Buttons

        if (textureValue == max) {
            unselectable('accessoriestexturenext');
            selectable('accessoriestextureprev');
        } else {
            selectable('accessoriestextureprev');
        }
    } else if (textureValue >= max) {
        unselectable('accessoriestexturenext');

        let draw = api.pedComponent.accessories[drawValue - 1].draw;
        let texture = api.pedComponent.accessories[drawValue - 1].texture[textureValue - 1];

        emitUpdate('accessories', draw, texture);
    }
};

const accessoriestextureprev = function () {
    let api = setApi(gender);

    let drawValue = parseInt(accessoriesDraw.value);

    let textureValue = parseInt(accessoriesTexture.value);

    let max = api.pedComponent.accessories[drawValue - 1].texture.length;

    if (textureValue >= 2) {
        textureValue--;

        accessoriesTexture.value = textureValue;

        let draw = api.pedComponent.accessories[drawValue - 1].draw;
        let texture = api.pedComponent.accessories[drawValue - 1].texture[textureValue - 1];

        emitUpdate('accessories', draw, texture);

        // Buttons

        if (textureValue == 1) {
            unselectable('accessoriestextureprev');

            selectable('accessoriestexturenext');
        } else {
            selectable('accessoriestexturenext');
        }
    } else if (textureValue <= 1) {
        unselectable('accessoriestextureprev');

        let draw = api.pedComponent.accessories[drawValue - 1].draw;
        let texture = api.pedComponent.accessories[drawValue - 1].texture[textureValue - 1];

        emitUpdate('accessories', draw, texture);
    }
};

const undershirtdrawprev = function () {
    let api = setApi(gender);

    let drawValue = parseInt(undershirtDraw.value);

    if (drawValue >= 2) {
        drawValue--;

        undershirtDraw.value = drawValue;

        let draw = api.pedComponent.undershirt[drawValue - 1].draw;
        let texture = api.pedComponent.undershirt[drawValue - 1].texture[0];

        emitUpdate('undershirt', draw, texture);

        // Texture 1 setzten
        undershirtTexture.value = 1;

        //button setzten

        selectable('undershirtdrawnext');

        if (api.pedComponent.undershirt[drawValue - 1].texture.length == 1) {
            unselectable('undershirttextureprev');
            unselectable('undershirttexturenext');
        } else {
            unselectable('undershirttextureprev');
            selectable('undershirttexturenext');
        }

        if (drawValue <= 1) {
            unselectable('undershirtdrawprev');
        }
    } else if (drawValue <= 1) {
        drawValue = 1;

        undershirtDraw.value = drawValue;

        unselectable('undershirtdrawprev');
    }
};

const undershirtdrawnext = function () {
    let api = setApi(gender);

    let drawValue = parseInt(undershirtDraw.value);

    let max = api.pedComponent.undershirt.length;

    if (drawValue <= max) {
        drawValue++;

        undershirtDraw.value = drawValue;

        let draw = api.pedComponent.undershirt[drawValue - 1].draw;
        let texture = api.pedComponent.undershirt[drawValue - 1].texture[0];

        emitUpdate('undershirt', draw, texture);

        // Texture "1" setzten
        undershirtTexture.value = 1;

        //button setzten

        selectable('undershirtdrawprev');

        if (api.pedComponent.undershirt[drawValue - 1].texture.length == 1) {
            unselectable('undershirttextureprev');
            unselectable('undershirttexturenext');
        } else {
            selectable('undershirttexturenext');
            unselectable('undershirttextureprev');
        }

        if (drawValue >= max) {
            unselectable('undershirtdrawnext');
        }
    } else if (drawValue >= max) {
        drawValue = max;

        undershirtDraw.value = drawValue;

        unselectable('undershirtdrawnext');
    }
};

const undershirttexturenext = function () {
    let api = setApi(gender);

    let drawValue = parseInt(undershirtDraw.value);

    let textureValue = parseInt(undershirtTexture.value);

    let max = api.pedComponent.undershirt[drawValue - 1].texture.length;

    if (textureValue < max) {
        textureValue++;

        undershirtTexture.value = textureValue;

        let draw = api.pedComponent.undershirt[drawValue - 1].draw;
        let texture = api.pedComponent.undershirt[drawValue - 1].texture[textureValue - 1];

        emitUpdate('undershirt', draw, texture);

        // Buttons

        if (textureValue == max) {
            unselectable('undershirttexturenext');
            selectable('undershirttextureprev');
        } else {
            selectable('undershirttextureprev');
        }
    } else if (textureValue >= max) {
        unselectable('undershirttexturenext');

        let draw = api.pedComponent.undershirt[drawValue - 1].draw;
        let texture = api.pedComponent.undershirt[drawValue - 1].texture[textureValue - 1];

        emitUpdate('undershirt', draw, texture);
    }
};

const undershirttextureprev = function () {
    let api = setApi(gender);

    let drawValue = parseInt(undershirtDraw.value);

    let textureValue = parseInt(undershirtTexture.value);

    let max = api.pedComponent.undershirt[drawValue - 1].texture.length;

    if (textureValue >= 2) {
        textureValue--;

        undershirtTexture.value = textureValue;

        let draw = api.pedComponent.undershirt[drawValue - 1].draw;
        let texture = api.pedComponent.undershirt[drawValue - 1].texture[textureValue - 1];

        emitUpdate('undershirt', draw, texture);

        // Buttons

        if (textureValue == 1) {
            unselectable('undershirttextureprev');

            selectable('undershirttexturenext');
        } else {
            selectable('undershirttexturenext');
        }
    } else if (textureValue <= 1) {
        unselectable('undershirttextureprev');

        let draw = api.pedComponent.undershirt[drawValue - 1].draw;
        let texture = api.pedComponent.undershirt[drawValue - 1].texture[textureValue - 1];

        emitUpdate('undershirt', draw, texture);
    }
};

const decalsdrawprev = function () {
    let api = setApi(gender);

    let drawValue = parseInt(decalsDraw.value);

    if (drawValue >= 2) {
        drawValue--;

        decalsDraw.value = drawValue;

        let draw = api.pedComponent.decals[drawValue - 1].draw;
        let texture = api.pedComponent.decals[drawValue - 1].texture[0];

        emitUpdate('decals', draw, texture);

        // Texture 1 setzten
        decalsTexture.value = 1;

        //button setzten

        selectable('decalsdrawnext');

        if (api.pedComponent.decals[drawValue - 1].texture.length == 1) {
            unselectable('decalstextureprev');
            unselectable('decalstexturenext');
        } else {
            unselectable('decalstextureprev');
            selectable('decalstexturenext');
        }

        if (drawValue <= 1) {
            unselectable('decalsdrawprev');
        }
    } else if (drawValue <= 1) {
        drawValue = 1;

        decalsDraw.value = drawValue;

        unselectable('decalsdrawprev');
    }
};

const decalsdrawnext = function () {
    let api = setApi(gender);

    let drawValue = parseInt(decalsDraw.value);

    let max = api.pedComponent.decals.length;

    if (drawValue <= max) {
        drawValue++;

        decalsDraw.value = drawValue;

        let draw = api.pedComponent.decals[drawValue - 1].draw;
        let texture = api.pedComponent.decals[drawValue - 1].texture[0];

        emitUpdate('decals', draw, texture);

        // Texture "1" setzten
        decalsTexture.value = 1;

        //button setzten

        selectable('decalsdrawprev');

        if (api.pedComponent.decals[drawValue - 1].texture.length == 1) {
            unselectable('decalstextureprev');
            unselectable('decalstexturenext');
        } else {
            selectable('decalstexturenext');
            unselectable('decalstextureprev');
        }

        if (drawValue >= max) {
            unselectable('decalsdrawnext');
        }
    } else if (drawValue >= max) {
        drawValue = max;

        decalsDraw.value = drawValue;

        unselectable('decalsdrawnext');
    }
};

const decalstexturenext = function () {
    let api = setApi(gender);

    let drawValue = parseInt(decalsDraw.value);

    let textureValue = parseInt(decalsTexture.value);

    let max = api.pedComponent.decals[drawValue - 1].texture.length;

    if (textureValue < max) {
        textureValue++;

        decalsTexture.value = textureValue;

        let draw = api.pedComponent.decals[drawValue - 1].draw;
        let texture = api.pedComponent.decals[drawValue - 1].texture[textureValue - 1];

        emitUpdate('decals', draw, texture);

        // Buttons

        if (textureValue == max) {
            unselectable('decalstexturenext');
            selectable('decalstextureprev');
        } else {
            selectable('decalstextureprev');
        }
    } else if (textureValue >= max) {
        unselectable('decalstexturenext');

        let draw = api.pedComponent.decals[drawValue - 1].draw;
        let texture = api.pedComponent.decals[drawValue - 1].texture[textureValue - 1];

        emitUpdate('decals', draw, texture);
    }
};

const decalstextureprev = function () {
    let api = setApi(gender);

    let drawValue = parseInt(decalsDraw.value);

    let textureValue = parseInt(decalsTexture.value);

    let max = api.pedComponent.decals[drawValue - 1].texture.length;

    if (textureValue >= 2) {
        textureValue--;

        decalsTexture.value = textureValue;

        let draw = api.pedComponent.decals[drawValue - 1].draw;
        let texture = api.pedComponent.decals[drawValue - 1].texture[textureValue - 1];

        emitUpdate('decals', draw, texture);

        // Buttons

        if (textureValue == 1) {
            unselectable('decalstextureprev');

            selectable('decalstexturenext');
        } else {
            selectable('decalstexturenext');
        }
    } else if (textureValue <= 1) {
        unselectable('decalstextureprev');

        let draw = api.pedComponent.decals[drawValue - 1].draw;
        let texture = api.pedComponent.decals[drawValue - 1].texture[textureValue - 1];

        emitUpdate('decals', draw, texture);
    }
};

const topsdrawprev = function () {
    let api = setApi(gender);

    let drawValue = parseInt(topsDraw.value);

    if (drawValue >= 2) {
        drawValue--;

        topsDraw.value = drawValue;

        let draw = api.pedComponent.tops[drawValue - 1].draw;
        let texture = api.pedComponent.tops[drawValue - 1].texture[0];
        let torso = api.pedComponent.tops[drawValue - 1].torso;

        emitUpdate('tops', draw, texture);
        emitUpdate('torso', torso, 0);

        // Texture 1 setzten
        topsTexture.value = 1;

        //button setzten

        selectable('topsdrawnext');

        if (api.pedComponent.tops[drawValue - 1].texture.length == 1) {
            unselectable('topstextureprev');
            unselectable('topstexturenext');
        } else {
            unselectable('topstextureprev');
            selectable('topstexturenext');
        }

        if (drawValue <= 1) {
            unselectable('topsdrawprev');
        }
    } else if (drawValue <= 1) {
        drawValue = 1;

        topsDraw.value = drawValue;

        unselectable('topsdrawprev');
    }
};

const topsdrawnext = function () {
    let api = setApi(gender);

    let drawValue = parseInt(topsDraw.value);

    let max = api.pedComponent.tops.length;

    if (drawValue <= max) {
        drawValue++;

        topsDraw.value = drawValue;

        let draw = api.pedComponent.tops[drawValue - 1].draw;
        let texture = api.pedComponent.tops[drawValue - 1].texture[0];
        let torso = api.pedComponent.tops[drawValue - 1].torso;

        emitUpdate('tops', draw, texture);
        emitUpdate('torso', torso, 0);

        // Texture "1" setzten
        topsTexture.value = 1;

        //button setzten

        selectable('topsdrawprev');

        if (api.pedComponent.tops[drawValue - 1].texture.length == 1) {
            unselectable('topstextureprev');
            unselectable('topstexturenext');
        } else {
            selectable('topstexturenext');
            unselectable('topstextureprev');
        }

        if (drawValue >= max) {
            unselectable('topsdrawnext');
        }
    } else if (drawValue >= max) {
        drawValue = max;

        topsDraw.value = drawValue;

        unselectable('topsdrawnext');
    }
};

const topstexturenext = function () {
    let api = setApi(gender);

    let drawValue = parseInt(topsDraw.value);

    let textureValue = parseInt(topsTexture.value);

    let max = api.pedComponent.tops[drawValue - 1].texture.length;

    if (textureValue < max) {
        textureValue++;

        topsTexture.value = textureValue;

        let draw = api.pedComponent.tops[drawValue - 1].draw;
        let texture = api.pedComponent.tops[drawValue - 1].texture[textureValue - 1];
        let torso = api.pedComponent.tops[drawValue - 1].torso;

        emitUpdate('tops', draw, texture);
        emitUpdate('torso', torso, 0);

        // Buttons

        if (textureValue == max) {
            unselectable('topstexturenext');
            selectable('topstextureprev');
        } else {
            selectable('topstextureprev');
        }
    } else if (textureValue >= max) {
        unselectable('topstexturenext');

        let draw = api.pedComponent.tops[drawValue - 1].draw;
        let texture = api.pedComponent.tops[drawValue - 1].texture[textureValue - 1];

        emitUpdate('tops', draw, texture);
    }
};

const topstextureprev = function () {
    let api = setApi(gender);

    let drawValue = parseInt(topsDraw.value);

    let textureValue = parseInt(topsTexture.value);

    let max = api.pedComponent.tops[drawValue - 1].texture.length;

    if (textureValue >= 2) {
        textureValue--;

        topsTexture.value = textureValue;

        let draw = api.pedComponent.tops[drawValue - 1].draw;
        let texture = api.pedComponent.tops[drawValue - 1].texture[textureValue - 1];

        emitUpdate('tops', draw, texture);

        // Buttons

        if (textureValue == 1) {
            unselectable('topstextureprev');

            selectable('topstexturenext');
        } else {
            selectable('topstexturenext');
        }
    } else if (textureValue <= 1) {
        unselectable('topstextureprev');

        let draw = api.pedComponent.tops[drawValue - 1].draw;
        let texture = api.pedComponent.tops[drawValue - 1].texture[textureValue - 1];

        emitUpdate('tops', draw, texture);
    }
};

const blemishesprev = function () {
    let api = setApi(gender);

    let blemishesValue = parseInt(blemishes.value);

    if (blemishesValue >= 2) {
        blemishesValue--;

        blemishes.value = blemishesValue;

        let index = api.headOverlay.blemishes[blemishesValue - 1];

        emitUpdate('blemishes', index, 1);

        // Sichtbarkeit 100% setzten
        blemishesOpacity.value = 100;

        //button setzten

        selectable('blemishesnext');

        if (blemishesValue <= 1) {
            unselectable('blemishesprev');
        }
    } else if (blemishesValue <= 1) {
        blemishesValue = 1;

        blemishes.value = blemishesValue;

        unselectable('blemishesprev');
    }
};

const blemishesnext = function () {
    let api = setApi(gender);

    let blemishesValue = parseInt(blemishes.value);

    let max = api.headOverlay.blemishes.length;

    if (blemishesValue <= max) {
        blemishesValue++;

        blemishes.value = blemishesValue;

        let index = api.headOverlay.blemishes[blemishesValue - 1];

        emitUpdate('blemishes', index, 1);

        // Texture "1" setzten
        blemishesOpacity.value = 100;

        //button setzten

        selectable('blemishesprev');

        if (blemishesValue >= max) {
            unselectable('blemishesnext');
        }
    } else if (blemishesValue >= max) {
        blemishesValue = max;

        blemishes.value = blemishesValue;

        unselectable('blemishesnext');
    }
};

const facialHairprev = function () {
    let api = setApi(gender);

    let facialHairValue = parseInt(facialHair.value);

    if (facialHairValue >= 2) {
        facialHairValue--;

        facialHair.value = facialHairValue;

        let index = api.headOverlay.facialHair[facialHairValue - 1];

        emitUpdate('facialHair', index, 1);

        // Sichtbarkeit 100% setzten
        facialHairOpacity.value = 100;

        //button setzten

        selectable('facialHairnext');

        if (facialHairValue <= 1) {
            unselectable('facialHairprev');
        }
    } else if (facialHairValue <= 1) {
        facialHairValue = 1;

        facialHair.value = facialHairValue;

        unselectable('facialHairprev');
    }
};

const facialHairnext = function () {
    let api = setApi(gender);

    let facialHairValue = parseInt(facialHair.value);

    let max = api.headOverlay.facialHair.length;

    if (facialHairValue <= max) {
        facialHairValue++;

        facialHair.value = facialHairValue;

        let index = api.headOverlay.facialHair[facialHairValue - 1];

        emitUpdate('facialHair', index, 1);

        // Texture "1" setzten
        facialHairOpacity.value = 100;

        //button setzten

        selectable('facialHairprev');

        if (facialHairValue >= max) {
            unselectable('facialHairnext');
        }
    } else if (facialHairValue >= max) {
        facialHairValue = max;

        facialHair.value = facialHairValue;

        unselectable('facialHairnext');
    }
};

const eyebrowsprev = function () {
    let api = setApi(gender);

    let eyebrowsValue = parseInt(eyebrows.value);

    if (eyebrowsValue >= 2) {
        eyebrowsValue--;

        eyebrows.value = eyebrowsValue;

        let index = api.headOverlay.eyebrows[eyebrowsValue - 1];

        emitUpdate('eyebrows', index, 1);

        // Sichtbarkeit 100% setzten
        eyebrowsOpacity.value = 100;

        //button setzten

        selectable('eyebrowsnext');

        if (eyebrowsValue <= 1) {
            unselectable('eyebrowsprev');
        }
    } else if (eyebrowsValue <= 1) {
        eyebrowsValue = 1;

        eyebrows.value = eyebrowsValue;

        unselectable('eyebrowsprev');
    }
};

const eyebrowsnext = function () {
    let api = setApi(gender);

    let eyebrowsValue = parseInt(eyebrows.value);

    let max = api.headOverlay.eyebrows.length;

    if (eyebrowsValue <= max) {
        eyebrowsValue++;

        eyebrows.value = eyebrowsValue;

        let index = api.headOverlay.eyebrows[eyebrowsValue - 1];

        emitUpdate('eyebrows', index, 1);

        // Texture "1" setzten
        eyebrowsOpacity.value = 100;

        //button setzten

        selectable('eyebrowsprev');

        if (eyebrowsValue >= max) {
            unselectable('eyebrowsnext');
        }
    } else if (eyebrowsValue >= max) {
        eyebrowsValue = max;

        eyebrows.value = eyebrowsValue;

        unselectable('eyebrowsnext');
    }
};

const ageingprev = function () {
    let api = setApi(gender);

    let ageingValue = parseInt(ageing.value);

    if (ageingValue >= 2) {
        ageingValue--;

        ageing.value = ageingValue;

        let index = api.headOverlay.ageing[ageingValue - 1];

        emitUpdate('ageing', index, 1);

        // Sichtbarkeit 100% setzten
        ageingOpacity.value = 100;

        //button setzten

        selectable('ageingnext');

        if (ageingValue <= 1) {
            unselectable('ageingprev');
        }
    } else if (ageingValue <= 1) {
        ageingValue = 1;

        ageing.value = ageingValue;

        unselectable('ageingprev');
    }
};

const ageingnext = function () {
    let api = setApi(gender);

    let ageingValue = parseInt(ageing.value);

    let max = api.headOverlay.ageing.length;

    if (ageingValue <= max) {
        ageingValue++;

        ageing.value = ageingValue;

        let index = api.headOverlay.ageing[ageingValue - 1];

        emitUpdate('ageing', index, 1);

        // Texture "1" setzten
        ageingOpacity.value = 100;

        //button setzten

        selectable('ageingprev');

        if (ageingValue >= max) {
            unselectable('ageingnext');
        }
    } else if (ageingValue >= max) {
        ageingValue = max;

        ageing.value = ageingValue;

        unselectable('ageingnext');
    }
};

const makeupprev = function () {
    let api = setApi(gender);

    let makeupValue = parseInt(makeup.value);

    if (makeupValue >= 2) {
        makeupValue--;

        makeup.value = makeupValue;

        let index = api.headOverlay.makeup[makeupValue - 1];

        emitUpdate('makeup', index, 1);

        // Sichtbarkeit 100% setzten
        makeupOpacity.value = 100;

        //button setzten

        selectable('makeupnext');

        if (makeupValue <= 1) {
            unselectable('makeupprev');
        }
    } else if (makeupValue <= 1) {
        makeupValue = 1;

        makeup.value = makeupValue;

        unselectable('makeupprev');
    }
};

const makeupnext = function () {
    let api = setApi(gender);

    let makeupValue = parseInt(makeup.value);

    let max = api.headOverlay.makeup.length;

    if (makeupValue <= max) {
        makeupValue++;

        makeup.value = makeupValue;

        let index = api.headOverlay.makeup[makeupValue - 1];

        emitUpdate('makeup', index, 1);

        // Texture "1" setzten
        makeupOpacity.value = 100;

        //button setzten

        selectable('makeupprev');

        if (makeupValue >= max) {
            unselectable('makeupnext');
        }
    } else if (makeupValue >= max) {
        makeupValue = max;

        makeup.value = makeupValue;

        unselectable('makeupnext');
    }
};

const blushprev = function () {
    let api = setApi(gender);

    let blushValue = parseInt(blush.value);

    if (blushValue >= 2) {
        blushValue--;

        blush.value = blushValue;

        let index = api.headOverlay.blush[blushValue - 1];

        emitUpdate('blush', index, 1);

        // Sichtbarkeit 100% setzten
        blushOpacity.value = 100;

        //button setzten

        selectable('blushnext');

        if (blushValue <= 1) {
            unselectable('blushprev');
        }
    } else if (blushValue <= 1) {
        blushValue = 1;

        blush.value = blushValue;

        unselectable('blushprev');
    }
};

const blushnext = function () {
    let api = setApi(gender);

    let blushValue = parseInt(blush.value);

    let max = api.headOverlay.blush.length;

    if (blushValue <= max) {
        blushValue++;

        blush.value = blushValue;

        let index = api.headOverlay.blush[blushValue - 1];

        emitUpdate('blush', index, 1);

        // Texture "1" setzten
        blushOpacity.value = 100;

        //button setzten

        selectable('blushprev');

        if (blushValue >= max) {
            unselectable('blushnext');
        }
    } else if (blushValue >= max) {
        blushValue = max;

        blush.value = blushValue;

        unselectable('blushnext');
    }
};

const complexionprev = function () {
    let api = setApi(gender);

    let complexionValue = parseInt(complexion.value);

    if (complexionValue >= 2) {
        complexionValue--;

        complexion.value = complexionValue;

        let index = api.headOverlay.complexion[complexionValue - 1];

        emitUpdate('complexion', index, 1);

        // Sichtbarkeit 100% setzten
        complexionOpacity.value = 100;

        //button setzten

        selectable('complexionnext');

        if (complexionValue <= 1) {
            unselectable('complexionprev');
        }
    } else if (complexionValue <= 1) {
        complexionValue = 1;

        complexion.value = complexionValue;

        unselectable('complexionprev');
    }
};

const complexionnext = function () {
    let api = setApi(gender);

    let complexionValue = parseInt(complexion.value);

    let max = api.headOverlay.complexion.length;

    if (complexionValue <= max) {
        complexionValue++;

        complexion.value = complexionValue;

        let index = api.headOverlay.complexion[complexionValue - 1];

        emitUpdate('complexion', index, 1);

        // Texture "1" setzten
        complexionOpacity.value = 100;

        //button setzten

        selectable('complexionprev');

        if (complexionValue >= max) {
            unselectable('complexionnext');
        }
    } else if (complexionValue >= max) {
        complexionValue = max;

        complexion.value = complexionValue;

        unselectable('complexionnext');
    }
};

const sunDamageprev = function () {
    let api = setApi(gender);

    let sunDamageValue = parseInt(sunDamage.value);

    if (sunDamageValue >= 2) {
        sunDamageValue--;

        sunDamage.value = sunDamageValue;

        let index = api.headOverlay.sunDamage[sunDamageValue - 1];

        emitUpdate('sunDamage', index, 1);

        // Sichtbarkeit 100% setzten
        sunDamageOpacity.value = 100;

        //button setzten

        selectable('sunDamagenext');

        if (sunDamageValue <= 1) {
            unselectable('sunDamageprev');
        }
    } else if (sunDamageValue <= 1) {
        sunDamageValue = 1;

        sunDamage.value = sunDamageValue;

        unselectable('sunDamageprev');
    }
};

const sunDamagenext = function () {
    let api = setApi(gender);

    let sunDamageValue = parseInt(sunDamage.value);

    let max = api.headOverlay.sunDamage.length;

    if (sunDamageValue <= max) {
        sunDamageValue++;

        sunDamage.value = sunDamageValue;

        let index = api.headOverlay.sunDamage[sunDamageValue - 1];

        emitUpdate('sunDamage', index, 1);

        // Texture "1" setzten
        sunDamageOpacity.value = 100;

        //button setzten

        selectable('sunDamageprev');

        if (sunDamageValue >= max) {
            unselectable('sunDamagenext');
        }
    } else if (sunDamageValue >= max) {
        sunDamageValue = max;

        sunDamage.value = sunDamageValue;

        unselectable('sunDamagenext');
    }
};

const lipstickprev = function () {
    let api = setApi(gender);

    let lipstickValue = parseInt(lipstick.value);

    if (lipstickValue >= 2) {
        lipstickValue--;

        lipstick.value = lipstickValue;

        let index = api.headOverlay.lipstick[lipstickValue - 1];

        emitUpdate('lipstick', index, 0);

        // Sichtbarkeit 100% setzten
        lipstickOpacity.value = 100;

        //button setzten

        selectable('lipsticknext');

        if (lipstickValue <= 1) {
            unselectable('lipstickprev');
        }
    } else if (lipstickValue <= 1) {
        lipstickValue = 1;

        lipstick.value = lipstickValue;

        unselectable('lipstickprev');
    }
};

const lipsticknext = function () {
    let api = setApi(gender);

    let lipstickValue = parseInt(lipstick.value);

    let max = api.headOverlay.lipstick.length;

    if (lipstickValue <= max) {
        lipstickValue++;

        lipstick.value = lipstickValue;

        let index = api.headOverlay.lipstick[lipstickValue - 1];

        emitUpdate('lipstick', index, 0);

        // Texture "1" setzten
        lipstickOpacity.value = 100;

        //button setzten

        selectable('lipstickprev');

        if (lipstickValue >= max) {
            unselectable('lipsticknext');
        }
    } else if (lipstickValue >= max) {
        lipstickValue = max;

        lipstick.value = lipstickValue;

        unselectable('lipsticknext');
    }
};

const fracklesprev = function () {
    let api = setApi(gender);

    let fracklesValue = parseInt(frackles.value);

    if (fracklesValue >= 2) {
        fracklesValue--;

        frackles.value = fracklesValue;

        let index = api.headOverlay.frackles[fracklesValue - 1];

        emitUpdate('frackles', index, 1);

        // Sichtbarkeit 100% setzten
        fracklesOpacity.value = 100;

        //button setzten

        selectable('fracklesnext');

        if (fracklesValue <= 1) {
            unselectable('fracklesprev');
        }
    } else if (fracklesValue <= 1) {
        fracklesValue = 1;

        frackles.value = fracklesValue;

        unselectable('fracklesprev');
    }
};

const fracklesnext = function () {
    let api = setApi(gender);

    let fracklesValue = parseInt(frackles.value);

    let max = api.headOverlay.frackles.length;

    if (fracklesValue <= max) {
        fracklesValue++;

        frackles.value = fracklesValue;

        let index = api.headOverlay.frackles[fracklesValue - 1];

        emitUpdate('frackles', index, 1);

        // Texture "1" setzten
        fracklesOpacity.value = 100;

        //button setzten

        selectable('fracklesprev');

        if (fracklesValue >= max) {
            unselectable('fracklesnext');
        }
    } else if (fracklesValue >= max) {
        fracklesValue = max;

        frackles.value = fracklesValue;

        unselectable('fracklesnext');
    }
};

const chestHairprev = function () {
    let api = setApi(gender);

    let chestHairValue = parseInt(chestHair.value);

    if (chestHairValue >= 2) {
        chestHairValue--;

        chestHair.value = chestHairValue;

        let index = api.headOverlay.chestHair[chestHairValue - 1];

        emitUpdate('chestHair', index, 1);

        // Sichtbarkeit 100% setzten
        chestHairOpacity.value = 100;

        //button setzten

        selectable('chestHairnext');

        if (chestHairValue <= 1) {
            unselectable('chestHairprev');
        }
    } else if (chestHairValue <= 1) {
        chestHairValue = 1;

        chestHair.value = chestHairValue;

        unselectable('chestHairprev');
    }
};

const chestHairnext = function () {
    let api = setApi(gender);

    let chestHairValue = parseInt(chestHair.value);

    let max = api.headOverlay.chestHair.length;

    if (chestHairValue <= max) {
        chestHairValue++;

        chestHair.value = chestHairValue;

        let index = api.headOverlay.chestHair[chestHairValue - 1];

        emitUpdate('chestHair', index, 1);

        // Texture "1" setzten
        chestHairOpacity.value = 100;

        //button setzten

        selectable('chestHairprev');

        if (chestHairValue >= max) {
            unselectable('chestHairnext');
        }
    } else if (chestHairValue >= max) {
        chestHairValue = max;

        chestHair.value = chestHairValue;

        unselectable('chestHairnext');
    }
};

const bodyBlemishesprev = function () {
    let api = setApi(gender);

    let bodyBlemishesValue = parseInt(bodyBlemishes.value);

    if (bodyBlemishesValue >= 2) {
        bodyBlemishesValue--;

        bodyBlemishes.value = bodyBlemishesValue;

        let index = api.headOverlay.bodyBlemishes[bodyBlemishesValue - 1];

        emitUpdate('bodyBlemishes', index, 1);

        // Sichtbarkeit 100% setzten
        bodyBlemishesOpacity.value = 100;

        //button setzten

        selectable('bodyBlemishesnext');

        if (bodyBlemishesValue <= 1) {
            unselectable('bodyBlemishesprev');
        }
    } else if (bodyBlemishesValue <= 1) {
        bodyBlemishesValue = 1;

        bodyBlemishes.value = bodyBlemishesValue;

        unselectable('bodyBlemishesprev');
    }
};

const bodyBlemishesnext = function () {
    let api = setApi(gender);

    let bodyBlemishesValue = parseInt(bodyBlemishes.value);

    let max = api.headOverlay.bodyBlemishes.length;

    if (bodyBlemishesValue <= max) {
        bodyBlemishesValue++;

        bodyBlemishes.value = bodyBlemishesValue;

        let index = api.headOverlay.bodyBlemishes[bodyBlemishesValue - 1];

        emitUpdate('bodyBlemishes', index, 1);

        // Texture "1" setzten
        bodyBlemishesOpacity.value = 100;

        //button setzten

        selectable('bodyBlemishesprev');

        if (bodyBlemishesValue >= max) {
            unselectable('bodyBlemishesnext');
        }
    } else if (bodyBlemishesValue >= max) {
        bodyBlemishesValue = max;

        bodyBlemishes.value = bodyBlemishesValue;

        unselectable('bodyBlemishesnext');
    }
};

const addbodyBlemishesprev = function () {
    let api = setApi(gender);

    let addbodyBlemishesValue = parseInt(addbodyBlemishes.value);

    if (addbodyBlemishesValue >= 2) {
        addbodyBlemishesValue--;

        addbodyBlemishes.value = addbodyBlemishesValue;

        let index = api.headOverlay.addbodyBlemishes[addbodyBlemishesValue - 1];

        emitUpdate('addbodyBlemishes', index, 1);

        // Sichtbarkeit 100% setzten
        addbodyBlemishesOpacity.value = 100;

        //button setzten

        selectable('addbodyBlemishesnext');

        if (addbodyBlemishesValue <= 1) {
            unselectable('addbodyBlemishesprev');
        }
    } else if (addbodyBlemishesValue <= 1) {
        addbodyBlemishesValue = 1;

        addbodyBlemishes.value = addbodyBlemishesValue;

        unselectable('addbodyBlemishesprev');
    }
};

const addbodyBlemishesnext = function () {
    let api = setApi(gender);

    let addbodyBlemishesValue = parseInt(addbodyBlemishes.value);

    let max = api.headOverlay.addbodyBlemishes.length;

    if (addbodyBlemishesValue <= max) {
        addbodyBlemishesValue++;

        addbodyBlemishes.value = addbodyBlemishesValue;

        let index = api.headOverlay.addbodyBlemishes[addbodyBlemishesValue - 1];

        emitUpdate('addbodyBlemishes', index, 1);

        // Texture "1" setzten
        addbodyBlemishesOpacity.value = 100;

        //button setzten

        selectable('addbodyBlemishesprev');

        if (addbodyBlemishesValue >= max) {
            unselectable('addbodyBlemishesnext');
        }
    } else if (addbodyBlemishesValue >= max) {
        addbodyBlemishesValue = max;

        addbodyBlemishes.value = addbodyBlemishesValue;

        unselectable('addbodyBlemishesnext');
    }
};

const primaryColorprev = function () {
    let api = setApi(gender);

    let primaryColorValue = parseInt(primaryColor.value);

    if (primaryColorValue >= 2) {
        primaryColorValue--;

        primaryColor.value = primaryColorValue;

        let index = api.hairColor.primary[primaryColorValue - 1];

        emitUpdate('hairColor', index, index);

        // Sichtbarkeit 100% setzten
        colorHighlight.value = primaryColorValue;

        //button setzten

        selectable('primaryColornext');
        selectable('highlightColornext');
        if (primaryColorValue <= 1) {
            unselectable('primaryColorprev');
            unselectable('highlightColorprev');
        }
    } else if (addbodyBlemishesValue <= 1) {
        primaryColorValue = 1;

        primaryColor.value = primaryColorValue;

        unselectable('addbodyBlemishesprev');
    }
};

const primaryColornext = function () {
    let api = setApi(gender);

    let primaryColorValue = parseInt(primaryColor.value);

    let max = api.hairColor.primary.length;

    if (primaryColorValue <= max) {
        primaryColorValue++;

        primaryColor.value = primaryColorValue;

        let index = api.hairColor.primary[primaryColorValue - 1];

        emitUpdate('hairColor', index, index);

        // Texture "1" setzten
        colorHighlight.value = primaryColorValue;

        //button setzten

        selectable('primaryColorprev');
        selectable('highlightColorprev');

        if (primaryColorValue >= max) {
            unselectable('primaryColornext');
            unselectable('highlightColornext');
        }
    } else if (primaryColorValue >= max) {
        primaryColorValue = max;

        primaryColor.value = primaryColorValue;

        unselectable('addbodyBlemishesnext');
    }
};

const highlightColorprev = function () {
    let api = setApi(gender);

    let highlightColorValue = parseInt(highlightColor.value);

    if (highlightColorValue >= 2) {
        highlightColorValue--;

        highlightColor.value = highlightColorValue;

        let index = api.hairColor.primary[primaryColor.value - 1];
        let highlight = api.hairColor.highlight[highlightColorValue - 1];

        emitUpdate('hairColor', index, highlight);

        //button setzten

        selectable('highlightColornext');

        if (highlightColorValue <= 1) {
            unselectable('highlightColorprev');
        }
    } else if (addbodyBlemishesValue <= 1) {
        highlightColorValue = 1;

        highlightColor.value = highlightColorValue;

        unselectable('highlightColorprev');
    }
};

const highlightColornext = function () {
    let api = setApi(gender);

    let highlightColorValue = parseInt(highlightColor.value);

    let max = api.hairColor.primary.length;

    if (highlightColorValue <= max) {
        highlightColorValue++;

        highlightColor.value = highlightColorValue;

        let index = api.hairColor.primary[parseInt(primaryColor.value) - 1];
        let highlight = api.hairColor.highlight[highlightColorValue - 1];

        emitUpdate('hairColor', index, highlight);

        //button setzten

        selectable('highlightColorprev');

        if (highlightColorValue >= max) {
            unselectable('highlightColornext');
        }
    } else if (highlightColorValue >= max) {
        highlightColorValue = max;

        highlightColor.value = highlightColorValue;

        unselectable('highlightColornext');
    }
};

const eyeColorprev = function () {
    let api = setApi(gender);
    let color = parseInt(eyeColor.value);

    color--;

    if (color >= 2) {
        eyeColor.value = color;
        selectable('eyeColornext');
    } else if (color <= 1) {
        eyeColor.value = 1;
        unselectable('eyeColorprev');
        selectable('eyeColornext');
    }

    color = api.eyeColor.color[color - 1];
    emitUpdate('eyeColor', color, '');
};

const eyeColornext = function () {
    let api = setApi(gender);
    let color = parseInt(eyeColor.value);
    let max = api.eyeColor.color.length;
    color++;

    if (color >= max) {
        color = max;
        eyeColor.value = color;
        unselectable('eyeColornext');
        selectable('eyeColorprev');
    } else {
        eyeColor.value = color;
        selectable('eyeColorprev');
    }

    color = api.eyeColor.color[color - 1];
    emitUpdate('eyeColor', color, '');
};

const eyebrowsprimaryprev = function () {
    let api = setApi(gender);
    let color = parseInt(eyebrowsprimary.value);

    color--;
    if (color >= 2) {
        eyebrowsprimary.value = color;
        eyebrowshighlight.value = color;
        selectable('eyebrowsprimarynext');
        selectable('eyebrowshighlightnext');
        selectable('eyebrowshighlightprev');
    } else if (color <= 1) {
        eyebrowsprimary.value = color;
        eyebrowshighlight.value = color;
        unselectable('eyebrowsprimaryprev');
        unselectable('eyebrowshighlightprev');
    }
    let primary = api.headColor.eyebrowsprimary[color - 1];
    highlight = api.headColor.eyebrowshighlight[color - 1];

    emitUpdate('eyebrowsColor', primary, highlight);
};

const eyebrowsprimarynext = function () {
    let api = setApi(gender);
    let color = parseInt(eyebrowsprimary.value);

    let max = api.headColor.eyebrowsprimary.length;

    color++;
    if (color >= max) {
        color = max;
        eyebrowsprimary.value = color;
        eyebrowshighlight.value = color;
        unselectable('eyebrowsprimarynext');
        unselectable('eyebrowshighlightnext');
        selectable('eyebrowsprimaryprev');
        selectable('eyebrowshighlightprev');
    } else {
        eyebrowsprimary.value = color;
        eyebrowshighlight.value = color;
        selectable('eyebrowsprimaryprev');
        selectable('eyebrowshighlightprev');
    }

    let primary = api.headColor.eyebrowsprimary[color - 1];
    highlight = api.headColor.eyebrowshighlight[color - 1];

    emitUpdate('eyebrowsColor', primary, highlight);
};

const eyebrowshighlightprev = function () {
    let api = setApi(gender);
    let color = parseInt(eyebrowsprimary.value);
    let highlight = parseInt(eyebrowshighlight.value);

    highlight--;
    if (highlight >= 2) {
        eyebrowshighlight.value = highlight;
        selectable('eyebrowshighlightnext');
    } else if (highlight <= 1) {
        eyebrowshighlight.value = highlight;
        unselectable('eyebrowshighlightprev');
    }
    let primary = api.headColor.eyebrowsprimary[color - 1];
    highlight = api.headColor.eyebrowshighlight[highlight - 1];

    emitUpdate('eyebrowsColor', primary, highlight);
};

const eyebrowshighlightnext = function () {
    let api = setApi(gender);
    let color = parseInt(eyebrowsprimary.value);
    let highlight = parseInt(eyebrowshighlight.value);

    let max = api.headColor.eyebrowshighlight.length;

    highlight++;
    if (highlight >= max) {
        highlight = max;
        eyebrowshighlight.value = highlight;
        unselectable('eyebrowshighlightnext');
        selectable('eyebrowshighlightprev');
    } else {
        eyebrowshighlight.value = highlight;
        selectable('eyebrowshighlightprev');
    }

    let primary = api.headColor.eyebrowsprimary[color - 1];
    highlight = api.headColor.eyebrowshighlight[highlight - 1];

    emitUpdate('eyebrowsColor', primary, highlight);
};

const chesthairprimaryprev = function () {
    let api = setApi(gender);
    let color = parseInt(chesthairprimary.value);

    color--;
    if (color >= 2) {
        chesthairprimary.value = color;
        chesthairhighlight.value = color;
        selectable('chesthairprimarynext');
        selectable('chesthairhighlightnext');
        selectable('chesthairhighlightprev');
    } else if (color <= 1) {
        chesthairprimary.value = color;
        chesthairhighlight.value = color;
        unselectable('chesthairprimaryprev');
        unselectable('chesthairhighlightprev');
    }
    let primary = api.headColor.chesthairprimary[color - 1];
    highlight = api.headColor.chesthairhighlight[color - 1];

    emitUpdate('chesthairColor', primary, highlight);
};

const chesthairprimarynext = function () {
    let api = setApi(gender);
    let color = parseInt(chesthairprimary.value);

    let max = api.headColor.chesthairprimary.length;

    color++;
    if (color >= max) {
        color = max;
        chesthairprimary.value = color;
        chesthairhighlight.value = color;
        unselectable('chesthairprimarynext');
        unselectable('chesthairhighlightnext');
        selectable('chesthairprimaryprev');
        selectable('chesthairhighlightprev');
    } else {
        chesthairprimary.value = color;
        chesthairhighlight.value = color;
        selectable('chesthairprimaryprev');
        selectable('chesthairhighlightprev');
    }

    let primary = api.headColor.chesthairprimary[color - 1];
    highlight = api.headColor.chesthairhighlight[color - 1];

    emitUpdate('chesthairColor', primary, highlight);
};

const chesthairhighlightprev = function () {
    let api = setApi(gender);
    let color = parseInt(chesthairprimary.value);
    let highlight = parseInt(chesthairhighlight.value);

    highlight--;
    if (highlight >= 2) {
        chesthairhighlight.value = highlight;
        selectable('chesthairhighlightnext');
    } else if (highlight <= 1) {
        chesthairhighlight.value = highlight;
        unselectable('chesthairhighlightprev');
    }
    let primary = api.headColor.chesthairprimary[color - 1];
    highlight = api.headColor.chesthairhighlight[highlight - 1];

    emitUpdate('chesthairColor', primary, highlight);
};

const chesthairhighlightnext = function () {
    let api = setApi(gender);
    let color = parseInt(chesthairprimary.value);
    let highlight = parseInt(chesthairhighlight.value);

    let max = api.headColor.chesthairhighlight.length;

    highlight++;
    if (highlight >= max) {
        highlight = max;
        chesthairhighlight.value = highlight;
        unselectable('chesthairhighlightnext');
        selectable('chesthairhighlightprev');
    } else {
        chesthairhighlight.value = highlight;
        selectable('chesthairhighlightprev');
    }

    let primary = api.headColor.chesthairprimary[color - 1];
    highlight = api.headColor.chesthairhighlight[highlight - 1];

    emitUpdate('chesthairColor', primary, highlight);
};

const blushprimaryprev = function () {
    let api = setApi(gender);
    let color = parseInt(blushprimary.value);

    color--;
    if (color >= 2) {
        blushprimary.value = color;
        blushhighlight.value = color;
        selectable('blushprimarynext');
        selectable('blushhighlightnext');
        selectable('blushhighlightprev');
    } else if (color <= 1) {
        blushprimary.value = color;
        blushhighlight.value = color;
        unselectable('blushprimaryprev');
        unselectable('blushhighlightprev');
    }
    let primary = api.headColor.blushprimary[color - 1];
    highlight = api.headColor.blushhighlight[color - 1];

    emitUpdate('blushColor', primary, highlight);
};

const blushprimarynext = function () {
    let api = setApi(gender);
    let color = parseInt(blushprimary.value);

    let max = api.headColor.blushprimary.length;

    color++;
    if (color >= max) {
        color = max;
        blushprimary.value = color;
        blushhighlight.value = color;
        unselectable('blushprimarynext');
        unselectable('blushhighlightnext');
        selectable('blushprimaryprev');
        selectable('blushhighlightprev');
    } else {
        blushprimary.value = color;
        blushhighlight.value = color;
        selectable('blushprimaryprev');
        selectable('blushhighlightprev');
    }

    let primary = api.headColor.blushprimary[color - 1];
    highlight = api.headColor.blushhighlight[color - 1];

    emitUpdate('blushColor', primary, highlight);
};

const blushhighlightprev = function () {
    let api = setApi(gender);
    let color = parseInt(blushprimary.value);
    let highlight = parseInt(blushhighlight.value);

    highlight--;
    if (highlight >= 2) {
        blushhighlight.value = highlight;
        selectable('blushhighlightnext');
    } else if (highlight <= 1) {
        blushhighlight.value = highlight;
        unselectable('blushhighlightprev');
    }
    let primary = api.headColor.blushprimary[color - 1];
    highlight = api.headColor.blushhighlight[highlight - 1];

    emitUpdate('blushColor', primary, highlight);
};

const blushhighlightnext = function () {
    let api = setApi(gender);
    let color = parseInt(blushprimary.value);
    let highlight = parseInt(blushhighlight.value);

    let max = api.headColor.blushhighlight.length;

    highlight++;
    if (highlight >= max) {
        highlight = max;
        blushhighlight.value = highlight;
        unselectable('blushhighlightnext');
        selectable('blushhighlightprev');
    } else {
        blushhighlight.value = highlight;
        selectable('blushhighlightprev');
    }

    let primary = api.headColor.blushprimary[color - 1];
    highlight = api.headColor.blushhighlight[highlight - 1];

    emitUpdate('blushColor', primary, highlight);
};

const beardprimaryprev = function () {
    let api = setApi(gender);
    let color = parseInt(beardprimary.value);

    color--;
    if (color >= 2) {
        beardprimary.value = color;
        beardhighlight.value = color;
        selectable('beardprimarynext');
        selectable('beardhighlightnext');
        selectable('beardhighlightprev');
    } else if (color <= 1) {
        beardprimary.value = color;
        beardhighlight.value = color;
        unselectable('beardprimaryprev');
        unselectable('beardhighlightprev');
    }
    let primary = api.headColor.beardprimary[color - 1];
    highlight = api.headColor.beardhighlight[color - 1];

    emitUpdate('beardColor', primary, highlight);
};

const beardprimarynext = function () {
    let api = setApi(gender);
    let color = parseInt(beardprimary.value);

    let max = api.headColor.beardprimary.length;

    color++;
    if (color >= max) {
        color = max;
        beardprimary.value = color;
        beardhighlight.value = color;
        unselectable('beardprimarynext');
        unselectable('beardhighlightnext');
        selectable('beardprimaryprev');
        selectable('beardhighlightprev');
    } else {
        beardprimary.value = color;
        beardhighlight.value = color;
        selectable('beardprimaryprev');
        selectable('beardhighlightprev');
    }

    let primary = api.headColor.beardprimary[color - 1];
    highlight = api.headColor.beardhighlight[color - 1];

    emitUpdate('beardColor', primary, highlight);
};

const beardhighlightprev = function () {
    let api = setApi(gender);
    let color = parseInt(beardprimary.value);
    let highlight = parseInt(beardhighlight.value);

    highlight--;
    if (highlight >= 2) {
        beardhighlight.value = highlight;
        selectable('beardhighlightnext');
    } else if (highlight <= 1) {
        beardhighlight.value = highlight;
        unselectable('beardhighlightprev');
    }
    let primary = api.headColor.beardprimary[color - 1];
    highlight = api.headColor.beardhighlight[highlight - 1];

    emitUpdate('beardColor', primary, highlight);
};

const beardhighlightnext = function () {
    let api = setApi(gender);
    let color = parseInt(beardprimary.value);
    let highlight = parseInt(beardhighlight.value);

    let max = api.headColor.beardhighlight.length;

    highlight++;
    if (highlight >= max) {
        highlight = max;
        beardhighlight.value = highlight;
        unselectable('beardhighlightnext');
        selectable('beardhighlightprev');
    } else {
        beardhighlight.value = highlight;
        selectable('beardhighlightprev');
    }

    let primary = api.headColor.beardprimary[color - 1];
    highlight = api.headColor.beardhighlight[highlight - 1];

    emitUpdate('beardColor', primary, highlight);
};

const lipstickprimaryprev = function () {
    let api = setApi(gender);
    let color = parseInt(lipstickprimary.value);

    color--;
    if (color >= 2) {
        lipstickprimary.value = color;
        lipstickhighlight.value = color;
        selectable('lipstickprimarynext');
        selectable('lipstickhighlightnext');
        selectable('lipstickhighlightprev');
    } else if (color <= 1) {
        lipstickprimary.value = color;
        lipstickhighlight.value = color;
        unselectable('lipstickprimaryprev');
        unselectable('lipstickhighlightprev');
    }
    let primary = api.headColor.lipstickprimary[color - 1];
    highlight = api.headColor.lipstickhighlight[color - 1];

    emitUpdate('lipstickColor', primary, highlight);
};

const lipstickprimarynext = function () {
    let api = setApi(gender);
    let color = parseInt(lipstickprimary.value);

    let max = api.headColor.lipstickprimary.length;

    color++;
    if (color >= max) {
        color = max;
        lipstickprimary.value = color;
        lipstickhighlight.value = color;
        unselectable('lipstickprimarynext');
        unselectable('lipstickhighlightnext');
        selectable('lipstickprimaryprev');
        selectable('lipstickhighlightprev');
    } else {
        lipstickprimary.value = color;
        lipstickhighlight.value = color;
        selectable('lipstickprimaryprev');
        selectable('lipstickhighlightprev');
    }

    let primary = api.headColor.lipstickprimary[color - 1];
    highlight = api.headColor.lipstickhighlight[color - 1];

    emitUpdate('lipstickColor', primary, highlight);
};

const lipstickhighlightprev = function () {
    let api = setApi(gender);
    let color = parseInt(lipstickprimary.value);
    let highlight = parseInt(lipstickhighlight.value);

    highlight--;
    if (highlight >= 2) {
        lipstickhighlight.value = highlight;
        selectable('lipstickhighlightnext');
    } else if (highlight <= 1) {
        lipstickhighlight.value = highlight;
        unselectable('lipstickhighlightprev');
    }
    let primary = api.headColor.lipstickprimary[color - 1];
    highlight = api.headColor.lipstickhighlight[highlight - 1];

    emitUpdate('lipstickColor', primary, highlight);
};

const lipstickhighlightnext = function () {
    let api = setApi(gender);
    let color = parseInt(lipstickprimary.value);
    let highlight = parseInt(lipstickhighlight.value);

    let max = api.headColor.lipstickhighlight.length;

    highlight++;
    if (highlight >= max) {
        highlight = max;
        lipstickhighlight.value = highlight;
        unselectable('lipstickhighlightnext');
        selectable('lipstickhighlightprev');
    } else {
        lipstickhighlight.value = highlight;
        selectable('lipstickhighlightprev');
    }

    let primary = api.headColor.lipstickprimary[color - 1];
    highlight = api.headColor.lipstickhighlight[highlight - 1];

    emitUpdate('lipstickColor', primary, highlight);
};

const shapefatherprev = function () {
    let api = setApi(gender);
    let shapefatherValue = parseInt(shapefather.value);
    let shapemotherValue = api.pedHeadBlendData.shapemother[parseInt(shapemother.value) - 1];
    let shapemixValue = parseInt(shapemix.value) / 100;
    let skinfatherValue = api.pedHeadBlendData.skinfather[parseInt(skinfather.value) - 1];
    let skinmotherValue = api.pedHeadBlendData.skinmother[parseInt(skinmother.value) - 1];
    let skinmixValue = parseInt(skinmix.value) / 100;

    shapefatherValue--;
    if (shapefatherValue >= 2) {
        shapefather.value = shapefatherValue;
        selectable('shapefathernext');
    } else if (shapefatherValue <= 1) {
        shapefatherValue = 1;
        shapefather.value = shapefatherValue;
        unselectable('shapefatherprev');
        selectable('shapefathernext');
    }

    shapefatherValue = api.pedHeadBlendData.shapefather[shapefatherValue - 1];

    skinUpdate(shapefatherValue, shapemotherValue, shapemixValue, skinfatherValue, skinmotherValue, skinmixValue);
};

const shapefathernext = function () {
    let api = setApi(gender);
    let shapefatherValue = parseInt(shapefather.value);
    let shapemotherValue = api.pedHeadBlendData.shapemother[parseInt(shapemother.value) - 1];
    let shapemixValue = parseInt(shapemix.value) / 100;
    let skinfatherValue = api.pedHeadBlendData.skinfather[parseInt(skinfather.value) - 1];
    let skinmotherValue = api.pedHeadBlendData.skinmother[parseInt(skinmother.value) - 1];
    let skinmixValue = parseInt(skinmix.value) / 100;

    let max = api.pedHeadBlendData.shapefather.length;

    shapefatherValue++;
    if (shapefatherValue <= max) {
        selectable('shapefatherprev');
    } else if (shapefatherValue >= max) {
        shapefatherValue = max;

        unselectable('shapefathernext');
        selectable('shapefatherprev');
    }
    shapefather.value = shapefatherValue;

    shapefatherValue = api.pedHeadBlendData.shapefather[shapefatherValue - 1];
    skinUpdate(shapefatherValue, shapemotherValue, shapemixValue, skinfatherValue, skinmotherValue, skinmixValue);
};

const shapemotherprev = function () {
    let api = setApi(gender);
    let shapefatherValue = api.pedHeadBlendData.shapefather[parseInt(shapefather.value - 1)];
    let shapemotherValue = parseInt(shapemother.value);
    let shapemixValue = parseInt(shapemix.value) / 100;
    let skinfatherValue = api.pedHeadBlendData.skinfather[parseInt(skinfather.value) - 1];
    let skinmotherValue = api.pedHeadBlendData.skinmother[parseInt(skinmother.value) - 1];
    let skinmixValue = parseInt(skinmix.value) / 100;

    shapemotherValue--;
    if (shapemotherValue >= 2) {
        shapemother.value = shapemotherValue;
        selectable('shapemothernext');
    } else if (shapemotherValue <= 1) {
        shapemotherValue = 1;
        shapemother.value = shapemotherValue;
        unselectable('shapemotherprev');
        selectable('shapemothernext');
    }

    shapemotherValue = api.pedHeadBlendData.shapemother[shapemotherValue - 1];

    skinUpdate(shapefatherValue, shapemotherValue, shapemixValue, skinfatherValue, skinmotherValue, skinmixValue);
};

const shapemothernext = function () {
    let api = setApi(gender);
    let shapefatherValue = api.pedHeadBlendData.shapefather[parseInt(shapefather.value - 1)];
    let shapemotherValue = parseInt(shapemother.value);
    let shapemixValue = parseInt(shapemix.value) / 100;
    let skinfatherValue = api.pedHeadBlendData.skinfather[parseInt(skinfather.value) - 1];
    let skinmotherValue = api.pedHeadBlendData.skinmother[parseInt(skinmother.value) - 1];
    let skinmixValue = parseInt(skinmix.value) / 100;

    let max = api.pedHeadBlendData.shapemother.length;

    shapemotherValue++;
    if (shapemotherValue <= max) {
        selectable('shapemotherprev');
    } else if (shapemotherValue >= max) {
        shapemotherValue = max;

        unselectable('shapemothernext');
        selectable('shapemotherprev');
    }
    shapemother.value = shapemotherValue;

    shapemotherValue = api.pedHeadBlendData.shapemother[shapemotherValue - 1];

    skinUpdate(shapefatherValue, shapemotherValue, shapemixValue, skinfatherValue, skinmotherValue, skinmixValue);
};

const skinfatherprev = function () {
    let api = setApi(gender);
    let shapefatherValue = api.pedHeadBlendData.shapefather[parseInt(shapefather.value - 1)];
    let shapemotherValue = api.pedHeadBlendData.shapemother[parseInt(shapemother.value) - 1];
    let shapemixValue = parseInt(shapemix.value) / 100;
    let skinfatherValue = parseInt(skinfather.value);
    let skinmotherValue = api.pedHeadBlendData.skinmother[parseInt(skinmother.value) - 1];
    let skinmixValue = parseInt(skinmix.value) / 100;

    skinfatherValue--;
    if (skinfatherValue >= 2) {
        skinfather.value = skinfatherValue;
        selectable('skinfathernext');
    } else if (skinfatherValue <= 1) {
        skinfatherValue = 1;
        skinfather.value = skinfatherValue;
        unselectable('skinfatherprev');
        selectable('skinfathernext');
    }

    skinfatherValue = api.pedHeadBlendData.skinfather[skinfatherValue - 1];

    skinUpdate(shapefatherValue, shapemotherValue, shapemixValue, skinfatherValue, skinmotherValue, skinmixValue);
};

const skinfathernext = function () {
    let api = setApi(gender);
    let shapefatherValue = api.pedHeadBlendData.shapefather[parseInt(shapefather.value - 1)];
    let shapemotherValue = api.pedHeadBlendData.shapemother[parseInt(shapemother.value) - 1];
    let shapemixValue = parseInt(shapemix.value) / 100;
    let skinfatherValue = parseInt(skinfather.value);
    let skinmotherValue = api.pedHeadBlendData.skinmother[parseInt(skinmother.value) - 1];
    let skinmixValue = parseInt(skinmix.value) / 100;

    let max = api.pedHeadBlendData.skinfather.length;

    skinfatherValue++;
    if (skinfatherValue <= max) {
        selectable('skinfatherprev');
    } else if (skinfatherValue >= max) {
        skinfatherValue = max;

        unselectable('skinfathernext');
        selectable('skinfatherprev');
    }
    skinfather.value = skinfatherValue;

    skinfatherValue = api.pedHeadBlendData.skinfather[skinfatherValue - 1];

    skinUpdate(shapefatherValue, shapemotherValue, shapemixValue, skinfatherValue, skinmotherValue, skinmixValue);
};

const skinmotherprev = function () {
    let api = setApi(gender);
    let shapefatherValue = api.pedHeadBlendData.shapefather[parseInt(shapefather.value - 1)];
    let shapemotherValue = api.pedHeadBlendData.shapemother[parseInt(shapemother.value) - 1];
    let shapemixValue = parseInt(shapemix.value) / 100;
    let skinfatherValue = api.pedHeadBlendData.skinfather[parseInt(skinfather.value) - 1];
    let skinmotherValue = parseInt(skinmother.value);
    let skinmixValue = parseInt(skinmix.value) / 100;

    skinmotherValue--;
    if (skinmotherValue >= 2) {
        skinmother.value = skinmotherValue;
        selectable('skinmothernext');
    } else if (skinmotherValue <= 1) {
        skinmotherValue = 1;
        skinmother.value = skinmotherValue;
        unselectable('skinmotherprev');
        selectable('skinmothernext');
    }

    skinmotherValue = api.pedHeadBlendData.skinmother[skinmotherValue - 1];

    skinUpdate(shapefatherValue, shapemotherValue, shapemixValue, skinfatherValue, skinmotherValue, skinmixValue);
};

const skinmothernext = function () {
    let api = setApi(gender);
    let shapefatherValue = api.pedHeadBlendData.shapefather[parseInt(shapefather.value - 1)];
    let shapemotherValue = api.pedHeadBlendData.shapefather[parseInt(shapemother.value) - 1];
    let shapemixValue = parseInt(shapemix.value) / 100;
    let skinfatherValue = api.pedHeadBlendData.skinfather[parseInt(skinfather.value) - 1];
    let skinmotherValue = parseInt(skinmother.value);
    let skinmixValue = parseInt(skinmix.value) / 100;
    let max = api.pedHeadBlendData.shapefather.length;

    skinmotherValue++;
    if (skinmotherValue <= max) {
        selectable('skinmotherprev');
    } else if (skinmotherValue >= max) {
        skinmotherValue = max;

        unselectable('skinmothernext');
        selectable('skinmotherprev');
    }
    skinmother.value = skinmotherValue;

    skinmotherValue = api.pedHeadBlendData.skinmother[skinmotherValue - 1];
    skinUpdate(shapefatherValue, shapemotherValue, shapemixValue, skinfatherValue, skinmotherValue, skinmixValue);
};

const hatsdrawprev = function () {
    let api = setApi(gender);

    let drawvalue = parseInt(hatsdraw.value);

    if (drawvalue >= 2) {
        drawvalue--;

        hatsdraw.value = drawvalue;

        let draw = api.propIndex.hats[drawvalue - 1].draw;
        let texture = api.propIndex.hats[drawvalue - 1].texture[0];

        emitUpdate('hats', draw, texture);

        // texture 1 setzten
        hatstexture.value = 1;

        //button setzten

        selectable('hatsdrawnext');

        if (api.propIndex.hats[drawvalue - 1].texture.length == 1) {
            unselectable('hatstextureprev');
            unselectable('hatstexturenext');
        } else {
            unselectable('hatstextureprev');
            selectable('hatstexturenext');
        }

        if (drawvalue <= 1) {
            unselectable('hatsdrawprev');
        }
    } else if (drawvalue <= 1) {
        drawvalue = 1;

        hatsdraw.value = drawvalue;

        unselectable('hatsdrawprev');
    }
};

const hatsdrawnext = function () {
    let api = setApi(gender);

    let drawvalue = parseInt(hatsdraw.value);

    let max = api.propIndex.hats.length;

    if (drawvalue <= max) {
        drawvalue++;

        hatsdraw.value = drawvalue;

        let draw = api.propIndex.hats[drawvalue - 1].draw;
        let texture = api.propIndex.hats[drawvalue - 1].texture[0];

        emitUpdate('hats', draw, texture);

        // texture "1" setzten
        hatstexture.value = 1;

        //button setzten

        selectable('hatsdrawprev');

        if (api.propIndex.hats[drawvalue - 1].texture.length == 1) {
            unselectable('hatstextureprev');
            unselectable('hatstexturenext');
        } else {
            selectable('hatstexturenext');
            unselectable('hatstextureprev');
        }

        if (drawvalue >= max) {
            unselectable('hatsdrawnext');
        }
    } else if (drawvalue >= max) {
        drawvalue = max;

        hatsdraw.value = drawvalue;

        unselectable('hatsdrawnext');
    }
};

const hatstexturenext = function () {
    let api = setApi(gender);

    let drawvalue = parseInt(hatsdraw.value);

    let textureValue = parseInt(hatstexture.value);

    let max = api.propIndex.hats[drawvalue - 1].texture.length;

    if (textureValue < max) {
        textureValue++;

        hatstexture.value = textureValue;

        let draw = api.propIndex.hats[drawvalue - 1].draw;
        let texture = api.propIndex.hats[drawvalue - 1].texture[textureValue - 1];

        emitUpdate('hats', draw, texture);

        // Buttons

        if (textureValue == max) {
            unselectable('hatstexturenext');
            selectable('hatstextureprev');
        } else {
            selectable('hatstextureprev');
        }
    } else if (textureValue >= max) {
        unselectable('hatstexturenext');

        let draw = api.propIndex.hats[drawvalue - 1].draw;
        let texture = api.propIndex.hats[drawvalue - 1].texture[textureValue - 1];

        emitUpdate('hats', draw, texture);
    }
};

const hatstextureprev = function () {
    let api = setApi(gender);

    let drawvalue = parseInt(hatsdraw.value);

    let textureValue = parseInt(hatstexture.value);

    let max = api.propIndex.hats[drawvalue - 1].texture.length;

    if (textureValue >= 2) {
        textureValue--;

        hatstexture.value = textureValue;

        let draw = api.propIndex.hats[drawvalue - 1].draw;
        let texture = api.propIndex.hats[drawvalue - 1].texture[textureValue - 1];

        emitUpdate('hats', draw, texture);

        // Buttons

        if (textureValue == 1) {
            unselectable('hatstextureprev');

            selectable('hatstexturenext');
        } else {
            selectable('hatstexturenext');
        }
    } else if (textureValue <= 1) {
        unselectable('hatstextureprev');

        let draw = api.propIndex.hats[drawvalue - 1].draw;
        let texture = api.propIndex.hats[drawvalue - 1].texture[textureValue - 1];

        emitUpdate('hats', draw, texture);
    }
};

//glasses
const glassesdrawprev = function () {
    let api = setApi(gender);

    let drawvalue = parseInt(glassesdraw.value);

    if (drawvalue >= 2) {
        drawvalue--;

        glassesdraw.value = drawvalue;

        let draw = api.propIndex.glasses[drawvalue - 1].draw;
        let texture = api.propIndex.glasses[drawvalue - 1].texture[0];

        emitUpdate('glasses', draw, texture);

        // texture 1 setzten
        glassestexture.value = 1;

        //button setzten

        selectable('glassesdrawnext');

        if (api.propIndex.glasses[drawvalue - 1].texture.length == 1) {
            unselectable('glassestextureprev');
            unselectable('glassestexturenext');
        } else {
            unselectable('glassestextureprev');
            selectable('glassestexturenext');
        }

        if (drawvalue <= 1) {
            unselectable('glassesdrawprev');
        }
    } else if (drawvalue <= 1) {
        drawvalue = 1;

        glassesdraw.value = drawvalue;

        unselectable('glassesdrawprev');
    }
};

const glassesdrawnext = function () {
    let api = setApi(gender);

    let drawvalue = parseInt(glassesdraw.value);

    let max = api.propIndex.glasses.length;

    if (drawvalue <= max) {
        drawvalue++;

        glassesdraw.value = drawvalue;

        let draw = api.propIndex.glasses[drawvalue - 1].draw;
        let texture = api.propIndex.glasses[drawvalue - 1].texture[0];

        emitUpdate('glasses', draw, texture);

        // texture "1" setzten
        glassestexture.value = 1;

        //button setzten

        selectable('glassesdrawprev');

        if (api.propIndex.glasses[drawvalue - 1].texture.length == 1) {
            unselectable('glassestextureprev');
            unselectable('glassestexturenext');
        } else {
            selectable('glassestexturenext');
            unselectable('glassestextureprev');
        }

        if (drawvalue >= max) {
            unselectable('glassesdrawnext');
        }
    } else if (drawvalue >= max) {
        drawvalue = max;

        glassesdraw.value = drawvalue;

        unselectable('glassesdrawnext');
    }
};

const glassestexturenext = function () {
    let api = setApi(gender);

    let drawvalue = parseInt(glassesdraw.value);

    let textureValue = parseInt(glassestexture.value);

    let max = api.propIndex.glasses[drawvalue - 1].texture.length;

    if (textureValue < max) {
        textureValue++;

        glassestexture.value = textureValue;

        let draw = api.propIndex.glasses[drawvalue - 1].draw;
        let texture = api.propIndex.glasses[drawvalue - 1].texture[textureValue - 1];

        emitUpdate('glasses', draw, texture);

        // Buttons

        if (textureValue == max) {
            unselectable('glassestexturenext');
            selectable('glassestextureprev');
        } else {
            selectable('glassestextureprev');
        }
    } else if (textureValue >= max) {
        unselectable('glassestexturenext');

        let draw = api.propIndex.glasses[drawvalue - 1].draw;
        let texture = api.propIndex.glasses[drawvalue - 1].texture[textureValue - 1];

        emitUpdate('glasses', draw, texture);
    }
};

const glassestextureprev = function () {
    let api = setApi(gender);

    let drawvalue = parseInt(glassesdraw.value);

    let textureValue = parseInt(glassestexture.value);

    let max = api.propIndex.glasses[drawvalue - 1].texture.length;

    if (textureValue >= 2) {
        textureValue--;

        glassestexture.value = textureValue;

        let draw = api.propIndex.glasses[drawvalue - 1].draw;
        let texture = api.propIndex.glasses[drawvalue - 1].texture[textureValue - 1];

        emitUpdate('glasses', draw, texture);

        // Buttons

        if (textureValue == 1) {
            unselectable('glassestextureprev');

            selectable('glassestexturenext');
        } else {
            selectable('glassestexturenext');
        }
    } else if (textureValue <= 1) {
        unselectable('glassestextureprev');

        let draw = api.propIndex.glasses[drawvalue - 1].draw;
        let texture = api.propIndex.glasses[drawvalue - 1].texture[textureValue - 1];

        emitUpdate('glasses', draw, texture);
    }
};

const earsdrawprev = function () {
    let api = setApi(gender);

    let drawvalue = parseInt(earsdraw.value);

    if (drawvalue >= 2) {
        drawvalue--;

        earsdraw.value = drawvalue;

        let draw = api.propIndex.ears[drawvalue - 1].draw;
        let texture = api.propIndex.ears[drawvalue - 1].texture[0];

        emitUpdate('ears', draw, texture);

        // texture 1 setzten
        earstexture.value = 1;

        //button setzten

        selectable('earsdrawnext');

        if (api.propIndex.ears[drawvalue - 1].texture.length == 1) {
            unselectable('earstextureprev');
            unselectable('earstexturenext');
        } else {
            unselectable('earstextureprev');
            selectable('earstexturenext');
        }

        if (drawvalue <= 1) {
            unselectable('earsdrawprev');
        }
    } else if (drawvalue <= 1) {
        drawvalue = 1;

        earsdraw.value = drawvalue;

        unselectable('earsdrawprev');
    }
};

const earsdrawnext = function () {
    let api = setApi(gender);

    let drawvalue = parseInt(earsdraw.value);

    let max = api.propIndex.ears.length;

    if (drawvalue <= max) {
        drawvalue++;

        earsdraw.value = drawvalue;

        let draw = api.propIndex.ears[drawvalue - 1].draw;
        let texture = api.propIndex.ears[drawvalue - 1].texture[0];

        emitUpdate('ears', draw, texture);

        // texture "1" setzten
        earstexture.value = 1;

        //button setzten

        selectable('earsdrawprev');

        if (api.propIndex.ears[drawvalue - 1].texture.length == 1) {
            unselectable('earstextureprev');
            unselectable('earstexturenext');
        } else {
            selectable('earstexturenext');
            unselectable('earstextureprev');
        }

        if (drawvalue >= max) {
            unselectable('earsdrawnext');
        }
    } else if (drawvalue >= max) {
        drawvalue = max;

        earsdraw.value = drawvalue;

        unselectable('earsdrawnext');
    }
};

const earstexturenext = function () {
    let api = setApi(gender);

    let drawvalue = parseInt(earsdraw.value);

    let textureValue = parseInt(earstexture.value);

    let max = api.propIndex.ears[drawvalue - 1].texture.length;

    if (textureValue < max) {
        textureValue++;

        earstexture.value = textureValue;

        let draw = api.propIndex.ears[drawvalue - 1].draw;
        let texture = api.propIndex.ears[drawvalue - 1].texture[textureValue - 1];

        emitUpdate('ears', draw, texture);

        // Buttons

        if (textureValue == max) {
            unselectable('earstexturenext');
            selectable('earstextureprev');
        } else {
            selectable('earstextureprev');
        }
    } else if (textureValue >= max) {
        unselectable('earstexturenext');

        let draw = api.propIndex.ears[drawvalue - 1].draw;
        let texture = api.propIndex.ears[drawvalue - 1].texture[textureValue - 1];

        emitUpdate('ears', draw, texture);
    }
};

const earstextureprev = function () {
    let api = setApi(gender);

    let drawvalue = parseInt(earsdraw.value);

    let textureValue = parseInt(earstexture.value);

    let max = api.propIndex.ears[drawvalue - 1].texture.length;

    if (textureValue >= 2) {
        textureValue--;

        earstexture.value = textureValue;

        let draw = api.propIndex.ears[drawvalue - 1].draw;
        let texture = api.propIndex.ears[drawvalue - 1].texture[textureValue - 1];

        emitUpdate('ears', draw, texture);

        // Buttons

        if (textureValue == 1) {
            unselectable('earstextureprev');

            selectable('earstexturenext');
        } else {
            selectable('earstexturenext');
        }
    } else if (textureValue <= 1) {
        unselectable('earstextureprev');

        let draw = api.propIndex.ears[drawvalue - 1].draw;
        let texture = api.propIndex.ears[drawvalue - 1].texture[textureValue - 1];

        emitUpdate('ears', draw, texture);
    }
};

const watchesdrawprev = function () {
    let api = setApi(gender);

    let drawvalue = parseInt(watchesdraw.value);

    if (drawvalue >= 2) {
        drawvalue--;

        watchesdraw.value = drawvalue;

        let draw = api.propIndex.watches[drawvalue - 1].draw;
        let texture = api.propIndex.watches[drawvalue - 1].texture[0];

        emitUpdate('watches', draw, texture);

        // texture 1 setzten
        watchestexture.value = 1;

        //button setzten

        selectable('watchesdrawnext');

        if (api.propIndex.watches[drawvalue - 1].texture.length == 1) {
            unselectable('watchestextureprev');
            unselectable('watchestexturenext');
        } else {
            unselectable('watchestextureprev');
            selectable('watchestexturenext');
        }

        if (drawvalue <= 1) {
            unselectable('watchesdrawprev');
        }
    } else if (drawvalue <= 1) {
        drawvalue = 1;

        watchesdraw.value = drawvalue;

        unselectable('watchesdrawprev');
    }
};

const watchesdrawnext = function () {
    let api = setApi(gender);

    let drawvalue = parseInt(watchesdraw.value);

    let max = api.propIndex.watches.length;

    if (drawvalue <= max) {
        drawvalue++;

        watchesdraw.value = drawvalue;

        let draw = api.propIndex.watches[drawvalue - 1].draw;
        let texture = api.propIndex.watches[drawvalue - 1].texture[0];

        emitUpdate('watches', draw, texture);

        // texture "1" setzten
        watchestexture.value = 1;

        //button setzten

        selectable('watchesdrawprev');

        if (api.propIndex.watches[drawvalue - 1].texture.length == 1) {
            unselectable('watchestextureprev');
            unselectable('watchestexturenext');
        } else {
            selectable('watchestexturenext');
            unselectable('watchestextureprev');
        }

        if (drawvalue >= max) {
            unselectable('watchesdrawnext');
        }
    } else if (drawvalue >= max) {
        drawvalue = max;

        watchesdraw.value = drawvalue;

        unselectable('watchesdrawnext');
    }
};

const watchestexturenext = function () {
    let api = setApi(gender);

    let drawvalue = parseInt(watchesdraw.value);

    let textureValue = parseInt(watchestexture.value);

    let max = api.propIndex.watches[drawvalue - 1].texture.length;

    if (textureValue < max) {
        textureValue++;

        watchestexture.value = textureValue;

        let draw = api.propIndex.watches[drawvalue - 1].draw;
        let texture = api.propIndex.watches[drawvalue - 1].texture[textureValue - 1];

        emitUpdate('watches', draw, texture);

        // Buttons

        if (textureValue == max) {
            unselectable('watchestexturenext');
            selectable('watchestextureprev');
        } else {
            selectable('watchestextureprev');
        }
    } else if (textureValue >= max) {
        unselectable('watchestexturenext');

        let draw = api.propIndex.watches[drawvalue - 1].draw;
        let texture = api.propIndex.watches[drawvalue - 1].texture[textureValue - 1];

        emitUpdate('watches', draw, texture);
    }
};

const watchestextureprev = function () {
    let api = setApi(gender);

    let drawvalue = parseInt(watchesdraw.value);

    let textureValue = parseInt(watchestexture.value);

    let max = api.propIndex.watches[drawvalue - 1].texture.length;

    if (textureValue >= 2) {
        textureValue--;

        watchestexture.value = textureValue;

        let draw = api.propIndex.watches[drawvalue - 1].draw;
        let texture = api.propIndex.watches[drawvalue - 1].texture[textureValue - 1];

        emitUpdate('watches', draw, texture);

        // Buttons

        if (textureValue == 1) {
            unselectable('watchestextureprev');

            selectable('watchestexturenext');
        } else {
            selectable('watchestexturenext');
        }
    } else if (textureValue <= 1) {
        unselectable('watchestextureprev');

        let draw = api.propIndex.watches[drawvalue - 1].draw;
        let texture = api.propIndex.watches[drawvalue - 1].texture[textureValue - 1];

        emitUpdate('watches', draw, texture);
    }
};

const braceletsdrawprev = function () {
    let api = setApi(gender);

    let drawvalue = parseInt(braceletsdraw.value);

    if (drawvalue >= 2) {
        drawvalue--;

        braceletsdraw.value = drawvalue;

        let draw = api.propIndex.bracelets[drawvalue - 1].draw;
        let texture = api.propIndex.bracelets[drawvalue - 1].texture[0];

        emitUpdate('bracelets', draw, texture);

        // texture 1 setzten
        braceletstexture.value = 1;

        //button setzten

        selectable('braceletsdrawnext');

        if (api.propIndex.bracelets[drawvalue - 1].texture.length == 1) {
            unselectable('braceletstextureprev');
            unselectable('braceletstexturenext');
        } else {
            unselectable('braceletstextureprev');
            selectable('braceletstexturenext');
        }

        if (drawvalue <= 1) {
            unselectable('braceletsdrawprev');
        }
    } else if (drawvalue <= 1) {
        drawvalue = 1;

        braceletsdraw.value = drawvalue;

        unselectable('braceletsdrawprev');
    }
};

const braceletsdrawnext = function () {
    let api = setApi(gender);

    let drawvalue = parseInt(braceletsdraw.value);

    let max = api.propIndex.bracelets.length;

    if (drawvalue <= max) {
        drawvalue++;

        braceletsdraw.value = drawvalue;

        let draw = api.propIndex.bracelets[drawvalue - 1].draw;
        let texture = api.propIndex.bracelets[drawvalue - 1].texture[0];

        emitUpdate('bracelets', draw, texture);

        // texture "1" setzten
        braceletstexture.value = 1;

        //button setzten

        selectable('braceletsdrawprev');

        if (api.propIndex.bracelets[drawvalue - 1].texture.length == 1) {
            unselectable('braceletstextureprev');
            unselectable('braceletstexturenext');
        } else {
            selectable('braceletstexturenext');
            unselectable('braceletstextureprev');
        }

        if (drawvalue >= max) {
            unselectable('braceletsdrawnext');
        }
    } else if (drawvalue >= max) {
        drawvalue = max;

        braceletsdraw.value = drawvalue;

        unselectable('braceletsdrawnext');
    }
};

const braceletstexturenext = function () {
    let api = setApi(gender);

    let drawvalue = parseInt(braceletsdraw.value);

    let textureValue = parseInt(braceletstexture.value);

    let max = api.propIndex.bracelets[drawvalue - 1].texture.length;

    if (textureValue < max) {
        textureValue++;

        braceletstexture.value = textureValue;

        let draw = api.propIndex.bracelets[drawvalue - 1].draw;
        let texture = api.propIndex.bracelets[drawvalue - 1].texture[textureValue - 1];

        emitUpdate('bracelets', draw, texture);

        // Buttons

        if (textureValue == max) {
            unselectable('braceletstexturenext');
            selectable('braceletstextureprev');
        } else {
            selectable('braceletstextureprev');
        }
    } else if (textureValue >= max) {
        unselectable('braceletstexturenext');

        let draw = api.propIndex.bracelets[drawvalue - 1].draw;
        let texture = api.propIndex.bracelets[drawvalue - 1].texture[textureValue - 1];

        emitUpdate('bracelets', draw, texture);
    }
};

const braceletstextureprev = function () {
    let api = setApi(gender);

    let drawvalue = parseInt(braceletsdraw.value);

    let textureValue = parseInt(braceletstexture.value);

    let max = api.propIndex.bracelets[drawvalue - 1].texture.length;

    if (textureValue >= 2) {
        textureValue--;

        braceletstexture.value = textureValue;

        let draw = api.propIndex.bracelets[drawvalue - 1].draw;
        let texture = api.propIndex.bracelets[drawvalue - 1].texture[textureValue - 1];

        emitUpdate('bracelets', draw, texture);

        // Buttons

        if (textureValue == 1) {
            unselectable('braceletstextureprev');

            selectable('braceletstexturenext');
        } else {
            selectable('braceletstexturenext');
        }
    } else if (textureValue <= 1) {
        unselectable('braceletstextureprev');

        let draw = api.propIndex.bracelets[drawvalue - 1].draw;
        let texture = api.propIndex.bracelets[drawvalue - 1].texture[textureValue - 1];

        emitUpdate('bracelets', draw, texture);
    }
};

let finish = function () {
    let all = [maskDraw, maskTexture, hairDraw, legsDraw, legsTexture, shoesDraw, shoesTexture, accessoriesDraw, accessoriesTexture, undershirtDraw, undershirtTexture, decalsDraw, decalsTexture, topsDraw, topsTexture, blemishes, blemishesOpacity, facialHair, facialHairOpacity, eyebrows, eyebrowsOpacity, ageing, ageingOpacity, makeup, makeupOpacity, blush, blushOpacity, complexion, complexionOpacity, sunDamage, sunDamageOpacity, lipstick, lipstickOpacity, freckles, frecklesOpacity, chestHair, chestHairOpacity, bodyBlemishes, bodyBlemishesOpacity, addbodyBlemishes, addbodyBlemishesOpacity, primaryColor, colorHighlight, eyeColor, eyebrowsprimary, eyebrowshighlight, chesthairprimary, chesthairhighlight, blushprimary, blushhighlight, beardprimary, beardhighlight, lipstickprimary, lipstickhighlight, shapefather, shapemother, shapemix, skinfather, skinmother, skinmix, nosewidth, noseheigh, noselength, noseback, nosetip, nosebridge, browheight, browwidth, cheekbonesheight, cheekboneswidth, cheekwidth, eyelid, lips, jawwidth, jawheight, chinlength, chinpos, chinwidth, chinshape, neckwidth, hatsdraw, hatstexture, glassesdraw, glassestexture, earsdraw, earstexture, watchesdraw, watchestexture, braceletsdraw, braceletstexture];

    let allValue = [];

    document.getElementById('errormsg').innerHTML = '';

    all.forEach((el) => {
        if (el.value == undefined) {
            document.getElementById('errormsg').innerHTML = this.innerHTMl + `Bitte überprüfe alle diene Daten. <br /> Fehler bei: ${el}`;
        } else {
            if (true) allValue.push(parseInt(el.value));
        }
    });

    console.log(allValue);

    if (all.length === allValue.length) {
        //check age, Name, FamilyName
        if (forname.value != '' || lastname.value != '') {
            //check age
            let above18 = new Date(Date.now());
            above18.setFullYear(above18.getFullYear() - 18);

            let checkDate = new Date(dateOfBirth.value);

            if (above18.getTime() - checkDate.getTime() > 0) {
                console.log(`all: ${all.length}, allValue. ${allValue.length}`);
                let toSave = allfromApi(allValue);
                alt.emit('editor:finish', toSave);
            } else {
                document.getElementById('errormsg').innerHTML = this.innerHTMl + `Du musst mindestens 18 sein!`;
            }
        } else {
            document.getElementById('errormsg').innerHTML = this.innerHTMl + `Bitte Überprüfe deine Namen!`;
        }
    }
};

let allfromApi = function (list) {
    let api = setApi(gender);

    //pedComponent
    //mask
    let genderskin;
    if (gender == 'male') {
        genderskin = 'mp_m_freemode_01';
    } else if (gender == 'female') {
        genderskin = 'mp_f_freemode_01';
    }

    console.log(list[59]);
    return {
        forname: forname.value,
        lastname: lastname.value,
        height: height.value,
        dateOfBirth: dateOfBirth.value,

        genderskin: genderskin,

        mask: [api.pedComponent.mask[list[0] - 1].draw, api.pedComponent.mask[list[0] - 1].texture[list[1] - 1]],
        hair: [api.pedComponent.hair[list[2] - 1].draw],
        legs: [api.pedComponent.legs[list[3] - 1].draw, api.pedComponent.legs[list[3]].texture[list[4] - 1]],
        shoes: [api.pedComponent.shoes[list[5] - 1].draw, api.pedComponent.shoes[list[5]].texture[list[6] - 1]],
        accessories: [api.pedComponent.accessories[list[7] - 1].draw, api.pedComponent.accessories[list[7] - 1].texture[list[8] - 1]],
        undershirt: [api.pedComponent.undershirt[list[9] - 1].draw, api.pedComponent.undershirt[list[9] - 1].texture[list[10] - 1]],
        decals: [api.pedComponent.decals[list[11] - 1].draw, api.pedComponent.decals[list[11] - 1].texture[list[12] - 1]],
        tops: [api.pedComponent.tops[list[13] - 1].draw, api.pedComponent.tops[list[13] - 1].texture[list[14] - 1]],
        torso: [api.pedComponent.tops[list[13] - 1].torso],

        blemishes: [api.headOverlay.blemishes[list[15] - 1], list[16] / 100],
        facialHair: [api.headOverlay.facialHair[list[17] - 1], list[18] / 100],
        eyebrows: [api.headOverlay.eyebrows[list[19] - 1], list[20] / 100],
        ageing: [api.headOverlay.ageing[list[21] - 1], list[22] / 100],
        makeup: [api.headOverlay.makeup[list[23] - 1], list[24] / 100],
        blush: [api.headOverlay.blush[list[25] - 1], list[26] / 100],
        complexion: [api.headOverlay.complexion[list[27] - 1], list[28] / 100],
        sunDamage: [api.headOverlay.sunDamage[list[29] - 1], list[30] / 100],
        lipstick: [api.headOverlay.lipstick[list[31] - 1], list[32] / 100],
        frackles: [api.headOverlay.frackles[list[33] - 1], list[34] / 100],
        chestHair: [api.headOverlay.chestHair[list[35] - 1], list[36] / 100],
        bodyBlemishes: [api.headOverlay.bodyBlemishes[list[37] - 1], list[38] / 100],
        addbodyBlemishes: [api.headOverlay.addbodyBlemishes[list[39] - 1], list[40] / 100],

        hairColor: [api.hairColor.primary[list[41] - 1], api.hairColor.highlight[list[42] - 1]],

        eyeColor: api.eyeColor.color[list[43] - 1],

        eyebrowscolor: [api.headColor.eyebrowsprimary[list[44] - 1], api.headColor.eyebrowshighlight[list[45] - 1]],
        chesthaircolor: [api.headColor.chesthairprimary[list[46] - 1], api.headColor.chesthairhighlight[list[47] - 1]],
        blushcolor: [api.headColor.blushprimary[list[48] - 1], api.headColor.blushhighlight[list[49] - 1]],
        beardcolor: [api.headColor.beardprimary[list[50] - 1], api.headColor.beardhighlight[list[51] - 1]],
        lipstickcolor: [api.headColor.lipstickprimary[list[52] - 1], api.headColor.lipstickhighlight[list[53] - 1]], //52

        parents: [api.pedHeadBlendData.shapemother[list[54] - 1], api.pedHeadBlendData.shapefather[list[55] - 1], list[56] / 100, api.pedHeadBlendData.skinmother[list[57] - 1], api.pedHeadBlendData.skinfather[list[58] - 1], list[59] / 100],

        nosewith: (list[60] - 100) / 100,
        noseheigh: (list[61] - 100) / 100,
        noselength: (list[62] - 100) / 100,
        noseback: (list[63] - 100) / 100,
        nosetip: (list[64] - 100) / 100,
        nosebridge: (list[65] - 100) / 100,
        browheight: (list[66] - 100) / 100,
        browwidth: (list[67] - 100) / 100,
        cheekbonesheight: (list[68] - 100) / 100,
        cheekboneswidth: (list[69] - 100) / 100,
        cheekwidth: (list[70] - 100) / 100,
        eyelid: (list[71] - 100) / 100,
        lips: (list[72] - 100) / 100,
        jawwidth: (list[73] - 100) / 100,
        jawheight: (list[74] - 100) / 100,
        chinlength: (list[75] - 100) / 100,
        chinpos: (list[76] - 100) / 100,
        chinwidth: (list[77] - 100) / 100,
        chinshape: (list[78] - 100) / 100,
        neckwidth: (list[79] - 100) / 100,

        hats: [api.propIndex.hats[list[80] - 1].draw, api.propIndex.hats[list[80] - 1].texture[list[81] - 1]],
        glasses: [api.propIndex.glasses[list[82] - 1].draw, api.propIndex.glasses[list[82] - 1].texture[list[83] - 1]],
        ears: [api.propIndex.ears[list[84] - 1].draw, api.propIndex.ears[list[84] - 1].texture[list[85] - 1]],
        watches: [api.propIndex.watches[list[86] - 1].draw, api.propIndex.watches[list[86] - 1].texture[list[87] - 1]],
        bracelets: [api.propIndex.watches[list[88] - 1].draw, api.propIndex.watches[list[88] - 1].texture[list[89] - 1]],

        //Roleplay Data (Defaults)
        stamina: 1000,
        saturation: 100,
        hydration: 100,
        toilet: Math.floor(Math.random() * 80),
        cash: 1000,
        health: 200,
        armour: 0,
        dirty: 0,
        position: undefined,
        hotkeys: [], //todo vordefinieren
        inventory: [], //todo wasser + brot hinzufügen (kleine mänge)
        job: undefined,
        jobrank: 0,
        gang: undefined,
        gangrank: 0,
        bank: 0,
        paycheck: [],
        working: [false],
        housing: undefined,
        inHouse: undefined,
        alc: 0,
        drug: 0,
        energy: 0,
        drinkedenegry: 0,
        dimension: 0,
        persoID: undefined,
        phone: undefined,
        licence: [{ type: 1 }], //vorübergehender Führerschein
        garage: 0,
        death: [false],
        lastupdate: Date.now(),
    };
};
