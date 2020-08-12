const express = require('express');
const cors = require('cors');
const path = require('path');
const gifController = require('./backend/controllers/gifs');


const app = express();

// Middleware Configuration

// parse JSON data into native JS objects
app.use(express.json());

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use('/gifs', gifController);

app.listen(3000, () => console.log('They see me rollin...on port 3000...'));
