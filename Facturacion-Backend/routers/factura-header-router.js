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

//Añadir header de factura
router.post('/nuevo', function( req, res ){
    facturaHeader.insertMany({
        IdCliente:mongoose.Types.ObjectId(req.params.idCliente),
        Fecha: new Date(),
        TotalISV:req.body.totalisv,
        TotalFactura:req.body.totalfactura,
        Details:mongoose.Types.ObjectId(req.params.idDetail),
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