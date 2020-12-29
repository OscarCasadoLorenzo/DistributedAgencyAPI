'use strict'

const moment    = require('moment')
const config    = require('../config')
const jwt       = require('jwt-simple')

function isAuth( req, res, next){
    console.log(req.headers)
    if(!req.headers.authorization){
        return res.status(401).json({
            result: 'KO',
            mensaje: "No has enviado el tocken en la cabecera"
        })
    }
    console.log('Holowo')
    //Bearer miToken
    const token = req.headers.authorization.split(" ")[1] ;

    const payload = jwt.decode(token, config.SECRET_TOKEN)

    //Comprobamos si el token es válido
    if(payload.exp <= moment().unix()){
        return res.json({
            mensaje: "El token ha caducado"
        })
    }

    req.user = {
        id : payload.sub,
        token : token
    }
    next()
    
}

module.exports = isAuth