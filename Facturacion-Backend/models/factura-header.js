const clientes = require('../models/clientes');
const details = require('../models/factura-detail');
const { Schema, model } = require('mongoose');
var esquema = new Schema(
    {   
        IdCliente:[{ type: Schema.Types.ObjectId, ref: 'clientes' }],
        Fecha:Date,
        TotalISV:Number,
        TotalFactura:Number,
        Details:[{ type: Schema.Types.ObjectId, ref: 'details' }],
    }
);

module.exports = model('factura-header', esquema);