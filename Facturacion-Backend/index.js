var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var database = require('./modules/database');
var productosRouter = require('./routers/productos-router');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/productos', productosRouter);


app.listen(8888, function () {
    console.log("Se levantó el servidor")
})