var http = require('http');
const { request } = require('https');

http.createServer( (request, response) => {
    response.writeHead(200, {'Content-TYpe': 'text/plain'});
    response.end('Hola a todas y a todos! \n');
}).listen(8080);

console.log('Servidor ejecutándose en puerto 8080...');