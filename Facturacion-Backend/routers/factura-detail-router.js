var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const facturaDetail = require('../models/factura-detail');



//Obtener detalle de la factura
router.get('/', function( req, res ){
    facturaDetail.find()
    .populate(
        {
            path:'Items'
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

//Añadir detail de factura
router.post('/nuevo', function( req, res ){
    facturaDetail.insertMany({
        Items: []
    })
    .then(result=>{
        res.send(result);
        res.end()
    })
    .catch(error=>{
        res.send(error);
        res.end()
    })

    
//Actualizar detail
router.put('/:idDetail/:index/editar', function( req, res ){
    facturaDetail.updateOne({
        _id: req.params.idDetail,
        "Items.$._id":req.params.index
    },{
        $set:{
            "Items.$.Cantidad": req.body.cantidad,
            "Items.$.TotalImpuesto":req.body.totalImpuesto,
            "Items.$.TotalItem":req.body.totalItem,
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

//Eliminar detail
router.delete('/:idDetail/eliminar', function( req, res ){
    facturaDetail.deleteOne({
            _id: req.params.idDetail
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
});


//Añadir los items de la factura
router.post('/:idDetail/items', function( req, res ){
    facturaDetail.updateOne({
        _id: req.params.idDetail,
    },{
        $push:{
            Items:{
                _id: mongoose.Types.ObjectId(req.body._id),
                Cantidad: req.body.cantidad,
                TotalImpuesto:req.body.totalImpuesto,
                TotalItem:req.body.totalItem,
            }
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

//obtener facturas detail por id
router.get('/:id', function( req, res ){
    facturaDetail.find({_id: mongoose.Types.ObjectId(req.params.id)})
    .populate({
        path: 'Items',
        populate: {
        path: '_id'
        }
    })
    .then( result =>{
        res.send(result);
        res.end();
    })
    .catch( error =>{
        res.send(error);
        res.end();
    });
});

module.exports = router;