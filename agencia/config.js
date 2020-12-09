'use strict'
module.exports= {
    port: process.env.PORT || 3000,
    //db: process.env.MONGODB ||'mongodb://localhost:27017/coches1',
    SECRET_TOKEN: 'miclavedetokens',

    urlHoteles : 'http://localhost:3300/api/hoteles',
    
    urlAviones: 'http://localhost:3200/api/aviones',
   
    urlCoches : 'http://localhost:3100/api/coches',

}