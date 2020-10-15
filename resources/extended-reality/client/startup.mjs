import * as alt from 'alt';
import * as native from 'natives';
//resources/extended-reality\client\vehicle\vehicle.mjs
import * as vehicle from './vehicle/vehicle.mjs';
import * as status from './effects/effects.mjs';
import * as blips from './blips/blips.mjs';
import * as speedo from './speedometer/speedo.mjs';
import * as ipl from './ipls/ipls.mjs';
import * as login from './login/login.mjs';
//import * as hud from './hud/hud.mjs';
import * as whitelist from './whitelist/whitelist.mjs';
//resources\extended-reality\client\charedit\charedit.mjs
//import * as charedit from './charedit/charedit.mjs';
//import * as charselect from './charselect/charselect.mjs';
import * as statistic from './statistic/statistic.mjs';
import * as attachment from './attachment/attachment.mjs';
import * as admin from './admin/admin.mjs';

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
