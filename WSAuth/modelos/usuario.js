'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema



const UserSchema = new Schema({
    email : { type: String, lowercase: true, require:true},
    nombre : { type:String, require:true},
    apellidos: { type:String, require:true},

    //De esta forma al hacer un GET no devuelve este atributo
    password : { type:String, select: false, require:true},
    signUpDate: {type: Date, default: Date.now()}
})

module.exports = mongoose.model('Usuario', UserSchema)