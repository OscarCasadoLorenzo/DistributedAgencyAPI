'use strict'
const express   = require('express');
const api       = express.Router();

const auth      = require('../middleware/auth')    
const coches    = require('../controladores/coches')
const usuarios  = require('../controladores/usuarios')


api.get('/auth/usuarios', auth, usuarios.getUsuarios);
api.post('/auth/usuarios', usuarios.saveUsuario);
api.post('/auth/tokens', usuarios.getToken);


/*
api.get('/hotel',hoteles.getHoteles);
api.get('/hotel/:habitacionId',hoteles.getHabitacionDeHotel); 
api.put('/hotel/:habitacionId',hoteles.modificarHoteles);
*/

api.get('/coches',coches.getCoches);
api.post('/coches',coches.saveCoche);

api.get('/coches/:cochesId',coches.getCoche); 
api.put('/coches/:cochesId', auth, coches.alquilarCoche);


/*
api.get('/aviones/',aviones.getVuelos);
api.get('/aviones/:avionesId',aviones.getAsiento); 
api.put('/aviones/:avionesId',aviones.modicarAsiento);
*/

module.exports = api;