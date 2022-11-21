const express = require('express');
const router = express.Router();
const path = require('path');
const app = express();
const prodctsController = require('../controllers/productsController');

app.use(express.static(path.resolve(__dirname,'./public')));


router.get('/productDetail/:id?',prodctsController.productDetail);
router.get('/administrarProductos',prodctsController.administrarProductos);
router.get('/listadoProductos',prodctsController.listadoProductos);
router.get('/buscarProductos/:buscar?/',prodctsController.buscarProductos);
router.get('/editarProducto/:id?',prodctsController.editarProducto);

module.exports = router;

