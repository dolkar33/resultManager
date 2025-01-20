const mongoose = require('mongoose'); 

const MONGO_URL = process.env.MONGO_URL;

function connectDB(){
    mongoose.connect(MONGO_URL);
const db = mongoose.connection;

db.on('error', (err) => {
    console.log('Error connection database', err);
});

db.once('connected', ()=> {
    console.log('Database connected');
});
}
export { connectDB };


