var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const clientes = require('../models/clientes');

//Obtener clientes
router.get('/', function( req, res ){
    clientes.find()
    .then(result=>{
        res.send(result);
        res.end()
    })
    .catch(error=>{
        res.send(error);
        res.end()
    })
});

//Añadir clientes
router.post('/nuevo', function( req, res ){
    clientes.insertMany({
        Nombre: req.body.nombre,
        RTN: req.body.rtn,
        Direccion: req.body.direccion
    })
    .then(result=>{
        res.send(result);
        res.end()
    })
    .catch(error=>{
        res.send(error);
        res.end()
    })
});


//Actualizar clientes
router.put('/:idCliente/editar', function( req, res ){
    clientes.updateOne({
        _id: req.params.idCliente
    },{
        $set:{
        Nombre: req.body.nombre,
        RTN: req.body.rtn,
        Direccion: req.body.direccion
        }
    })
    .then(result=>{
        res.send(result);
        res.end()
    })
    .catch(error=>{
        res.send(error);
        res.end()
    })
});

//Eliminar cliente
router.delete('/:idCliente/eliminar', function( req, res ){
    clientes.deleteOne({
            _id: req.params.idCliente
        })
    .then(result=>{
        res.send(result);
        res.end()
    })
    .catch(error=>{
        res.send(error);
        res.end()
    })
});


module.exports = router;