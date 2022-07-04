var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var database = require('./modules/database');
var productosRouter = require('./routers/productos-router');
var impuestosRouter = require('./routers/impuestos-router');
var clientesRouter = require('./routers/clientes-router');
var headerRouter = require('./routers/factura-header-router');
var detailRouter = require('./routers/factura-detail-router');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/productos', productosRouter);
app.use('/impuestos', impuestosRouter);
app.use('/clientes', clientesRouter);
app.use('/headers', headerRouter);
app.use('/details', detailRouter);


app.listen(8888, function () {
    console.log("Se levantó el servidor")
})