'use strict'

const express = require('express');

const logger = require('morgan')

const app = express();


app.use(logger('dev'));

app.get('/hola',  (request, response) => {
    response.send('Hola a todas y a todos desde Express');
});

app.listen(3000, () => {
    console .log('API REST ejecutándose en http//localhost:3000/hola');
});
