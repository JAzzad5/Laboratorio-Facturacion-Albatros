var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const impuestos = require('../models/impuestos');

//Obtener impuestos
router.get('/', function( req, res ){
    impuestos.find()
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