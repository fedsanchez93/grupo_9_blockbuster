const express = require('express');
const router = express.Router();
const path = require('path');
const app = express();
const prodctsController = require('../src/controllers/productsController');

const authMiddleware = require('../src/middlewares/authMiddleware');
const validationsNewMovie = require('../src/middlewares/validateNewMovie')
const uploadFile = require('../src/middlewares/multerMovie')

// Atencion que todas las rutas de este router empiezan con /products/

app.use(express.static(path.resolve(__dirname,'./public')));
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

router.get('/productDetail/:id?',prodctsController.productDetail);
router.get('/administrarProductos',prodctsController.administrarProductos);
router.get('/listadoDeseos', authMiddleware, prodctsController.listadoDeseos);
router.get('/buscarProductos/:buscar?/',prodctsController.buscarProductos);
router.get('/editarProducto/:id?',prodctsController.editarProducto);
router.get('/misAlquileres', authMiddleware, prodctsController.misAlquileres);
router.get('/video/:id?',prodctsController.video);


router.get('/crearNuevoProducto',prodctsController.crearNuevoProducto);

router.post('/guardarNuevoProducto',uploadFile.single('imageMovie'), validationsNewMovie, prodctsController.guardarNuevoProducto);
router.put('/editarProducto/:id?/',uploadFile.single('imageMovie'), validationsNewMovie, prodctsController.guardarProductoEditado);
router.delete('/eliminarProducto/:id?/',prodctsController.eliminarProducto);

module.exports = router;

