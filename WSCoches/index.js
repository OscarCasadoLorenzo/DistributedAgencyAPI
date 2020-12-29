'use strict'
const mongoose = require('mongoose');
const app = require('./app')
const config = require('./config')


const fs = require('fs');
const https = require('https');


const opciones = {
    key: fs.readFileSync('./cert/key.pen'),
    cert: fs.readFileSync('./cert/cert.pen')
}

  
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

mongoose.connect(config.cochesDB,(err,res)=>{
    useUnifiedTopology:true
    useNewUrlParser:true
    
    if(err){
         return console.log(`Error al conectar al conectar a la base de datos: ${err}`)
        //si no esta conectado la bbdd  lanzara error
    }
    console.log('Conexion a la base de datos establecida...');
    https.createServer(opciones, app).listen(config.port);
})






