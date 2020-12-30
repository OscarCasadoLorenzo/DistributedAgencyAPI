'use strict'

//import Product, { findById, find, findByIdAndUpdate } from './models/product.js.js';
const Product = require('../modelos/avion.js');





//Ver todos los productos (app.get ('/api/aviones))
function getProducts(req, res){
    
    Product.find({},(err,products)=>{
        if(err){
            return res.json({msg:`Error al realizar la peticion ${err}`})
        }
        if(!products){
            return res.json({msg:`No existen aviones`})
        }

        res.json({msg: 'Operación exitosa',
                 products:products})
    })   
}



//Ver todos los productos (app.get ('/api/aviones/:productId))
function getProduct(req,res){

    let productId= req.params.productId;
    Product.findById(productId,(err,product)=>{
        if(err){
            return res.json({msg:`Error al realizar la peticion ${err}`})
        }
        if(!product){
            return res.json({msg:`No existe el avion solicitado`})
        }

        res.json({msg: 'Operación exitosa',
                  product:product})
    })
}



//Introducir nuevo producto(app.post('/api/aviones'))
function saveProduct(req,res){

    let product= new Product();
    
    product.origen = req.body.origen;
    product.destino = req.body.destino;
    product.asient = req.body.asiento;
    product.precio = req.body.precio;
 


    product.save((err, productStorage)=>{
        if(err) res.send(500).send({msg:`Error al almacenar avion en BD ${err}`});
        
        res.json({msg: 'avion almacenado en BD',
                  product:product})
    });

    
}

//Actualizar los datos de un avion (app.put('/api/aviones/:productId))

function updateProduct(req,res){
    let productId = req.params.productId;
    const opBool = req.body.disponible;


    var update = {
        $set:{disponible : `${opBool}`}
    };

    Product.findByIdAndUpdate( productId, update, (err, productoUp)=>{
        if(err) res.status(500).json({
            msg: `Error al actualizar el avion ${err}`
        });
        
        res.json({msg: 'Actualización exitosa',
        gasto : productoUp.precio});

    });
}
//Borrar los datos de un avion (app.delete('/api/aviones/:productId))
function deleteProduct(req, res){

    let productId= req.params.productId;

    Product.findById(productId,(err,product)=>{
        if(err){
            return res.json({msg: `Operación fallida`});
        }

        try{
            product.remove(err =>{
                if(err) res.json({msg: `Error al borrar el avion ${err}`})
    
                return res.json({msg: `El avion se ha borrado con éxito`});
            })
        }catch(error){
            return res.json({msg: `El avion solicitado no existe`});
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
