'use strict'

const moment    = require('moment')
const config    = require('../config')
const jwt       = require('jwt-simple')

function isAuth( req, res, next){
    if(!req.headers.authorization){
        return res.json({
            msg: "No has enviado el token en la cabecera"
        })
    }
    
    //Bearer miToken
    const token = req.headers.authorization.split(" ")[1] ;

    var payload = 0;

    try{
        payload = jwt.decode(token, config.SECRET_TOKEN)
    }catch(error){
        return res.json({
            msg: "El token ha caducado y/o manipulado"
        })
    }

    req.user = {
        id : payload.sub,
        token : token
    }
    next()
    
}

module.exports = isAuth