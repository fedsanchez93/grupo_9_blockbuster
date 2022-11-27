const path = require('path')
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/products.json');
const listaPeliculas = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const masBuscadas = listaPeliculas.filter(function(product){
	return product.categoria == "mas-buscadas";
});

const recomendadas = listaPeliculas.filter(function(product){
	return product.categoria == "recomendadas";
});

const mainController = {
    home: (req,res)=>{
        res.render('home', {masBuscadas, recomendadas})
    },
    login: (req,res)=>{
        res.render('login')
    },
    register: (req,res)=>{
        res.render('register')
    },
    carrito: (req,res)=>{
        let id = req.params.id || 4
        let anterior = id-1 || listaPeliculas.length
        let siguiente = listaPeliculas.length>=( parseInt(id)+1) ? ( parseInt(id)+1) : 1
        res.render('carrito', {listaPeliculas, id, anterior, siguiente})
        // res.render('carrito')
    },
    carrito2: (req,res)=>{
        res.render('carrito2')
    },
}

module.exports = mainController