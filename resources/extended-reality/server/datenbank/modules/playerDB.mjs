import mongoose from 'mongoose';

export const PlayerSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            unique: [true, 'Dienser Name ist Bereits vergeben'],
            required: [true, 'Du brauchst einen Namen'],
        },
        social: {
            type: String,
            unique: true,
            required: [true, 'Du brauchst eine SocialID'],
        },
        pw: {
            type: String,
            required: [true, 'Du benötigst ein Passwort!'],
        },
        whitelisted: {
            type: Boolean,
            default: false,
            required: true,
        },
        character: {
            type: [String],
            required: true,
            default: [],
        },
        banstate: {
            type: Array,
        },
        forum: {
            type: String,
            required: [true, 'Du musst dein Forumname angeben.'],
            unique: [true, 'Der Name ist bereits Registriert'],
        },
        teamspeak: {
            type: String,
            required: [true, 'Du brauchst deine TeamspeakID'],
            unique: [true, 'Diese TeamspeakID ist bereits registriert!'],
        },
        rank: {
            type: Number,
            required: true,
            default: 0,
            //normal: 0, supporter: 1, Admin: 2, Leitung: 3, PL: 4
        },
        uptime: {
            type: Number,
            required: true,
            default: 0,
        },
        lastseen: {
            type: Date,
        },
        maxchars: {
            type: Number,
        },
    },
    { autoCreate: true }
);
/*
    let name = document.getElementById('name').value;
    let forum = document.getElementById('forum').value;
    let pw = document.getElementById('password').value;
    let teamspeak = document.getElementById('teamspeak').value;
    let confirm = document.getElementById('confirm').value;
*/
export const PlayersModel = mongoose.model('player', PlayerSchema);
