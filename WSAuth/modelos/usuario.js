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

UserSchema.pre('save', (next) =>{
    let user = this
    if(!user.isModified('password')) return next()

    bcrypt.genSalt(10, (err, salt) =>{
        if(err) return next()

        bcrypt.hash(user.password, salt, null, (err, hash) =>{
            if(err) return next(err)

            user.password = hash
            next()
        })
    })
})

module.exports = mongoose.model('User', UserSchema)