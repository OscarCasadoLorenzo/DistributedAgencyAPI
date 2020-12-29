'use strict'
const Product = require('../modelos/modeloCoche');


function getProducts(req, res){
    console.log('12312');
    Product.find({},(err,products)=>{
        if(err){
            return res.json({msg:`Error al realizar la peticion ${err}`})
        }
        if(!products){
            return res.json({msg:`No existen coches`})
        }

        res.json({msg: 'Operación exitosa',
                 products:products})
    })   
}


function getProduct(req,res){

    let productId= req.params.productId;
    Product.findById(productId,(err,product)=>{
        if(err){
            return res.json({msg:`Error al realizar la peticion ${err}`})
        }
        if(!product){
            return res.json({msg:`No existe el coche solicitado`})
        }

        res.json({msg: 'Operación exitosa',
                  product:product})
    })
}


function saveProduct(req,res){

    let product= new Product();
    
    product.modelo = req.body.modelo;
    product.matricula = req.body.matricula;
    product.price = req.body.price;
    product.category = req.body.category;
    product.description = req.body.description;

    product.save((err, productStorage)=>{
        if(err) res.send(500).send({msg:`Error al almacenar coche en BD ${err}`});
        
        res.json({msg: 'Coche almacenado en BD',
                  product:product})
    });

    
}


function updateProduct(req,res){
    let productId = req.params.productId;
    const opBool = req.body.disponible;


    var update = {
        $set:{disponible : `${opBool}`}
    };

    Product.findByIdAndUpdate( productId, update, (err, productoUp)=>{
        if(err) res.status(500).json({
            msg: `Error al actualizar el coche ${err}`
        });
        
        res.json({msg: 'Actualización exitosa'});

    });
}


function deleteProduct(req, res){

    let productId= req.params.productId;

    Product.findById(productId,(err,product)=>{
        if(err){
            return res.json({msg: `Operación fallida`});
        }

        try{
            product.remove(err =>{
                if(err) res.json({msg: `Error al borrar el coche ${err}`})
    
                return res.json({msg: `El coche se ha borrado con éxito`});
            })
        }catch(error){
            return res.json({msg: `El coche solicitado no existe`});
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
