'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema


const UserSchema = new Schema({
    email : { type: String, unique:true, index:true, lowercase: true},
    nombre : String,
    apellidos: String,
    numTarjeta:{type: String, default:'0000-0000-0000-0000'}, 
    saldo: {type: Number, default:0},

    //De esta forma al hacer un GET no devuelve este atributo
    password : { type:String},
    signUpDate: {type: Date, default: Date.now()}
})

module.exports = mongoose.model('Usuario', UserSchema)