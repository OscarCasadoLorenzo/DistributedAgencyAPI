'use strict'
const mongoose = require('mongoose');
const app = require('./app')
const config = require('./config')

mongoose.connect(config.cochesDB,(err,res)=>{
    useUnifiedTopology:true
    useNewUrlParser:true
    
    if(err){
         return console.log(`Error al conectar al conectar a la base de datos: ${err}`)
        //si no esta conectado la bbdd  lanzara error
    }
    console.log('Conexion a la base de datos establecida...');
    app.listen(config.port, ()=>{
        //console.log(`API REST corroenmdo en http://localhost:${config.port}`);
    });
})


