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



module.exports = router;