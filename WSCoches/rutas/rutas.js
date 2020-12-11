'use strict'

const express = require('express');
const api = express.Router();
const coches = require('../controladores/coches')

api.get('/coches', coches.getProducts);

api.get('/coches/:productId',coches.getProduct);

api.post('/coches',coches.saveProduct);

api.put('/coches/:productId',coches.updateProduct);

api.delete('/coches/:productId',coches.deleteProduct);

module.exports = api;