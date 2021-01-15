'use strict'

const config    = require('../config.js');
const fetch     = require ('node-fetch')

const URL = config.URLWS_Avion;

function getAsientos(req, res,next){
    console.log(URL) 
    //const queToken = req.user.token;


        fetch (URL)  /*,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${queToken}` 
            }

        })*/
        .then(res => res.json() )
        .then( myjson =>{
            //Mi logica de Negocio
            res.json({
                msg: myjson.msg,
                productos: myjson.products
            });
            
    })
    .catch(error=> {
        res.json({msg: 'El servidor se encuentra desabilitado. Intentelo más tarde.'})
        next()
    })

}


function getAsiento(req,res,next){
    const queId = req.params.asientoId;

    console.log(URL);

    fetch (`${URL}/${queId}`)
    .then(res => res.json() )
    .then( myjson =>{
        //Mi logica de Negocio
        res.json({
            msg: myjson.msg,
            producto: myjson.product
        });
    }) 
    .catch(error=> {
        res.json({msg: 'El servidor se encuentra desabilitado. Intentelo más tarde.'})
        next()
    })
}


function alquilarAsiento(req,res,next){
    const queId = req.params.asientoId;
    const queURL= `${URL}/${queId}`;

    const nuevoElemento = req.body;
    const queToken = req.user.token;

    fetch (queURL,  {
        method: 'PUT',
        body: JSON.stringify(nuevoElemento),

        headers: {
            'Content-Type': 'application/json',
            'Authorization':`Bearer ${queToken}` 
        }

    })
    .then(res => res.json() )
    .then( myjson =>{ 
        res.json({
            msg: myjson.msg
        });
        next();
    })
    .catch(error=> {
        res.json({msg: 'El servidor se encuentra desabilitado. Intentelo más tarde.'})
        next()
    })
}

function saveAsiento(req,res){
    const nuevoElemento = req.body;
    const queURL= `${URL}`;
    const queToken = req.user.token;

    fetch (queURL,  {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            'Authorization':`Bearer ${queToken}` 
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
    getAsientos,
    getAsiento,
    alquilarAsiento,
    saveAsiento
}