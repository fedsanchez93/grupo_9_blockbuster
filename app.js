const express = require('express');
const app = express();
const path = require('path');
const cookies = require('cookie-parser');
app.use(cookies());
var flash = require('express-flash');
app.use(flash());

const PORT = process.env.PORT || 5000;
const router = express.Router()

const userLoggedMiddleware = require('./src/middlewares/userLoggedMiddleware');

const session = require('express-session')
app.use(session({secret:'Mensaje Secreto', resave:false ,saveUninitialized:false}))

app.use(express.static('public')); // Recursos estaticos
app.set("view engine", "ejs")

app.use(userLoggedMiddleware);

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

const rutasUsers = require('./routes/usersRouter');
app.use('/users',rutasUsers)

const rutasApi = require('./routes/api/apiRoutes')
app.use('/api', rutasApi)

app.use((req,res,next)=>{
    res.status(404).render('not-found')
})


const fs = require('fs');

const rutaPeliculas = path.join(__dirname, './src/data/products2.json');
const listaPeliculas = JSON.parse(fs.readFileSync(rutaPeliculas, 'utf-8'));
//console.log(listaPeliculas)
const db = require('./src/database/models');
/*db.Movie.bulkCreate(
     listaPeliculas
)*/
/*  
db.Genre.bulkCreate([
     {genre:'Ciencia Ficción'},
     {genre:'Terror'},
     {genre:'Amor'},
     {genre:'Comedia'},
     {genre:'Policial'},
    {genre:'Aventura'},
    {genre:'Bélico'},
    {genre:'Drama'},
    {genre:'Suspenso'},
    {genre:'Misterio'},
    {genre:'Fantasía'},
    {genre:'Infantil'},
    {genre:'Familiar'},
    {genre:'Biografía'},
    {genre:'Animación'},
    {genre:'Romance'},
    {genre:'Crimen'},
    {genre:'Documental'},

])*/
/*
db.Language.bulkCreate([
    {language:'Español'},
    {language:'Inglés'},
    {language:'Portugués'},
    {language:'Francés'},
    {language:'Italiano'},

])*/
  
  




