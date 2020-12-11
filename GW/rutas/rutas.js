'use strict'
const express       = require('express');
const api           = express.Router();

const coches        = require('../controladores/coches')

const Usuario = require('../modelos/usuario');
const usuarios      = require('../controladores/usuarios')
const usuario = require('../modelos/usuario');

api.post('/auth/usuarios', usuarios.saveUsuario);
api.post('/usuarios', usuarios.saveUsuario);

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