'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema= Schema({
    modelo: String,
    matricula: String,
    price: {type: Number, default:0},
    category: {type:String, enum:['utilitario','deportivo','SUB','furgoneta']},
    description: String

});

module.exports =mongoose.model('Product',ProductSchema);//para exportarla y poder acceder a ella desde toda la aplicacion