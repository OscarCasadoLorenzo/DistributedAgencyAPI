'use strict'

const express       = require('express');
const api           = express.Router();
const productCtrl   = require('../controladores/coches')

//const hoteles = require('../controladores/hoteles')
const coches = require('../controladores/coches')
//const aviones = require('../controladores/aviones')

/*
api.get('/hotel',hoteles.getHoteles);
api.get('/hotel/:habitacionId',hoteles.getHabitacionDeHotel); 
api.put('/hotel/:habitacionId',hoteles.modificarHoteles);
*/

api.get('/coches',coches.getCoches);
api.get('/coches/:cochesId',coches.getCoche); 
api.put('/coches/:cochesId',coches.modificarCoche);

/*
api.get('/aviones/',aviones.getVuelos);
api.get('/aviones/:avionesId',aviones.getAsiento); 
api.put('/aviones/:avionesId',aviones.modicarAsiento);
*/

module.exports = api;