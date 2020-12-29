'use strict'
module.exports= {
    port        : process.env.PORT || 3000,

    URLWS_Hotel : 'http://localhost:3300/api/hoteles',
    
    URLWS_Avion : 'http://localhost:3200/api/aviones',
   
    URLWS_Coches: 'https://localhost:3100/api/coches',

    URLWS_Auth: 'http://localhost:3400/api/auth',

    transaccionesDB: "mongodb+srv://ocl5:ocl5@api.ajmmk.mongodb.net/transaccionesDB?retryWrites=true&w=majority",

    SECRET_TOKEN : "mellamooscarcasadolorenzo1234"
}