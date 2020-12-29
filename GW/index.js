'use strict'
'use strict'

const app = require('./app');
const config = require('./config');

const fs = require('fs');
const https = require('https');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const opciones = {
  key: fs.readFileSync('./cert/key.pen'),
  cert: fs.readFileSync('./cert/cert.pen')
}


console.log('Conexion a la base de datos establecida...');
https.createServer(opciones, app).listen(config.port);

