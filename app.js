require("dotenv").config();
const express = require('express');
const path = require('path');
const logger = require('morgan');

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI); 

const connection = mongoose.connection;
connection.on('connected', () => {
  console.log('Mongoose Connected Successfully');
});
// If the connection throws an error
connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err);
});

let plansRouter = require('./routes/plans')
let travelersRouter = require('./routes/travelers');
let tripsRouter = require('./routes/trips')


let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/client/build/'));
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/client/build/index.html')
  })

app.use('/api/trips/', tripsRouter)
app.use('/api/trips/:tripId/travelers', travelersRouter)
app.use('/api/trips/:tripId/plans', plansRouter)

module.exports = app;
