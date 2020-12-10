'use strict'
const express       = require('express');
const api           = express.Router();

const coches        = require('../controladores/coches')

const Usuario = require('../modelos/usuario');
const usuarios      = require('../controladores/usuarios')
const Bcrypt        = require('bcrypt-nodejs')

api.post('/usuarios', async (req, res) =>{
        var salt = Bcrypt.genSaltSync(10)

        let hash = Bcrypt.hashSync(req.body.password, salt)

        let usuario = new Usuario()
        usuario.email = req.body.email

        usuario.password = hash
        usuario.apellidos = req.body.apellidos

        usuario.save()

        return res.status(201).send({usuario:usuario})
});

api.get('/usuarios', async (req, res) => {
    Usuario.find({},(err,products)=>{ //{} significa array vacio, es decir todos los productos

    if(err){
        return res.status(500).send({message:`Error al realizar la peticion ${err}`})
    }
    if(!products){
        return res.status(404).send({message:`No existen productos`})
    }

    res.status(200).send({products:products})
    console.log(products)
    }) 
})



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