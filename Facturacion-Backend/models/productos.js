const impuestos = require('../models/impuestos');
const { Schema, model } = require('mongoose');
var esquema = new Schema(
    {
        Codigo:{type : Number , unique : true},
        Descripcion: String,
        Precio: Number,
        IdImpuesto:{ type: Schema.Types.ObjectId, ref: 'impuestos' }
    }
);

module.exports = model('productos', esquema);