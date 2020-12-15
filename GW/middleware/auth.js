'use strict'

function auth( req, res, next){
    if(!req.headers.authorization){
        res.status(401).json({
            result: 'KO',
            mensaje: "No hhas enviado el tockenn en la cabecera"
        })
        return next();
    }
    
    const miToken= req.headers.authorization.split(" ")[1] ;
    console.log(miToken);

    if(miToken=== "MITOKEN1234"){//token en formato JWT
        req.params.token=miToken;
        return next();
    }
    res .status(401).json({
        result: 'KO',
        mensaje: "Acceso no autorizado a estre servicio"
    })
   return next(new Error("Acceso no autorizado a este servicio"));
}