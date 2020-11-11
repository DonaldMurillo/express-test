//import express = require('express');
import express from 'express';
import mongoose from 'mongoose';
import { Clothing, Gender } from './models/cloths.model';
import { employeeRouter } from './routes/employees'
import { supplierRouter } from './routes/suppliers';
// Create a new express app instance
// CRUD 
// inventory with items
/**
 * model
 */ 

const app: express.Application = express();
app.use(express.json());

//DATABASE
mongoose.connect('mongodb://localhost:27017/people', {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => { console.log('connected to db')}
);

//ROUTES
app.use(employeeRouter); // '/api/v1/employees'
app.use(supplierRouter); // '/api/v1/suppliers'

//LANDING PAGE
app.get('/', function (req, res) {
    res.send('Hello Worldo!');
});

app.listen(3000, function () {
    console.log('App is listening on port 3000!');
});