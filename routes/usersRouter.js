const express = require('express');
const router = express.Router();
const path = require('path');
const app = express();
const usersController = require('../controllers/usersController');

// Atencion que todas las rutas de este router empiezan con /users/

app.use(express.static(path.resolve(__dirname,'./public')));

router.get('/perfil',usersController.perfil)
router.get('/editarPerfil', usersController.editarPerfil)


module.exports = router;
