'use strict'

const mongoose  = require('mongoose')
const Usuario   = require('../modelos/usuario')
const servicios = require('../servicios/tokens')

//Registrarse
function signUp (req, res){
    const user = new User({
        email : req.body.email;
        /* La contraseña no es necesaria ya que la genera
            mongoose a partir de los datos del usuario
        */
        nombre : req.body.nombre,
        apellidos : req.body.apellidos,
        telefono : req.body.telefono
    })

    user.save((err) => {
        if(err)
            res.status(500).send({ mensaje : `Error al crear el usuario: ${err}`})

        //Si todo es correcto llamaremos a un servicio que devuelva el token
        return res.status(201).send({token: servicios.createToken(user)})
    })
}