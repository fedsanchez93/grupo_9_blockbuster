const path = require('path')
const fs = require('fs');
const db = require('../database/models');

const productsFilePath = path.join(__dirname, '../data/products.json');
const charactersFilePath = path.join(__dirname, '../data/characters.json')
const listaPeliculas = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const listaPersonajes = JSON.parse(fs.readFileSync(charactersFilePath, 'utf-8'));

const masBuscadas = listaPeliculas.filter(function(product){
	return product.categoria == "mas-buscadas";
});

const recomendadas = listaPeliculas.filter(function(product){
	return product.categoria == "recomendadas";
});

const mainController = {
    home: (req,res)=>{
        //res.render('home', {masBuscadas, recomendadas, listaPersonajes, user: req.session.userLogged})
        db.Movie.findAll({
            include: [{association: "genres"},{association: "languages"}]
        })
        .then(movies => res.render('home', {masBuscadas, recomendadas, listaPersonajes, user: req.session.userLogged[0], movies}));
    },
    login: (req,res)=>{
        res.render('login')
    },
    register: (req,res)=>{
        res.render('register')
    },
    carrito: (req,res)=>{

        let id = req.params.id || 1
        let anterior = id-1 || id
        let siguiente = ( (parseInt(id)+1) || 1 )

        let movie = db.Movie.findByPk(id,{include: [{association: "genres"},{association: "languages"}]})
        let movies = db.Movie.findAll({include: [ {association:'users_cart'} ] } ) 
        Promise.all([movie, movies])
        .then(([movie, movies]) => {
            let cartList = []
            let PrecioTotal =0
            movies.forEach(pelicula => {
                if (pelicula.users_cart.length > 0) {
                    pelicula.users_cart.forEach(element => {
                        element.id == req.session.userLogged[0].id ? cartList.push(pelicula) : null
                        element.id == req.session.userLogged[0].id ? PrecioTotal += parseInt(pelicula.price)  : null

                    });
                }
            });
            let menos5porciento = Math.round(PrecioTotal / 1.05) 
            let menos10porciento = Math.round(PrecioTotal / 1.1)
            let menos20porciento = Math.round(PrecioTotal / 1.2)
            let menos30porciento = Math.round(PrecioTotal / 1.3)

            //console.log('PrecioTotal',PrecioTotal, menos5porciento, menos10porciento, menos20porciento, menos30porciento)
            
            //res.json(cartList)
            res.render('carrito', {listaPeliculas, id, anterior, siguiente, user: req.session.userLogged[0], cartList, movie, menos5porciento, menos10porciento, menos20porciento, menos30porciento})
        })
    },
    carrito2: (req,res)=>{
        res.render('carrito2')
    },
}

module.exports = mainController