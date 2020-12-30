'use strict'

//import Product, { findById, find, findByIdAndUpdate } from './models/product.js.js';
const Product = require('../modelos/modeloHotel.js');





//Ver todos los productos (app.get ('/api/hoteles))
function getProducts(req, res){
    
    Product.find({},(err,products)=>{
        if(err){
            return res.json({msg:`Error al realizar la peticion ${err}`})
        }
        if(!products){
            return res.json({msg:`No existen hoteles`})
        }

        res.json({msg: 'Operación exitosa',
                 products:products})
    })   
}



//Ver todos los productos (app.get ('/api/hoteles/:productId))
function getProduct(req,res){

    let productId= req.params.productId;
    Product.findById(productId,(err,product)=>{
        if(err){
            return res.json({msg:`Error al realizar la peticion ${err}`})
        }
        if(!product){
            return res.json({msg:`No existe el hotel solicitado`})
        }

        res.json({msg: 'Operación exitosa',
                  product:product})
    })
}



//Introducir nuevo producto(app.post('/api/hoteles'))
function saveProduct(req,res){

    let product= new Product();
    
    product.direccion = req.body.direccion;
    product.numeroHabitacion = req.body.numeroHabitacion;
    product.categoria = req.body.categoria;
    product.precio = req.body.precio;

    product.save((err, productStorage)=>{
        if(err) res.send(500).send({msg:`Error al almacenar hotel en BD ${err}`});
        
        res.json({msg: 'hotel almacenado en BD',
                  product:product})
    });

    
}

//Actualizar los datos de un hotel (app.put('/api/hoteles/:productId))

function updateProduct(req,res){
    let productId = req.params.productId;
    const opBool = req.body.disponible;


    var update = {
        $set:{disponible : `${opBool}`}
    };

    Product.findByIdAndUpdate( productId, update, (err, productoUp)=>{
        if(err) res.status(500).json({
            msg: `Error al actualizar el hotel ${err}`
        });
        
        res.json({msg: 'Actualización exitosa',
        gasto : productoUp.precio});

    });
}
//Borrar los datos de un hotel (app.delete('/api/hoteles/:productId))
function deleteProduct(req, res){

    let productId= req.params.productId;

    Product.findById(productId,(err,product)=>{
        if(err){
            return res.json({msg: `Operación fallida`});
        }

        try{
            product.remove(err =>{
                if(err) res.json({msg: `Error al borrar el hotel ${err}`})
    
                return res.json({msg: `El hotel se ha borrado con éxito`});
            })
        }catch(error){
            return res.json({msg: `El hotel solicitado no existe`});
        }
        
    });
}


module.exports = {
    getProduct,
    getProducts,
    saveProduct,
    updateProduct,
    deleteProduct

}
