const express = require('express');
const router = express.Router();
const path = require('path');
const app = express();
const usersController = require('../src/controllers/usersController');

const guestMiddleware = require('../src/middlewares/guestMiddleware');
const authMiddleware = require('../src/middlewares/authMiddleware');

const validations = require('../src/middlewares/validateRegisterMiddleware');

// Multer
const multer = require('multer') // multer va en routes
const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, './public/images/users'); 
    }, 
    filename: function (req, file, cb) { 
       cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
  })
  const uploadFile = multer({ storage });

// Atencion que todas las rutas de este router empiezan con /users/

app.use(express.static(path.resolve(__dirname,'./public')));

router.get('/perfil/', authMiddleware, usersController.perfil)
router.post('/guardarRegistro', uploadFile.single('imageUser'), validations, usersController.processRegister)
router.get('/editarPerfil', usersController.editarPerfil)
router.post('/login',guestMiddleware, usersController.loginProcess)
router.get('/logout/', usersController.logout);

router.get('/listadoDeseos/:id?/', usersController.deseos)

router.get('/listaUsuarios', usersController.listaUsuarios);

router.get('/editarUsuario/:id/', usersController.editarUsuario);
router.put('/editarUsuario/:id/', usersController.guardarUsuario);

router.get('/eliminarUsuario/:id/', usersController.confirmarBorrado);
router.delete('/eliminarUsuario/:id/', usersController.borrarUsuario);

router.post('/wishes/add/:id_user/:id_movie', usersController.addWishes)
router.post('/wishes/delete/:id_user/:id_movie', usersController.deleteWishes)

router.post('/cart/add/:id_user/:id_movie', usersController.addCart)
router.post('/cart/delete/:id_user/:id_movie', usersController.deleteCart)

router.post('/rental/add/:id_user/:id_movie', usersController.addRental)
router.post('/rental/delete/:id_user/:id_movie', usersController.deleteRental)

module.exports = router;
