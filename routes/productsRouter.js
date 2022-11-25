const express = require('express');
const router = express.Router();
const path = require('path');
const app = express();
const prodctsController = require('../controllers/productsController');

// Atencion que todas las rutas de este router empiezan con /products/

app.use(express.static(path.resolve(__dirname,'./public')));
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

router.get('/productDetail/:id?',prodctsController.productDetail);
router.get('/administrarProductos',prodctsController.administrarProductos);
router.get('/listadoDeseos',prodctsController.listadoDeseos);
router.get('/buscarProductos/:buscar?/',prodctsController.buscarProductos);
router.get('/editarProducto/:id?',prodctsController.editarProducto);
router.get('/misAlquileres',prodctsController.misAlquileres);

router.get('/crearNuevoProducto',prodctsController.crearNuevoProducto);

router.post('/guardarNuevoProducto',prodctsController.guardarNuevoProducto);
router.put('/editarProducto/:id?/',prodctsController.guardarProductoEditado);
router.delete('/eliminarProducto/:id?/',prodctsController.eliminarProducto);

module.exports = router;

