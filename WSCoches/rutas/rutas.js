'use strict'

const express = require('express');
const api = express.Router();
const productCtrl = require('../controladores/product')

api.get('/coches', productCtrl.getProducts);//Mostrar todos los coches

api.get('/coches/:productId',productCtrl.getProduct);//Mostrar solo un coche

api.post('/coches',productCtrl.saveProduct); //Introducir un nuevo coche

api.put('/coches/:productId',productCtrl.updateProduct);//Modificar un coche

api.delete('/coches/:productId',productCtrl.deleteProduct); //Borrar un coche



module.exports = api;