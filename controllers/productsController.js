const path = require('path')
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/products.json');
const listaPeliculas = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


// Atencion que todas las rutas de este controller empiezan con /products


const productsController = {

    productDetail: (req,res)=>{
        let id = req.query.id || 4
        res.render('productDetail', {listaPeliculas, id})
    },
    administrarProductos: (req,res)=>{
        let palabraBuscada = req.query.filtrar || ''
        let peliculasFiltradas = []
        for(let i = 0 ;  i< listaPeliculas.length ;i++){
            if(listaPeliculas[i].titulo.toLowerCase().includes(palabraBuscada.toLowerCase())){
                peliculasFiltradas.push(listaPeliculas[i])
            }
        }
        res.render('administrarProductos', {listaPeliculas, peliculasFiltradas})
    },
    listadoProductos: (req,res)=>{
        res.render('listadoProductos', {listaPeliculas})
    },
    buscarProductos: (req,res)=>{
        let palabraBuscada = req.query.filtrar || ''
        let peliculasFiltradas = []
        for(let i = 0 ;  i< listaPeliculas.length ;i++){
            if(listaPeliculas[i].titulo.toLowerCase().includes(palabraBuscada.toLowerCase())){
                peliculasFiltradas.push(listaPeliculas[i])
            }
        }
        res.render('buscarProductos', {listaPeliculas, peliculasFiltradas,palabraBuscada})
    },
    editarProducto:(req,res)=>{
        let idProducto = req.query.id 
        res.render('editarProducto',{idProducto, listaPeliculas})
    },

    guardarProductoEditado:(req,res)=>{
        res.redirect('/products/administrarProductos')
    },

    crearNuevoProducto:(req,res)=>{
        res.render('crearNuevoProducto')
    },

    guardarNuevoProducto:(req,res)=>{
        res.redirect('/products/administrarProductos')
    },

    eliminarProducto:(req,res)=>{
        res.redirect('/products/administrarProductos')
    },
    
}

module.exports = productsController