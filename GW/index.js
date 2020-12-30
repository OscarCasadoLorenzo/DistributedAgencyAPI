'use strict'
'use strict'

/*
La vida es como una manzana, a veces puedes
ir a por y te la comes, pero otras
puedes encontrarte de gope con una,
cayéndote en la cabeza y descubriendo el
significado de la gravedad. Embeces la vida no
es como queremos, es por eso, que hay que ser 
una manzana en la vida, dejándote comer y 
golpeando cabezas a diestro y siniestro
                            - Luis Girona Pérez
*/

const app = require('./app');
const config = require('./config');

const fs = require('fs');
const https = require('https');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const opciones = {
  key: fs.readFileSync('./cert/key.pen'),
  cert: fs.readFileSync('./cert/cert.pen')
}


console.log(`WS GW escuchando en https://localhost:3000/api`);
https.createServer(opciones, app).listen(config.port, () =>{
  
}) ;

