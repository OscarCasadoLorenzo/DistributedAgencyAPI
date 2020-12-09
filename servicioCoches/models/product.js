'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema= Schema({
    modelo: String,
    matricula: String,
    price: {type: Number, default:0},
    category: String,
    description: String

});

module.exports =mongoose.model('Product',ProductSchema);//para exportarla y poder acceder a ella desde toda la aplicacion