'use strict'

const config    = require('../config.js');
const fetch     = require ('node-fetch')
const app       = require('../app.js')
const Usuario   = require('../modelos/usuario');
const { response } = require('../app.js');

const URL = config.URLWS_Auth;

function saveUsuario(req,res){

    const queColeccion = req.params.colecciones;
    const nuevoElemento = req.body;
    const queURL = `${URL}/usuarios`;
    fetch (queURL,  {
                        method: 'POST',
                        body: JSON.stringify(nuevoElemento),
                        headers: {
                            'Content-Type': 'application/json',
                            }//esto es lo que hace postman, pero lo tengo que hacer a mano

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