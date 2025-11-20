
//Bring in the DB connection and the Trip schema
const Mongoose = require('./db');
const Trip = require('./travlr');

// Read seed data from JSON
const fs = require('fs');
const path = require('path');

var trips = JSON.parse(fs.readFileSync(__dirname + '/../data/trips.json', 'utf8'));



// delete any existing records, then insert seed data
const seedDB = async () => {
    await Trip.deleteMany({});
    await Trip.insertMany(trips);
};

// Close DB connection and exit
seedDB().then(async () => {
    await Mongoose.connection.close();
    process.exit(0);
});