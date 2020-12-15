'use strict'

const jwt = require ('jwt-simple')
const moment = require('moment')
const config = require ('../config')

//CrearToken devuelve un JWT, el formato posee una estructura: HEADER.PAYLOAD.VERIFU_SIGNATURE donde el header(Object Json, algoritmo y base64urlencoded)
function createToken( user ){
    const payload = {
        sub: user._id,
        iat: moment().unix(),
        exp: moment().add(config.TOKEN_TIME, 'minutes').unix()
    };
    return jwt.encode(payload, config.SECRET_TOKEN);
}

function decodeToken(token){
    return Promise( (resolve, reject) => {
        try{
            const payload = jwt.decode(token, config.SECRET_TOKEN, true);
            if(payload.exp <= moment().unix()){
                reject({
                    status:401,
                    mess: 'El token ha expirado'
                });
            }
            resolve(payload.sub);
        } catch(err){
            reject({
                status: 500,
                mess: 'El token no es válido',
                err:err
            });
        }
    });
}

module.exports = {
    createToken,
    decodeToken
}