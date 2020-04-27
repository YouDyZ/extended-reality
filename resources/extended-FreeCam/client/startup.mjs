import * as alt from 'alt';
import * as native from 'natives';

alt.onServer('freecam:enter', (x, y, z) => {
    alt.log(`x: ${x}, y: ${y}, z: ${z}`);
});

alt.onServer('freecam:stop', () => {
    alt.log('Stopped');
});
