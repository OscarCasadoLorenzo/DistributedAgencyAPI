'use strict'

const express = require('express');
const api = express.Router();
const hoteles = require('../controladores/hoteles')
const auth = require('../middlewares/auth')





api.get('/hoteles', hoteles.getProducts);

api.get('/hoteles/:productId',hoteles.getProduct);

api.post('/hoteles',auth,hoteles.saveProduct);

api.put('/hoteles/:productId', auth,hoteles.updateProduct);

api.delete('/hoteles/:productId',auth,hoteles.deleteProduct);


module.exports = api;