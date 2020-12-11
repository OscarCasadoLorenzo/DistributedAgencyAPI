'use strict'

const mongoose  = require('mongoose')
const Usuario   = require('../modelos/usuario')
const Bcrypt        = require('bcrypt-nodejs')
const config    = require('../config')

function saveUsuario(req,res){
    console.log('Buenas')
    var salt = Bcrypt.genSaltSync(10)

    let hash = Bcrypt.hashSync(req.body.password, salt)

    let usuario = new Usuario()

    Usuario.exists({email:`${req.body.email}`}, (err, doc) => { 
        if (err){ 
            return res.status(500).send({mess: 'Fallo en la conexión'})
        }
        else if(doc){ //Existe el usuario
            return res.status(500).send({mess: 'El usuario ya existe'})
        } 
        else{
            usuario.email = req.body.email
            usuario.password = hash
            usuario.apellidos = req.body.apellidos
        
            usuario.save()
        
            return res.status(201).send({message: 'Usuario creado con éxito'})
        }
    });      
}

function getUsuarios(req,res){
return null;
}

module.exports = {
    saveUsuario,
    getUsuarios
}