const path = require('path')

let listaPeliculas = require('./listaPeliculasController')



const mainController = {
    home: (req,res)=>{
        res.render('home')
    },
    login: (req,res)=>{
        res.render('login')
    },
    register: (req,res)=>{
        res.render('register')
    },
    carrito: (req,res)=>{
        res.render('carrito')
    },
    carrito2: (req,res)=>{
        res.render('carrito2')
    },
    productDetail: (req,res)=>{
        res.render('productDetail')
    },
    administrarProductos: (req,res)=>{
        res.render('administrarProductos', {listaPeliculas})
    },
}


module.exports = mainController