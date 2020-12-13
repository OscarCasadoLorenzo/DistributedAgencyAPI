'use strict'

const config    = require('../config.js');
const fetch     = require ('node-fetch')

const URL = config.URLWS_Coches;

function getCoches(req, res,next){
    console.log(URL)
    try {
        fetch (URL)
        .then(res => res.json() )
        .then( myjson =>{
            //Mi logica de Negocio
            res.json({
                result: 'OK',
                
                elementos: myjson.products
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


function getCoche(req,res){
    const queId = req.params.cochesId;

    console.log(URL);

    fetch (`${URL}/${queId}`)
    .then(res => res.json() )
    .then( myjson =>{
        //Mi logica de Negocio
        res.json({
            result: 'OK',
            //coleccion: queColeccion,
            
            elemento: myjson.product
        });
    }) 
}


function alquilarCoche(req,res){
    const queId = req.params.cochesId;
    const nuevoEstado= req.body.disponible;
    
    fetch (`${URL}/${queId}`,  {
        method: 'PUT',
        body: JSON.stringify(nuevoEstado),//Convierte el nuevoElemento en texto para poder serializarlo
    })
    .then(res => res.json() )
    .then( myjson =>{
        //Mi logica de Negocio
        res.json({
            result: 'Modificacion correcta',
            coleccion: queColeccion,
            nuevoEstado: myjson.productUp
        });
    })

    //Confirmación a entidad bancaria


    //if bien añadir transaccion fecth
    //if mal volver a llamar fetch modificar disponible
}


module.exports = {
    getCoches,
    getCoche,
    alquilarCoche,
}
