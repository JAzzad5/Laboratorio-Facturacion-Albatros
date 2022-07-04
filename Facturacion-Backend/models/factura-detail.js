const { Schema, model } = require('mongoose');
var esquema = new Schema(
    {
        Items: [{
            _id:  { type: Schema.Types.ObjectId, ref: 'pruebaProducto' },            
            Cantidad: Number,
            TotalImpuesto: Number,
            TotalItem: Number
        }]

    }
);

module.exports = model('factura-detail', esquema);