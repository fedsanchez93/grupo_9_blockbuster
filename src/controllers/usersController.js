const path = require('path')
const fs = require('fs');
const bcrypt = require('bcryptjs')
//const User = require('../../models/User');
const User = require('../database/models/User');
const { validationResult } = require('express-validator');
const db = require('../database/models');

const usersFilePath = path.join(__dirname, '../data/users.json');
const listaUsers = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const controller = {

	perfil: (req, res) => {
		db.User.findByPk(req.session.userLogged[0].id,{include: [{association: "genres"}]})
			.then(user => res.render('users/perfilUser',{user: req.session.userLogged[0]}))
	},
    editarPerfil:(req,res)=>{
        res.render('users/editarPerfilUser',{listaUsers, user: req.session.userLogged})
    },
    
    processRegister: (req, res) => {
		const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			return res.render('register', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}

		db.User.findAll({
			where:{"email":req.body.email}
		})
			.then(userInDB => {

				if (userInDB.length > 0) { 
				res.render('register', {
						errors: {
							email: {
								msg: 'Este email ya está registrado'
							}
						},
						oldData: req.body
					});	
				
				} else {
					db.User.create({
						name: req.body.name,
						username:req.body.usuario,
						email:req.body.email,
						password: bcrypt.hashSync(req.body.password, 10),
						image_url: req.file ? req.file.filename : '/userFoto.jpeg',
						is_admin:0,
						id_favorite_genre:1,
						is_active:1
					})
						.then(res.redirect('/login'));
				}
			})
	},
   
    loginProcess: (req, res) => {
		//let userToLogin = db.User.findByField('email', req.body.email);	
		db.User.findAll({
			where:{"email":req.body.email}
		})
			//.then(userToLogin => console.log(userToLogin));
			.then(userToLogin => {
				let isOkThePassword = userToLogin.length > 0 ? bcrypt.compareSync(req.body.password, userToLogin[0].password) : null;
				if (isOkThePassword) {
					delete userToLogin.password;
					req.session.userLogged = userToLogin;
	
					if(req.body.remember_user) {
						res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 * 24 * 10}) //dura 10 dias
					}
	
					//return res.redirect('/users/perfil/');
					res.render('users/perfilUser',{user: userToLogin[0]})
					//res.json(userToLogin);
				} else if(!isOkThePassword && userToLogin.length > 0  && userToLogin[0].email == req.body.email) {
					return res.render('login', {
						errors: {
							email: {
								msg: 'Las credenciales son inválidas '
							}
						},
						oldData: req.body
					})
				} else {
					res.render('login', {
						errors: {
							email: {
								msg: 'No se encuentra este email en nuestra base de datos'
							}
						},
						oldData: req.body
					});
				}		
			})		
	},
    logout: (req, res) => {
		res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect('/');
	},
	deseos:(req,res)=>{
		User.agregarToDeseos(28,  4)
		res.redirect('/products/listadoDeseos')
	},
	listaUsuarios:(req,res)=>{
		db.User.findAll()
			.then(users => res.render('users/listaUsuarios',{users,user: req.session.userLogged}));
		
	},

	editarUsuario:(req,res)=>{
		if(req.session.userLogged.category == "admin") { 
			db.User.findByPk(req.params.id,{include: [{association: "genres"}]})
				.then(userToEdit => res.render('users/editarPerfilAdmin',{user:req.session.userLogged, userToEdit}));
		} else {
			res.redirect('/');
		}
	},

	guardarUsuario:(req,res)=> {

		db.User.findByPk(req.params.id,{include: [{association: "genres"}]})
			.then(userToEdit => userToEdit = {
				"id": userToEdit.id,
				"name": userToEdit.name,
				"username": userToEdit.username,
				"email": userToEdit.email,
				password: bcrypt.hashSync(req.body.password, 10),
				"image": userToEdit.image,
				"is_admin": userToEdit.is_admin
			})

		db.User.update(
			{
				"id": req.body.id,
				"name": req.body.name,
				"username": req.body.username,
				"email": req.body.email,
				password: bcrypt.hashSync(req.body.password, 10),
				"image": req.body.image,
				"is_admin": req.body.is_admin
			},
			{
				where: {id: req.params.id}
			})
			.then(res.redirect('/'));
	},

	confirmarBorrado: (req,res)=> {
		if(req.session.userLogged.category == "admin") { 
			let userToDelete = listaUsers.find(user => user.id == req.params.id);
			res.render('users/eliminarUsuario',{user:req.session.userLogged, userToDelete});
		} else {
			res.redirect('/');
		}
	},

	borrarUsuario: (req,res)=> {
		if(req.session.userLogged.category == "admin") { 
			let userDelete = listaUsers.filter(user => user.id != req.params.id);
			fs.writeFileSync(usersFilePath, JSON.stringify(userDelete,null, '\t'));
			res.redirect('/');
		} else {
			res.redirect('/');
		}
	},
	addWishes:(req,res)=>{
		let id_user = req.params.id_user
		let id_movie = req.params.id_movie
		
		db.MovieUserWish.create({
			id_movie:id_movie,
			id_user:id_user
		})
		.then(result=>res.redirect('/products/productDetail?id='+id_movie)) //res.json(result) '/products/productDetail?id='+id_movie
	},
	deleteWishes:(req,res)=>{
		let id_user = req.params.id_user
		let id_movie = req.params.id_movie
		
		db.MovieUserWish.destroy({
			where:{
				id_movie:id_movie,
				id_user:id_user
			}
			
		})
		.then(result=>res.redirect('/products/productDetail?id='+id_movie))
	},
	addCart:(req,res)=>{
		let id_user = req.params.id_user
		let id_movie = req.params.id_movie
		
		db.MovieUserCart.create({
			id_movie:id_movie,
			id_user:id_user
		})
		.then(result=>res.redirect('/products/productDetail?id='+id_movie)) 
	},
	deleteCart:(req,res)=>{
		let id_user = req.params.id_user
		let id_movie = req.params.id_movie
		
		db.MovieUserCart.destroy({ 
			where:{
				id_movie:id_movie,
				id_user:id_user
			}
			
		})
		.then(result=>res.redirect('/products/productDetail?id='+id_movie))
	},
	addRental:(req,res)=>{
		let id_user = req.params.id_user
		let id_movie = req.params.id_movie
		
		db.MovieUserRental.create({
			id_movie:id_movie,
			id_user:id_user
		})
		.then(result=>res.redirect('/carrito/'+id_movie)) 
	},
	deleteRental:(req,res)=>{
		let id_user = req.params.id_user
		let id_movie = req.params.id_movie
		
		db.MovieUserRental.destroy({ 
			where:{
				id_movie:id_movie,
				id_user:id_user
			}
			
		})
		.then(result=>res.redirect('/carrito/'+id_movie))
	},
}

module.exports = controller




// window.onload = function(){

// 	let data = {
// 		image_id:'sf2',
// 		sub_id:'2',
// 		value:1
// 	}
// 	let settings = {
// 		method:'POST',
// 		headers:{
// 			'Content-Type':'application/json',
// 			'x-api...':'sssclave'
// 		},
// 		body:JSON.stringify(data)
// 	}

// fetch("https://restcountries.eu/rest/v2/", settings)
// .then(function(response){
// 	return response.json();
// })
// .then(function(data){
// 	console.log(data)
// })
// .catch(function(error){
// 	console.error(error)
// })

// }