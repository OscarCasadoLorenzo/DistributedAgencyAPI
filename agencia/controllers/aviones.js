'use strict'

const config = require('../config.js');
const fetch = require ('node-fetch')
const app = require('../app.js')
const Product = require('../models/product.js');





//Ver todos los productos (app.get ('/api/hoteles))
function getVuelos(req, res,next){

    const url = config.urlAviones;

    fetch(url)
    .then(res => res.json() )
    .then( myjson =>{
            //Mi logica de Negocio
            res.json({
                result: 'OK',
                
                elementos: myjson.products
            });
            console.log(myjson)
    })
    .catch(error=> {
        //console.log("Error: ", error),
        next()
    })
}



//Ver todos los productos (app.get ('/api/coches/:productId))

function getAsiento(req,res){
    const queId = req.params.id;
    
    const url = config.urlAviones;
    
    //const queColeccion = req.params.colecciones;
    const queURL= `${url}/${queId}`;

    fetch (queURL)
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

//Introducir nuevo producto(app.post('/api/coches'))
function modicarAsiento(req,res){
    const queId = req.params.id;
    const url = config.urlAviones;
    const queColeccion = req.params.colecciones;
    const queURL= `${url}/${queColeccion}/${queId}`;
    const queToken = req.params.token;
    const nuevoElemento = req.body;
    fetch (queURL,  {
                        method: 'PUT',
                        body: JSON.stringify(nuevoElemento),//Convierte el nuevoElemento en texto para poder serializarlo
                        headers: {
                            'Content-Type': 'application/json',
                            'Authoritation':`Bearer${queToken}` 
                            }//esto es lo que hace postman, pero lo tengo que hacer a mano

                    })
    .then(res => res.json() )
    .then( myjson =>{
        //Mi logica de Negocio
        res.json({
            result: 'Modificacion correcta',
            coleccion: queColeccion,
            nuevoElemento: myjson.elemento
        });
    })

    

}
//Actualizar los datos de un coche (app.put('/api/coches/:productId))


module.exports = {
    getVuelos,
    getAsiento,
    modicarAsiento,
    //deleteProduct

}
