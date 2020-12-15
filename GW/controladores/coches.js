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
    const queURL= `${URL}/${queId}`;

    const nuevoElemento = req.body;

    fetch (queURL,  {
                        method: 'PUT',
                        body: JSON.stringify(nuevoElemento),//Convierte el nuevoElemento en texto para poder serializarlo
                        headers: {
                            'Content-Type': 'application/json',
                            //'Authoritation':`Bearer${queToken}` 
                        }//esto es lo que hace postman, pero lo tengo que hacer a mano

                    })
    .then(res => res.json() )
    .then( myjson =>{
        res.json({
            result: 'Petición finalizada',
        });
    })

    

}


module.exports = {
    getCoches,
    getCoche,
    alquilarCoche,
}
