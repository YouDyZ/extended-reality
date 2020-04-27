import * as alt from 'alt';
import * as native from 'natives';
//resources/extended-reality\client\vehicle\vehicle.mjs
import * as vehicle from '/client/vehicle/vehicle.mjs';
import * as status from '/client/effects/effects.mjs';
import * as blips from '/client/blips/blips.mjs';
import * as speedo from '/client/speedometer/speedo.mjs';
import * as ipl from '/client/ipls/ipls.mjs';
import * as login from '/client/login/login.mjs';
//import * as hud from '/client/hud/hud.mjs';
import * as whitelist from '/client/whitelist/whitelist.mjs';
//resources\extended-reality\client\charedit\charedit.mjs
import * as charedit from '/client/charedit/charedit.mjs';
import * as charselect from '/client/charselect/charselect.mjs';
import * as statistic from '/client/statistic/statistic.mjs';

alt.onServer('vanish', (toggle) => {
    alt.log(toggle);
    if (toggle == true) {
        native.setEntityAlpha(alt.Player.local.ScriptID, 255, true);
        return;
    } else if (toggle == false) {
        native.setEntityAlpha(alt.Player.local.ScriptID, 0, true);
        return;
    }
    alt.log('error');
});
