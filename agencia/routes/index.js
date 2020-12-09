'use strict'

const express = require('express');
const api = express.Router();
const productCtrl = require('../controllers/product')
const hoteles = require('../controllers/hoteles')
const coches = require('../controllers/coches')
const aviones = require('../controllers/aviones')
const auth = require('../middlewares/auth')

/******/
const userCtrl = require('../controllers/user')

api.post('/signup',userCtrl.signUp);
api.post('/signin', userCtrl.signIn);



//Los que enviamos a los servicios

//api.get('/product',prductOtros.getProducts);//TODO

api.get('/hoteles',hoteles.getHoteles);//mostrar todas las habitaciones

api.get('/hoteles/:hotelId',hoteles.getHabitacionDeHotel); //Ver informacion una habitacion

api.put('/hoteles/:hotelId',hoteles.modificarHoteles);//Modificar los datos de un usuario de la agencia

/**/
api.get('/coches',coches.getCoches);//mostrar todas las habitaciones

api.get('/coches/:cochesId',coches.getCoche); //Ver informacion una habitacion

api.put('/coches/:cochesId',coches.modificarCoche);//Modificar los datos de un usuario de la agencia

/**/

api.get('/aviones/',aviones.getVuelos);//mostrar todas las habitaciones

api.get('/aviones/:avionesId',aviones.getAsiento); //Ver informacion una habitacion

api.put('/aviones/:avionesId',aviones.modicarAsiento);//Modificar los datos de un usuario de la agencia





module.exports = api;