'use strict'

const express       = require('express');
const bodyParser    = require('body-parser');
const app           = express();
const api           = require('./rutas/rutas.js');
const helmet        = require("helmet")
const fs            = require('fs')
const path          = require('path');

const logger = require('morgan');
const fetch = require('node-fetch');//para la bbdd

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

app.use('/api',api);

module.exports = app