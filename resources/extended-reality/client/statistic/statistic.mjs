import * as alt from 'alt';
import * as native from 'natives';

alt.onServer('statistic:start', () => {
    alt.setInterval(() => {
        alt.emitServer('statistic:addmin', native.scGetNickname());
    }, 60000);
});
