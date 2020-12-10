'use strict'
module.exports= {
    port        : process.env.PORT || 3000,

    URLWS_Hotel : 'http://localhost:3300/api/hoteles',
    
    URLWS_Avion : 'http://localhost:3200/api/aviones',
   
    URLWS_Coches: 'http://localhost:3100/api/coches',

    usuariosDB: "mongodb+srv://ocl5:ocl5@api.ajmmk.mongodb.net/agenciaDB?retryWrites=true&w=majority"

}