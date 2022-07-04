const { Schema, model } = require('mongoose');
var esquema = new Schema(
    {
        Porcentaje: Number
    }
);

module.exports = model('impuestos', esquema);