'use strict'

const Usuario   = require('../modelos/usuario')

const Bcrypt    = require('bcrypt-nodejs')
const token     = require('../servicios/token')

const serv      = require('../servicios/crypto')



function getToken(req,res){
    const password = req.body.password
    
    Usuario.findOne({email: `${req.body.email}`}, (err, usuario) => {
        if(err) return res.json({msg: 'Fallo en la conexión a la BD'})
        
        else if(usuario == null){
            return res.json({msg : 'Usuario y/o contraseña inválidos' })
        } 
        else{
            
            //Extraemos el hash de la DB
            let hash = usuario.password
            if(serv.comparaPassword(password, hash)){
                const t = token.createToken(usuario);
               
                return res.json({
                        msg : 'Loggueo exitoso',
                        token : t})
                        
            }
            else{
                return res.json({msg : 'Usuario y/o contraseña inválidos' })
            }      
        }
    });
}

function saveUsuario(req,res){

    var salt = Bcrypt.genSaltSync(10)

    let hash = Bcrypt.hashSync(req.body.password, salt)

    let usuario = new Usuario()

    Usuario.exists({email:`${req.body.email}`}, (err, doc) => { 
        if (err){ 
            return res.json({msg : 'Fallo en la conexión a la BD' })
        }
        else if(doc){ 
            return res.json({msg : 'El usuario ya existe' })
        } 
        else{
            usuario.email = req.body.email
            usuario.password = hash
            usuario.apellidos = req.body.apellidos
            usuario.numTarjeta = req.body.numTarjeta
            usuario.saldo = req.body.saldo
        
            usuario.save()
        
            return res.json({msg : 'Usuario creado con éxito' })
        }
    });      
}

function getUsuarios(req, res){
    console.log('Controlador del WS')
    Usuario.find({},(err,usuarios)=>{

        if(err){
            return res.json({msg : 'Fallo al conectar con la BD' })
        }
        if(!usuarios){
            return res.status(404).send({message:`No existen usuarios en la BD`})
        }
        res.json({
            msg : 'Operación realizada con exíto',
            usuarios:usuarios
        })
    })   
}

/*
function updateUsuario(req,res){
    var usuarioId = token.decodeToken(req.headers.authorization);
    console.log(req.body.gasto)
    const gasto = req.body.gasto;

    var update = {
        $inc:{saldo : -`${gasto}`}
    };


    Usuario.findByIdAndUpdate( usuarioId, update, (err, usuarioUp)=>{
        if(err) res.status(500).json({
            msg: `Error al actualizar el usuario ${err}`
        });
        
        res.json({msg: 'Actualización exitoso'});

    });
}
*/

module.exports = {
    saveUsuario,
    getUsuarios,
    getToken,
    //updateUsuario
}