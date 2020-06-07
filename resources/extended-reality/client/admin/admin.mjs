import * as alt from 'alt-client';
import * as native from 'natives';

alt.onServer('ipls:remove', (ipl) => {
    alt.removeIpl(ipl);
});

alt.onServer('ipls:add', (ipl) => {
    alt.requestIpl(ipl);
});
