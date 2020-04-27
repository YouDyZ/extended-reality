import * as alt from 'alt';
import chat from 'chat';

class NamesClass {
    Male = [
        'Lukas', 'Nico', ' Sepp', 'Paul', 'Justin', 'Finn', 'Benny', 'Brian', 'Julius', ' Max', 'Franz', 'Chris', 'Sven', 'Friedrich', 'Kevin', 'Thomas', 'Benjamin', 'Ben', 'Jimmy', 'Ned', 'Andre', 'Andi'
    ]

    Female = [
        'Sarah', 'Annika', 'Michelle', 'Maria', 'Zoe', 'Jenny', 'Juline', 'Anna', 'Ana', 'Annie', 'Megain', 'Marie', 'Angel', 'Chistina', 'Emma', 'Lea', 'Sophia', 'Scarlet', 'Zoey', 'Penelope', 'Nadja'
    ]

    Lastname = [
        'Smith', ' Hall', 'Stewart', 'Price', 'Johnson', 'Allen', 'Sanchez', 'Bennett', 'Williams', 'Young', 'Ching', 'Chong', 'Wood', 'Morris', 'Ross', 'Hernades', 'Jones', 'Roger', 'Miller'
    ]
}

let Names = new NamesClass;

chat.registerCmd('name', (player, args) => {
    if (args[0] !== 'M' && args[0] !== 'W') {
        chat.send(player, '/name [M/W]');
        return;
    }

    let firstname = Math.random();
    let lastname = Math.random();

    if (args[0] === 'M') {
        firstname = Names.Male[Math.floor(firstname * Names.Male.length)];
        lastname = Names.Lastname[Math.floor(lastname * Names.Lastname.length)];
    }

    if (args[0] === 'W') {
        firstname = Names.Female[Math.floor(firstname * Names.Female.length)];
        lastname = Names.Lastname[Math.floor(lastname * Names.Lastname.length)];
    }

    chat.send(player, `${firstname} ${lastname}`);


});

chat.registerCmd('nameam', player => {
    chat.send(player, `Männlich:${Names.Male.length} || Weiblich: ${Names.Female.length} || Nachname: ${Names.Lastname.length}`);
})