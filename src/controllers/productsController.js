const path = require('path')
const fs = require('fs');
const db = require('../database/models');

const productsFilePath = path.join(__dirname, '../data/products.json');
const listaPeliculas = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


// Atencion que todas las rutas de este controller empiezan con /products


const productsController = {
    misAlquileres: (req,res)=>{
        let id = req.query.id || 4
        res.render('misAlquileres', {listaPeliculas, id, user: req.session.userLogged})
    },
    productDetail: (req,res)=>{
        let id = req.query.id || 4
        let anterior = id-1 || listaPeliculas.length
        let siguiente = listaPeliculas.length>=( parseInt(id)+1) ? ( parseInt(id)+1) : 1
        res.render('productDetail', {listaPeliculas, id, anterior, siguiente, user: req.session.userLogged})
    },
    administrarProductos: (req,res)=>{
        let palabraBuscada = req.query.filtrar || ''
        let peliculasFiltradas = []
        for(let i = 0 ;  i< listaPeliculas.length ;i++){
            if(listaPeliculas[i].titulo.toLowerCase().includes(palabraBuscada.toLowerCase())){
                peliculasFiltradas.push(listaPeliculas[i])
            }
        }
        res.render('administrarProductos', {listaPeliculas, peliculasFiltradas, user: req.session.userLogged})
    },
    listadoDeseos: (req,res)=>{
        res.render('listadoDeseos', {listaPeliculas, user: req.session.userLogged})
    },
    buscarProductos: (req,res)=>{
        let palabraBuscada = req.query.filtrar || ''
        let peliculasFiltradas = []
        for(let i = 0 ;  i< listaPeliculas.length ;i++){
            if(listaPeliculas[i].titulo.toLowerCase().includes(palabraBuscada.toLowerCase())){
                peliculasFiltradas.push(listaPeliculas[i])
            }
        }
        res.render('buscarProductos', {listaPeliculas, peliculasFiltradas,palabraBuscada, user: req.session.userLogged})
    },
    editarProducto:(req,res)=>{
        let idProducto = req.query.id 

        // console.log(idProducto, 'editarproducto')
        res.render('editarProducto',{idProducto, listaPeliculas, user: req.session.userLogged})
    },

    guardarProductoEditado:(req,res)=>{
        // let idProducto = req.query.id
        let newPelicula = {
            id: req.body.id || 1,
            titulo:req.body.titulo,
            imagen:req.body.imagen,
            descripcion:req.body.descripcion,
            genero:req.body.genero || '',
            idioma:req.body.idioma || '',
            duracion:req.body.duracion,
            precio:req.body.precio,
            trailer:req.body.trailer,
            categoria:req.body.categoria || '',
            CalificacionBlockbuster:req.body.CalificacionBlockbuster,
            CalificacionIMDb:req.body.CalificacionIMDb,
            CalificacionRottenTomatoes:req.body.CalificacionRottenTomatoes,
        }
        
        // console.log(newPelicula, idProducto)
        let newlistaPeliculas = listaPeliculas.map(element => {
			if(newPelicula.id == element.id){return element = newPelicula}
			return element
		})

        fs.writeFileSync(productsFilePath, JSON.stringify(newlistaPeliculas,null, '\t' ))
        
        res.redirect('/products/administrarProductos')
    },

    crearNuevoProducto:(req,res)=>{
        let idProducto = req.query.id
        res.render('crearNuevoProducto', {idProducto, user: req.session.userLogged})
    },

    guardarNuevoProducto:(req,res)=>{
        
        db.Movie.create({
            title: "Test pelicula 5",
            image_url: "http://sarasaimagen",
            description: "Esto es una descripcion de prueba",
            length: 150,
            release_year: 2023,
            price: 223.25,
            trailer: 10,
            is_active: 1,
            movie_url: "http://sarasamovie",
            blockbuster_rating: 5,
            imdb_rating: 3,
            rotten_tomatoes_rating: 8
        })
            // .then(movie => movie.setGenres(1))
            .then(movie => movie.setLanguages([1,2]))
            .then(movie => res.json(movie));

        /*let newPelicula = {
            id: listaPeliculas[listaPeliculas.length-1].id+1,
            titulo:req.body.titulo || '',
            imagen:req.body.imagen || "/images/MaquinasMortales.jpg",
            descripcion:req.body.descripcion,
            genero:req.body.genero || '',
            idioma:req.body.idioma || '',
            duracion:req.body.duracion,
            precio:req.body.precio,
            trailer:req.body.trailer || "https://www.youtube.com/embed/zDABDg7vwsk",
            categoria:req.body.categoria || '',
            CalificacionBlockbuster:req.body.CalificacionBlockbuster,
            CalificacionIMDb:req.body.CalificacionIMDb,
            CalificacionRottenTomatoes:req.body.CalificacionRottenTomatoes,
        }
        listaPeliculas.push(newPelicula)
        fs.writeFileSync(productsFilePath, JSON.stringify(listaPeliculas,null, '\t' ))*/

        //res.redirect('/products/administrarProductos')
    },

    eliminarProducto:(req,res)=>{
        let idProducto = req.params.id
        let newProducts =[]

		listaPeliculas.forEach(element => {
			if(idProducto != element.id){newProducts.push(element)}
		});
		fs.writeFileSync(productsFilePath, JSON.stringify(newProducts,null, '\t'))


        res.redirect('/products/administrarProductos')
    },
    video:(req,res)=>{
        let idProducto = req.params.id || 1
        res.render('video', {listaPeliculas, idProducto, user: req.session.userLogged})
    },
    
}

module.exports = productsController