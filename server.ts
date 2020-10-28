//import express = require('express');
import express from 'express';
import { Clothing, Gender } from './models/cloths.model';

// Create a new express app instance
// CRUD 
// inventory with items
/**
 * model
 */ 
const app: express.Application = express();
app.use(express.json());

const bata: Clothing = {
    _id: '1',
    name: 'Bata',
    category: 'Clothing',
    quantity: 10,
    img: 'imagepath',
    color: 'black',
    gender: Gender.female,
    size: 20
};
const falda = {_id: '2', name: 'Falta' } as Clothing;
const list = [bata, falda];


app.get('/', function (req, res) {
    res.send('Hello Worldo!');
});

app.get('/lanuel', function (req, res) {
    res.send('Hello Lanuel!!!');
});

app.get('/item', (req, res) => {
    res.send(list);
});

app.get('/item/:id', (req, res) => {
    res.send(list[Number.parseInt(req.params.id)-1] || "404 server error");
});

app.post('/item', (req, res) => {
    console.log(req.body);
    const newItem: Clothing = {...req.body, _id: (list.length + 1).toString()};
    list.push(newItem);
    res.send(list);
});

app.listen(3000, function () {
    console.log('App is listening on port 3000!');
});