'use strict'

const config    = require('../config.js');
const fetch     = require ('node-fetch')

const URL = config.URLWS_Coches;

function getCoches(req, res,next){
    console.log(URL) 

    fetch (URL)
    .then(res => res.json() )
    .then( myjson =>{
        //Mi logica de Negocio
        res.json({
            msg: myjson.msg,
            productos: myjson.products
        });
            
    })
    .catch(error=> {
        console.log("Error: ", error),
        next()
    })

}


function getCoche(req,res){
    const queId = req.params.cochesId;

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


function alquilarCoche(req,res){
    const queId = req.params.cochesId;
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
        req.json({
            msg: myjson.msg
        });
        next();
    })
    .catch(error=> {
        res.json({msg: 'El servidor se encuentra desabilitado. Intentelo más tarde.'})
        next()
    })
}


module.exports = {
    getCoches,
    getCoche,
    alquilarCoche,
}
