const express = require('express');
const app = express();
const path = require('path');

const PORT = 5000;
const router = express.Router()

app.use(express.static('public')); // Recursos estaticos
app.set("view engine", "ejs")

// esto es para put y delete
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
//para que el formulario llegue en formato json
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(PORT,() => console.log("Server listening on port  " + PORT));

const rutasMain = require('./routes/mainRoutes');
app.use('/', rutasMain)

const rutasProducts = require('./routes/productsRouter');
app.use('/products', rutasProducts)

app.use((req,res,next)=>{
    res.status(404).render('not-found')
})



// app.get("/", (req,res) => { 
//     res.sendFile(path.resolve("./views/home.html"));
// });
// app.get("/home", (req, res) => {
//     res.sendFile(path.resolve("./views/home.html"));
//   })
// app.get("/carrito", (req,res) => {
//     res.sendFile(path.resolve("./views/carrito.html"));
// });

// app.get("/carrito2", (req,res) => {
//     res.sendFile(path.resolve("./views/carrito2.html"));
// });

// router.get('/register',(req,res)=>{
//     res.render('register')
// });

// // app.get("/register", (req,res) => {
// //     res.sendFile(path.resolve("./views/register.ejs"));
// // });

// app.get("/productDetail", (req,res) => {
//     res.sendFile(path.resolve("./views/productDetail.html"));
// });

// app.get("/login", (req,res) => {
//     res.sendFile(path.resolve("./views/login.html"));
// });


  

  
  




