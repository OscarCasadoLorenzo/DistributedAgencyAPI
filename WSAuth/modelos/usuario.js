'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema



const UserSchema = new Schema({
    email : { type: String, lowercase: true},
    nombre : { type:String},
    apellidos: { type:String},

    //De esta forma al hacer un GET no devuelve este atributo
    password : { type:String},
    signUpDate: {type: Date, default: Date.now()}
})

module.exports = mongoose.model('Usuario', UserSchema)