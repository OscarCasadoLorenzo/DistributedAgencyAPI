'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema= Schema({
    origen: String,
    destino: String,
    asiento: String,
    disponible : {type: Boolean, default: true},
    precio : {type : Number, default: -1}

});
module.exports = mongoose.model('Product',ProductSchema);//para exportarla y poder acceder a ella desde toda la aplicacion