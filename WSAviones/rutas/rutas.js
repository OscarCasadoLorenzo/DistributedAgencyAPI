'use strict'

const express = require('express');
const api = express.Router();
const aviones = require('../controladores/aviones')
const auth = require('../middlewares/auth')





api.get('/aviones', aviones.getProducts);

api.get('/aviones/:productId',aviones.getProduct);

api.post('/aviones',auth,aviones.saveProduct);

api.put('/aviones/:productId', auth,aviones.updateProduct);

api.delete('/aviones/:productId',auth,aviones.deleteProduct);


module.exports = api;