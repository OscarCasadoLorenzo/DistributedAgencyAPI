'use strict'
const express   = require('express');
const api       = express.Router();

const auth      = require('../middleware/auth')    
const coches    = require('../controladores/coches')
const hoteles   = require('../controladores/hoteles')
const aviones    = require('../controladores/aviones')
const usuarios  = require('../controladores/usuarios')


api.get('/auth/usuarios', auth, usuarios.getUsuarios);
api.post('/auth/usuarios', usuarios.saveUsuario);
api.post('/auth/tokens', usuarios.getToken);



api.get('/hoteles',hoteles.getHabitaciones);
api.post('/hoteles', auth, hoteles.saveHabitacion);
api.get('/hoteles/:habitacionId',hoteles.getHabitacion); 
api.put('/hoteles/:habitacionId', auth, hoteles.alquilarHabitacion);


api.get('/coches',coches.getCoches);
api.post('/coches', auth, coches.saveCoche);
api.get('/coches/:cochesId',coches.getCoche); 
api.put('/coches/:cochesId', auth, coches.alquilarCoche);



api.get('/aviones/',aviones.getAsientos);
api.post('/aviones', auth, aviones.saveAsiento);
api.get('/aviones/:asientoId',aviones.getAsiento); 
api.put('/aviones/:asientoId',auth, aviones.alquilarAsiento);


module.exports = api;