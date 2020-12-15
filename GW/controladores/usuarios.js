'use strict'

const config    = require('../config.js');
const fetch     = require ('node-fetch')

const URL = config.URLWS_Auth;

function getUsuarios(req, res, next){
    const queURL = `${URL}/usuarios`;

    console.log(queURL)
    try {
        fetch (queURL)
        .then(res => res.json() )
        .then( myjson =>{
            //Mi logica de Negocio
            res.json({
                result: 'OK',
                
                elementos: myjson.usuarios
            });
            
    })
    .catch(error=> {
        console.log("Error: ", error),
        next()
    })
       
    } 
    catch (error) {
        console.err(error);
        console.log("a.ldfknas.ldkfasñld");
    }
}


function getToken(req,res){
    console.log('controlador login')
    const queColeccion = req.params.colecciones;
    const nuevoElemento = req.body;
    const queURL = `${URL}/tokens`;

    fetch (queURL,  {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(nuevoElemento),
    })
    .then(res => res.json() )
    .then( myjson =>{
        //Mi logica de Negocio
        res.json({
            token : myjson.token
        });
    })
}


function saveUsuario(req,res){


    const nuevoElemento = req.body;
    console.log(nuevoElemento)


    const queURL = `${URL}/usuarios`;

    fetch (queURL,  {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(nuevoElemento),
    })
    .then(res => res.json() )
    .then( myjson =>{
        res.json({mess: 'Proceso terminado'})
    })
}




module.exports = {
    saveUsuario,
    getUsuarios,
    getToken
}