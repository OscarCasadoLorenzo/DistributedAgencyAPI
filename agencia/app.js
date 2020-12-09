'use strict'


const express = require('express');//
const bodyParser = require('body-parser');
const app = express();
const api = require('./routes/index.js');
const helmet = require("helmet")
const fs =require('fs')
const path = require('path');

const logger = require('morgan');
const fetch = require('node-fetch');//para la bbdd




app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());//para poder procesar Json


app.use(helmet());//Nos analiza 11 frentes de seguridad
var accessLogStream = fs.createWriteStream(path.join(__dirname, './logs/access.log'), { flags: 'a' })

app.use(logger('combined', { stream: accessLogStream }))

app.use('/api',api);


module.exports = app