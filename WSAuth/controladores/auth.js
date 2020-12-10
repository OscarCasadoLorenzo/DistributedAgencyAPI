'use strict'

const mongoose  = require('mongoose')
const Usuario   = require('../modelos/usuario')
const Bcrypt        = require('bcrypt-nodejs')
const { builtinModules } = require('module')

function saveUsuario(req,res){
    console.log('Buenas')
    var salt = Bcrypt.genSaltSync(10)

    let hash = Bcrypt.hashSync(req.body.password, salt)

    let usuario = new Usuario()
    usuario.email = req.body.email

    usuario.password = hash
    usuario.apellidos = req.body.apellidos

    usuario.save()

    return res.status(201).send({message: 'Usuario creado con éxito'})
}

module.exports = {
    saveUsuario
}