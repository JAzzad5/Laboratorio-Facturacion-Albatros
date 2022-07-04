var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const facturaHeader = require('../models/factura-header');

//Obtener detalle de la factura
router.get('/', function( req, res ){
    facturaHeader.find()
    .populate({path:'IdCliente'})
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