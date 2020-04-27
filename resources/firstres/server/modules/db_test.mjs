import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/roleplay', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}).then(con => {
    //console.log(con.connections);
    //console.log("%cDB connected!", "color: green");
    //console.log("%cHey! this is crazy", "color: blue; font-size: 20px");
    console.log('\x1b[32m', 'I am connected to the database');
});

var userSchema = new mongoose.Schema({
    username: { type: String, unique: true },
    password: { type: String },
    forum: { type: String, unique: true }
});

let User = mongoose.model('myuser', userSchema);
exports = User;