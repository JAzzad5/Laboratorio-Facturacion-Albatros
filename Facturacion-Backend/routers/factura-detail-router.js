var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const facturaDetail = require('../models/factura-detail');

//Obtener detalle de la factura
router.get('/', function( req, res ){
    facturaDetail.find()
    .populate({path:'IdImpuesto'})
    .populate(
        {
            path:'Items',
            populate:{path:'_id'}
        }
    )
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