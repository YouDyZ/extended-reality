
const audio_noose_siren = new Audio('./audio/noose_siren.mp3');
//const noose_siren = document.getElementById('noose_siren');

alt.on('play:noose_siren', () => {
    audio_noose_siren.play();
    //noose.play();
});

const audio_noose_start = new Audio('./audio/noose_start.mp3');
//const noose_start = document.getElementById('noose_start');

alt.on('play:noose_start', () => {
    audio_noose_start.play();
});