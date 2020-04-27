player.playAnimation = (dictionary, name, durationInMS, flag) => {
    alt.emitClient(
        player,
        'animation:PlayAnimation',
        player,
        dictionary,
        name,
        durationInMS,
        flag
    );
};