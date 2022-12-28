const express = require('express');
const router = express.Router();
const path = require('path');
const app = express();
const usersController = require('../controllers/usersController');

const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

const validations = require('../middlewares/validateRegisterMiddleware');

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



module.exports = router;
