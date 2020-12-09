'use strict'


const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const api = require('./routes/index.js')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());//para poder procesar Json

app.use('/api',api);


module.exports = app