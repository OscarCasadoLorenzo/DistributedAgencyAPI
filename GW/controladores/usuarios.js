'use strict'

const config    = require('../config.js');
const fetch     = require ('node-fetch')

const URL = config.URLWS_Auth;

function getUsuarios(req, res, next){
    const queURL = `${URL}/usuarios`;

    console.log(queURL)
    console.log(req.user)

    fetch (queURL)
    .then(res => res.json() )
    .then( myjson =>{
        //Mi logica de Negocio
        res.json({
            msg: myjson.msg,
            
            usuarios: myjson.usuarios
        });
        
    })
    .catch(error=> {
        res.json({msg: 'El servidor se encuentra desabilitado. Intentelo más tarde.'})
        next()
    })
       
    
}


function getToken(req,res){
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
            msg: myjson.msg,
            token : myjson.token
        });
    })
    .catch(error=> {
        res.json({msg: 'El servidor se encuentra desabilitado. Intentelo más tarde.'})
        next()
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
        res.json({
            msg: myjson.msg,
            //token: myjson.token
        })
    })
    .catch(error=> {
        res.json({msg: 'El servidor se encuentra desabilitado. Intentelo más tarde.'})
        next()
    })
}




module.exports = {
    saveUsuario,
    getUsuarios,
    getToken
}