const path = require('path')
const fs = require('fs');
const db = require('../database/models');

const { validationResult } = require('express-validator');

const productsFilePath = path.join(__dirname, '../data/products.json');
const listaPeliculas = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


// Atencion que todas las rutas de este controller empiezan con /products


const productsController = {
    misAlquileres: (req,res)=>{

        db.Movie.findAll({include: [ {association:'users_rentals'} ] } ) 
        .then(results => {
            let rentalList = []
            results.forEach(pelicula => {
                if (pelicula.users_rentals.length > 0) {
                    pelicula.users_rentals.forEach(element => {
                        element.id == req.session.userLogged[0].id ? rentalList.push(pelicula) : null
                    });
                }
            });
            //res.json( rentalList)
            res.render('misAlquileres', {listaPeliculas, user: req.session.userLogged[0], rentalList})
        })

        //res.render('misAlquileres', {listaPeliculas, user: req.session.userLogged})
    },
    productDetail: (req,res)=>{
        let id = req.query.id || 1
        let anterior = id-1 || id
        let siguiente = (parseInt(id)+1) ||(parseInt(id)+2)||(parseInt(id)+3) || 1 // listaPeliculas.length>=( parseInt(id)+1) ? ( parseInt(id)+1) : 1
        db.Movie.findByPk(id,{include: [{association: "genres"},{association: "languages"}]})
        .then(movie=>{
            res.render('productDetail', {listaPeliculas, id, anterior, siguiente, user: req.session.userLogged[0], movie})
            //console.log('hola!!!!!!!',req.session.userLogged)
        })
    },
    administrarProductos: (req,res)=>{
        let palabraBuscada = req.query.filtrar || ''
        let peliculasFiltradas = []
        for(let i = 0 ;  i< listaPeliculas.length ;i++){
            if(listaPeliculas[i].titulo.toLowerCase().includes(palabraBuscada.toLowerCase())){
                peliculasFiltradas.push(listaPeliculas[i])
            }
        }
        db.Movie.findAll()
        .then(movies=>{
            res.render('administrarProductos', {listaPeliculas, peliculasFiltradas, user: req.session.userLogged[0], movies})
        })
    },
    listadoDeseos: (req,res)=>{
        db.Movie.findAll({include: [ {association:'users_wishlist'} ] } ) //,where:{ users_wishlist.movies_users_wishlist.id_user: req.session.userLogged.id }
        .then(results => {
            let wishList = []
            results.forEach(pelicula => {
                //pelicula.users_wishlist.length > 0 ? wishList.push(pelicula) : null
                if (pelicula.users_wishlist.length > 0) {
                    pelicula.users_wishlist.forEach(element => {
                        element.id == req.session.userLogged[0].id ? wishList.push(pelicula) : null
                    });
                }
            });
            //res.json( wishList)
            res.render('listadoDeseos', {listaPeliculas, user: req.session.userLogged[0], wishList})
        })
    },
    buscarProductos: (req,res)=>{
        let palabraBuscada = req.query.filtrar || ''
        let peliculasFiltradas = []
        for(let i = 0 ;  i< listaPeliculas.length ;i++){
            if(listaPeliculas[i].titulo.toLowerCase().includes(palabraBuscada.toLowerCase())){
                peliculasFiltradas.push(listaPeliculas[i])
            }
        }
        res.render('buscarProductos', {listaPeliculas, peliculasFiltradas,palabraBuscada, user: req.session.userLogged[0]})
    },
    editarProducto:(req,res)=>{
        let idProducto = req.query.id 

        let MovieToEdit = db.Movie.findByPk(req.query.id,{include: [{association: "genres"},{association: "languages"}]})
        let Languages = db.Language.findAll()
        let Genres = db.Genre.findAll()

        Promise.all([MovieToEdit, Languages,Genres])

        .then(([MovieToEdit, Languages, Genres])=>{
            //res.json(MovieToEdit)
            //console.log(MovieToEdit)
            res.render('editarProducto',{idProducto, listaPeliculas, user: req.session.userLogged[0], Languages, Genres, MovieToEdit})
        })

        // console.log(idProducto, 'editarproducto')
    },

    guardarProductoEditado:(req,res)=>{
        let resultadoValidacion = validationResult(req);

        if(resultadoValidacion.errors.length <= 0){
        db.Movie.update(
            {
                title: req.body.titulo,
                image_url: req.body.imagen, // || "https://i.pinimg.com/564x/f8/28/73/f828738fc037b66f2bdb74deaf36ad3d.jpg", 
                description: req.body.descripcion,
                length: req.body.duracion,
                release_year: req.body.release_year,
                price: req.body.precio,
                trailer: req.body.trailer, // || "https://www.youtube.com/embed/LDXYRzerjzU",
                is_active: req.body.is_active,
                movie_url: "https://www.youtube.com/embed/LDXYRzerjzU",
                blockbuster_rating: req.body.CalificacionBlockbuster,
                imdb_rating: req.body.CalificacionIMDb,
                rotten_tomatoes_rating: req.body.CalificacionRottenTomatoes

            },{
                where:{id:req.body.id}
            }
        )
        db.Movie.findByPk(req.body.id)
        .then(movie=>{
            movie.setGenres(req.body.genres)
            movie.setLanguages(req.body.languages)
            res.redirect('/products/administrarProductos') 
        })
    }else{
        let idProducto = req.query.id 

        let MovieToEdit = db.Movie.findByPk(req.query.id,{include: [{association: "genres"},{association: "languages"}]})
        let Languages = db.Language.findAll()
        let Genres = db.Genre.findAll()

        Promise.all([MovieToEdit, Languages,Genres])

        .then(([MovieToEdit, Languages, Genres])=>{
            //res.json(MovieToEdit)
            // console.log(MovieToEdit)
            res.render('editarProducto',{idProducto, user: req.session.userLogged[0], Languages, Genres, MovieToEdit, errors: resultadoValidacion.mapped(), oldData:req.body})
        })
    }
    
        
    },

    crearNuevoProducto:(req,res)=>{
        let Languages = db.Language.findAll()
        let Genres = db.Genre.findAll()

        Promise.all([Languages,Genres])

        .then(([Languages,Genres])=>{
            res.render('crearNuevoProducto', {user: req.session.userLogged[0], Languages, Genres})
        })
    },

    guardarNuevoProducto:(req,res)=>{
        let resultadoValidacion = validationResult(req);

        if(resultadoValidacion.errors.length <= 0){
        db.Movie.create({
            title: req.body.titulo,
            image_url: req.body.imagen || req.file ? '/images/img-movies/'+req.file.filename : "https://i.pinimg.com/564x/f8/28/73/f828738fc037b66f2bdb74deaf36ad3d.jpg", 
            description: req.body.descripcion,
            length: req.body.duracion,
            release_year: req.body.release_year,
            price: req.body.precio,
            trailer: req.body.trailer ||  "https://www.youtube.com/embed/LDXYRzerjzU",
            is_active: req.body.is_active,
            movie_url: "https://www.youtube.com/embed/LDXYRzerjzU",
            blockbuster_rating: req.body.CalificacionBlockbuster,
            imdb_rating: req.body.CalificacionIMDb,
            rotten_tomatoes_rating: req.body.CalificacionRottenTomatoes
        })
            // .then(movie => movie.setGenres(1))
            .then(movie => {
                movie.setGenres(req.body.genres)
                movie.setLanguages(req.body.languages)
                //console.log(movie)
                res.redirect('/products/administrarProductos') 

            })
            .catch(errors=>{
                res.send(errors)
            })
        }else{
            let Languages = db.Language.findAll()
            let Genres = db.Genre.findAll()
            Promise.all([Languages,Genres])
                .then(([Languages,Genres])=>{
                    console.log(resultadoValidacion.errors)
                    res.render('crearNuevoProducto', {user: req.session.userLogged[0], Languages, Genres, errors: resultadoValidacion.mapped(), oldData:req.body })
                })
        }

        
    },

    eliminarProducto:(req,res)=>{
        let idProducto = req.params.id
        // let newProducts =[]

		// listaPeliculas.forEach(element => {
		// 	if(idProducto != element.id){newProducts.push(element)}
		// });
		// fs.writeFileSync(productsFilePath, JSON.stringify(newProducts,null, '\t'))
        db.MovieLanguage.destroy(   {where: {id_movie: idProducto}})
        db.MovieGenre.destroy(  {where: {id_movie: idProducto}})
        db.Movie.destroy(  {where:  {id:idProducto}  }  )
        .then(luego=>{
            res.redirect('/products/administrarProductos')
        })
    },
    video:(req,res)=>{
        let idProducto = req.params.id || 1
        res.render('video', {listaPeliculas, idProducto, user: req.session.userLogged[0]})
    },
    
}

module.exports = productsController