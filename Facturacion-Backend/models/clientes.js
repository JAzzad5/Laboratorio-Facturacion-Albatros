const { Schema, model } = require('mongoose');
var esquema = new Schema(
    {
        Nombre:String,
        RTN:{type : String , unique : true},
        Direccion:String,

    }
);

module.exports = model('clientes', esquema);