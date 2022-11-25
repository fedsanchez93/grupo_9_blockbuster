const express = require('express');
const router = express.Router();
const path = require('path');
const app = express();
const mainController = require('../controllers/mainController');

app.use(express.static(path.resolve(__dirname,'./public')));

router.get('/',mainController.home);
router.get('/home',mainController.home);
router.get('/login',mainController.login);
router.get('/register',mainController.register);
router.get('/carrito/:id?/',mainController.carrito);
router.get('/carrito2/:id?/',mainController.carrito2);
// router.get('/productDetail/:id?',mainController.productDetail);
// router.get('/administrarProductos',mainController.administrarProductos);
// router.get('/listadoProductos',mainController.listadoProductos);
// router.get('/buscarProductos/:buscar?/',mainController.buscarProductos);

module.exports = router;

