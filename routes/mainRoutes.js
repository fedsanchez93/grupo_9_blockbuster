const express = require('express');
const router = express.Router();
const path = require('path');
const app = express();
const mainController = require('../controllers/mainController');

const authMiddleware = require('../middlewares/authMiddleware');

const guestMiddleware = require('../middlewares/guestMiddleware');

app.use(express.static(path.resolve(__dirname,'./public')));

router.get('/',mainController.home);
router.get('/home',mainController.home);
router.get('/login',guestMiddleware, mainController.login);
router.get('/register',guestMiddleware, mainController.register);
router.get('/carrito/:id?/', authMiddleware, mainController.carrito);
router.get('/carrito2/:id?/',mainController.carrito2);
// router.get('/productDetail/:id?',mainController.productDetail);
// router.get('/administrarProductos',mainController.administrarProductos);
// router.get('/listadoProductos',mainController.listadoProductos);
// router.get('/buscarProductos/:buscar?/',mainController.buscarProductos);

module.exports = router;

