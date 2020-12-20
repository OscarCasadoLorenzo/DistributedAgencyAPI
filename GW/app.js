'use strict'

const express       = require('express');
const bodyParser    = require('body-parser');
const app           = express();
const api           = require('./rutas/rutas.js');
const fs            = require('fs')
const path          = require('path');

const logger = require('morgan');

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

var accessLogStream = fs.createWriteStream(path.join(__dirname, './logs/access.log'), {flags: 'a'})
app.use(logger('combined', {stream: accessLogStream}))

app.use('/api',api);

module.exports = app