'use strict'

const config    = require('../config.js');
const fetch     = require ('node-fetch')

const URL = config.URLWS_Auth;

function saveUsuario(req,res){

    const queColeccion = req.params.colecciones;
    const nuevoElemento = req.body;
    const queURL = `${URL}/usuarios`;

    fetch (queURL,  {
        method: 'POST',
        body: JSON.stringify(nuevoElemento),
    })
    .then(res => res.json() )
    .then( myjson =>{
        //Mi logica de Negocio
        res.json({
            result: 'CAMBIAR ESTE MENSAJE',
            coleccion: queColeccion,
            nuevoElemento: myjson.elemento
        });
    })
}


module.exports = {
    saveUsuario
}