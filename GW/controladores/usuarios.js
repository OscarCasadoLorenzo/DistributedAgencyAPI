'use strict'

const config    = require('../config.js');
const fetch     = require ('node-fetch')

const URL = config.URLWS_Auth;

function getUsuarios(req, res, next){
    const queURL = `${URL}/usuarios`;
    const queToken = req.user.token;

    fetch (queURL,  {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization':`Bearer ${queToken}` 
        }

    })
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
    })
}


function saveUsuario(req,res){
    const nuevoElemento = req.body;
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