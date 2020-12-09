'use strict'

const config = require('../config.js');
const fetch = require ('node-fetch')
const app = require('../app.js')
//import Product, { findById, find, findByIdAndUpdate } from './models/product.js.js';
const Product = require('../models/product.js');





//Ver todos los productos (app.get ('/api/hoteles))
function getCoches(req, res,next){

    

    const url = config.urlCoches;

    const queURL= `${url}`;
    console.log(url)
    try {
        fetch (url)
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



//Ver todos los productos (app.get ('/api/coches/:productId))

function getCoche(req,res){
    const queId = req.params.cochesId;

   
    
    const url = config.urlCoches;
    

    
    //const queColeccion = req.params.colecciones;
    const queURL= `${url}/${queId}`;
    console.log(queURL);

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
function modificarCoche(req,res){
    const queId = req.params.cochesId;
    const url = config.urlCoches;

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
    getCoches,
    getCoche,
    modificarCoche,
    //deleteProduct

}
