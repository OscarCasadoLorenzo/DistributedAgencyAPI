'use strict'

const express = require('express');
const api = express.Router();
const coches = require('../controladores/coches')

const auth      = require('../middleware/auth')    


api.get('/coches', auth, coches.getProducts);

api.get('/coches/:productId',coches.getProduct);

api.post('/coches',coches.saveProduct);

api.put('/coches/:productId', coches.updateProduct);

api.delete('/coches/:productId',coches.deleteProduct);

module.exports = api;