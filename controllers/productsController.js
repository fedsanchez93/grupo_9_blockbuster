const path = require('path')
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/products.json');
const listaPeliculas = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

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
        res.render('editarProducto')
    }
}

module.exports = productsController