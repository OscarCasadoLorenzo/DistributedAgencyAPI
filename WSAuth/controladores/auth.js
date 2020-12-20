'use strict'

const Usuario   = require('../modelos/usuario')

const Bcrypt    = require('bcrypt-nodejs')
const token     = require('../servicios/token')

const serv      = require('../servicios/crypto')



function getToken(req,res){
    const password = req.body.password

    Usuario.findOne({email: `${req.body.email}`}, (err, usuario) => {
        if(err) return res.json({mess: 'Error en getToken'})
        
        else if(usuario == null){
            console.log('USuario no encontrado')
            return res.json({mess: 'Usuario no encontrado'})
        } 
        else{
            console.log('Usuario encontrado')

            //Extraemos el hash de la DB
            let hash = usuario.password

            if(serv.comparaPassword(password, hash)){
                console.log('Contraseña correcta')

                const t = token.createToken(usuario);
                res.json({token : t})
            }
            else{
                console.log('Contraseña incorrecta')
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
            return res.status(500).send({mess: 'Fallo en la conexión'})
        }
        else if(doc){ //Existe el usuario
            return res.status(500).send({mess: 'El usuario ya existe'})
        } 
        else{
            usuario.email = req.body.email
            usuario.password = hash
            usuario.apellidos = req.body.apellidos
        
            usuario.save()
        
            return res.status(201).send({message: 'Usuario creado con éxito'})
        }
    });      
}

function getUsuarios(req, res){
    console.log('Controlador del WS')
    Usuario.find({},(err,usuarios)=>{

        if(err){
            return res.status(500).send({message:`Error al realizar la peticion ${err}`})
        }
        if(!usuarios){
            return res.status(404).send({message:`No existen productos`})
        }
        res.status(200).send({usuarios:usuarios})
    })   
}

module.exports = {
    saveUsuario,
    getUsuarios,
    getToken
}