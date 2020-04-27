import * as alt from 'alt';
import * as native from 'natives';


//DEATH_FAIL_IN_EFFECT_SHAKE
//DRUNK_SHAKE
alt.onServer('taser', (time) => {
    time = Math.random() * 50000;
    alt.log(time);
    native.shakeGameplayCam('DRUNK_SHAKE', 2);
    alt.setTimeout(() => { 
        native.stopGameplayCamShaking(true);
     }, time);
});

