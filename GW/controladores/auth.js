'use strict'

const config    = require('../config.js');
const fetch     = require ('node-fetch')

const URL = config.URLWS_Auth;

function isAuth (req, res,next){

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