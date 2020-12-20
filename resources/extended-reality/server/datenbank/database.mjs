import * as alt from 'alt';
import chat from 'chat';
import mongoose from 'mongoose';

let connection;
mongoose
    .connect('mongodb://localhost:27017/player', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
    })
    .then((con) => {
        //console.log(con.connections);
        connection = con;
        console.log('\x1b[32m', `I am connected to the database: §${connection}`);
    });

mongoose.set('useFindAndModify', false);

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function fnHook(object, name) {
    (function (fn) {
        object[name] = async function () {
            await sleep(0);
            return fn.apply(this, arguments);
        };
    })(object[name]);
}

const modelFunctions = ['deleteMany', 'deleteOne', 'find', 'findById', 'findByIdAndDelete', 'findByIdAndRemove', 'findByIdAndRemove', 'findByIdAndUpdate', 'findByIdAndUpdate', 'findOne', 'findOneAndDelete', 'findOneAndRemove', 'findOneAndUpdate', 'replaceOne', 'updateMany', 'updateOne', 'save'];

const prototypeFunctions = ['delete', 'deleteOne', 'increment', 'remove', 'save'];

for (let i = 0; i < modelFunctions.length; i++) fnHook(mongoose.Model, modelFunctions[i]);
for (let i = 0; i < prototypeFunctions.length; i++) fnHook(mongoose.Model.prototype, prototypeFunctions[i]);