'use strict'
const mongoose = require('mongoose');
const app = require('./app')
const config = require('./config')
const fs    = require('fs')

const https = require('https');


const opciones = {
    key: fs.readFileSync('./cert/key.pen'),
    cert: fs.readFileSync('./cert/cert.pen')
}

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

mongoose.set('useCreateIndex', true)
mongoose.set('useUnifiedTopology', true)
mongoose.set('useNewUrlParser', true)

mongoose.connect(config.usuariosDB,(err,res)=>{
    
    if(err){
         return console.log(`Error al conectar al conectar a la base de datos`)
    }
    console.log('Conexion a la base de datos de usuarios establecida...');

    console.log(`WS Coches escuchando en https://localhost:3400/api/auth`);
    https.createServer(opciones, app).listen(config.port, () =>{
        
    }) ;
})


