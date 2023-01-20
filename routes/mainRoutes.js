const express = require('express');
const router = express.Router();
const path = require('path');
const app = express();
const mainController = require('../src/controllers/mainController');

const authMiddleware = require('../src/middlewares/authMiddleware');

const guestMiddleware = require('../src/middlewares/guestMiddleware');

app.use(express.static(path.resolve(__dirname,'./public')));

router.get('/',authMiddleware,mainController.home);
router.get('/home',authMiddleware,mainController.home);
router.get('/login',guestMiddleware, mainController.login);
router.get('/register',guestMiddleware, mainController.register);
router.get('/carrito/:id?/', authMiddleware, mainController.carrito);
router.get('/carrito2/:id?/',mainController.carrito2);

module.exports = router;

