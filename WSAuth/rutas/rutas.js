'use strict'

const express = require('express');
const api = express.Router();
const auth = require('../controladores/auth')

api.get('/auth/usuarios',auth.getUsuarios)
api.post('/auth/usuarios',auth.saveUsuario)
api.post('/auth/tokens',auth.getToken)
//api.put('/auth/usuarios',auth.updateUsuario)


module.exports = api;