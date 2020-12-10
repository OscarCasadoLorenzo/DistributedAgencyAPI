'use strict'

const jwt    = require('jwt-simple')
const config = require('../config')

function createToken (user){
    const payload = {
        //Debería ser otro ID != al de la BD pero para facilitar
        sub: user._id,
    }

    return jwt.encode(payload, config.SECRET_TOKEN)

}

module.exports = createToken