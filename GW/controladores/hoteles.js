'use strict'

const config    = require('../config.js');
const fetch     = require ('node-fetch')

const URL = config.URLWS_Hotel;

function getHabitaciones(req, res,next){
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


function getHabitacion(req,res,next){
    const queId = req.params.habitacionId;

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


function alquilarHabitacion(req,res,next){
    const queId = req.params.habitacionId;
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

function saveHabitacion(req,res){
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
    getHabitaciones,
    getHabitacion,
    alquilarHabitacion,
    saveHabitacion
}