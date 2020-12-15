'use strict'

const moment    = require('moment')
const config    = require('../config')
const jwt       = require('jwt-simple')

function isAuth( req, res, next){
    if(!req.headers.authorization){
        return res.status(401).json({
            result: 'KO',
            mensaje: "No has enviado el tocken en la cabecera"
        })
    }
    
    //Bearer miToken
    const token = req.headers.authorization.split(" ")[1] ;
    console.log('El token recibido en middleware es', token);

    const payload = jwt.decode(token, config.SECRET_TOKEN)

    //Comprobamos si el token es válido
    if(payload.exp <= moment().unix()){
        return res.json({
            result: 'KO',
            mensaje: "El token ha caducado"
        })
    }

    req.user = payload.sub
    next()
}

module.exports = isAuth