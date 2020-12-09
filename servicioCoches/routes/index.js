'use strict'

const express = require('express');
const api = express.Router();
const productCtrl = require('../controllers/product')
const auth = require('../middlewares/auth')

/******/
const userCtrl = require('../controllers/user')

api.post('/signup',userCtrl.signUp);
api.post('/signin', userCtrl.signIn);


/******/


api.get('/coches', productCtrl.getProducts);//Mostrar todos los coches

api.get('/coches/:productId',productCtrl.getProduct);//Mostrar solo un coche

api.post('/coches',productCtrl.saveProduct); //Introducir un nuevo coche

api.put('/coches/:productId',productCtrl.updateProduct);//Modificar un coche

api.delete('/coches/:productId',productCtrl.deleteProduct); //Borrar un coche



module.exports = api;