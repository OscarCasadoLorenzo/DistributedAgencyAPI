'use strict'

const express = require('express');
const api = express.Router();
const auth = require('../controladores/auth')


api.post('/auth/usuarios',auth.saveUsuario); 


module.exports = api;