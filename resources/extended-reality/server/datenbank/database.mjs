import * as alt from 'alt';
import chat from 'chat';
import mongoose from 'mongoose';

mongoose
    .connect('mongodb://localhost:27017/roleplay', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
    })
    .then((con) => {
        //console.log(con.connections);
        connection = con;
        console.log('\x1b[32m', `I am connected to the database: §${connection}`);
    });
