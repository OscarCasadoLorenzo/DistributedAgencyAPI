'use strict'
'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config');
const fetch = require('node-fetch')



//mongoose.connect(config.db,(err,res)=>{
    //useUnifiedTopology:true
    //useNewUrlParser:true
    
    //if(err){
    //     return console.log(`Error al conectar al conectar a la base de datos: ${err}`)
    //    //si no esta conectado la bbdd  lanzara error
    //}
    console.log('Conexion a la base de datos establecida...');
    app.listen(config.port, ()=>{
        //console.log(`API REST corroenmdo en http://localhost:${config.port}`);
    });
//})
