'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Para que los usuarios se almacenen cifrados en la BD
const bcrypt = require('bcrypt-nodejs')

const UserSchema = new Schema({
    email : { type: String, unique:true, lowercase: true},
    nombre : String,
    apellidos: String,
    //De esta forma al hacer un GET no devuelve este atributo
    password : { type:String, select: false},
    signUpDate: {type: Date, default: Date.now()}
})

module.exports = mongoose.model('Usuario', UserSchema)