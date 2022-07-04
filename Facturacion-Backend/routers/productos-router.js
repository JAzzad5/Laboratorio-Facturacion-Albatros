var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const productos = require('../models/productos');

//Obtener productos
router.get('/', function( req, res ){
    productos.find()
    .populate({path:'IdImpuesto'})
    .then(result=>{
        res.send(result);
        res.end()
    })
    .catch(error=>{
        res.send(error);
        res.end()
    })
});

//Obtener un producto
router.get('/:idProducto', function( req, res ){
    productos.find({_id: req.params.idProducto})
    .populate({path:'IdImpuesto'})
    .then(result=>{
        res.send(result);
        res.end()
    })
    .catch(error=>{
        res.send(error);
        res.end()
    })
});


//Añadir producto
router.post('/nuevo', function( req, res ){
    productos.insertMany({
        Codigo: req.body.codigo,
        Descripcion: req.body.descripcion,
        Precio: req.body.precio,
        IdImpuesto:mongoose.Types.ObjectId(req.body.idImpuesto)
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

//Actualizar productos
router.put('/:idCliente/editar', function( req, res ){
    productos.updateOne({
        _id: req.params.idCliente
    },{
        $set:{
            Codigo: req.body.codigo,
            Descripcion: req.body.descripcion,
            Precio: req.body.precio,
            IdImpuesto:mongoose.Types.ObjectId(req.body.idImpuesto)
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

//Eliminar productos
router.delete('/:idProducto/eliminar', function( req, res ){
    productos.deleteOne({
            _id: req.params.idProducto
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