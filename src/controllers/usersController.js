const path = require('path')
const fs = require('fs');
const bcrypt = require('bcryptjs')
//const User = require('../../models/User');
const User = require('../database/models/User');
const { validationResult } = require('express-validator');
const db = require('../database/models');


const usersFilePath = path.join(__dirname, '../data/users.json');
const listaUsers = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

/* Función que suma o resta días a una fecha, si el parámetro
   días es negativo restará los días*/
   function sumarDias(fecha, dias){
	fecha.setDate(fecha.getDate() + dias);
	return fecha;
  }

const controller = {

	perfil: (req, res) => {
		db.User.findByPk(req.session.userLogged[0].id,{include: [{association: "genres"}]})
			.then(user => res.render('users/perfilUser',{user: req.session.userLogged[0]}))
	},
    editarPerfil:(req,res)=>{
		db.Genre.findAll()
		.then(genres=>{
			res.render('users/editarPerfilUser',{user: req.session.userLogged[0], genres})
		})
    },
    
    processRegister: (req, res) => {
		const resultValidation = validationResult(req);

		db.Genre.findAll()
		.then(genres=>{

		
		if (resultValidation.errors.length > 0) {
			return res.render('register', {
				errors: resultValidation.mapped(),
				oldData: req.body,
				genres
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
						oldData: req.body,
						genres
					});	
				
				} else {
					db.User.create({
						name: req.body.name,
						username:req.body.usuario,
						email:req.body.email,
						password: bcrypt.hashSync(req.body.password, 10),
						image_url: req.file ? req.file.filename : '/userFoto.jpeg',
						is_admin:0,
						id_favorite_genre:req.body.id_favorite_genre,
						is_active:1
					})
						.then(res.redirect('/login'));
				}
			})

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
			.then(users => res.render('users/listaUsuarios',{users,user: req.session.userLogged[0]}));
		
	},

	editarUsuario:(req,res)=>{
		if(req.session.userLogged[0].is_admin == 1) { 
			db.User.findByPk(req.params.id,{include: [{association: "genres"}]})
				.then(userToEdit => res.render('users/editarPerfilAdmin',{user: req.session.userLogged[0], userToEdit}));
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
				"image_url": userToEdit.image_url,
				"is_admin": userToEdit.is_admin,
				//"id_favorite_genre":userToEdit.id_favorite_genre
			})

		db.User.update(
			{
				"id": req.body.id,
				"name": req.body.name,
				"username": req.body.username,
				"email": req.body.email,
				password: bcrypt.hashSync(req.body.password, 10),
				"image_url": req.body.image_url,
				"is_admin": req.body.is_admin,
				id_favorite_genre: req.body.id_favorite_genre
			},
			{
				where: {id: req.params.id}
			})
			.then(user => {res.redirect('/users/perfil'); console.log(req.body)});
	},

	confirmarBorrado: (req,res)=> {
		if(req.session.userLogged[0].is_admin == 1) { 
			//let userToDelete = listaUsers.find(user => user.id == req.params.id);
			db.User.findByPk(req.params.id,{include: [{association: "genres"}]})
			.then(userToDelete => res.render('users/eliminarUsuario',{user:req.session.userLogged[0], userToDelete})) 
	
		} else {
			res.redirect('/');
		}
	},

	borrarUsuario: (req,res)=> {
		if(req.session.userLogged[0].is_admin == 1) { 
			db.User.destroy({where : {id: req.params.id},force : true})
				.then(()=>{return res.redirect('/')})
					.catch(error => res.send(error)); 
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
		.then(result=>{
			res.redirect('/products/listadoDeseos')
		}) 
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
		.then(result=>res.redirect('/products/listadoDeseos'))
	},
	addCart:(req,res)=>{
		let id_user = req.params.id_user
		let id_movie = req.params.id_movie
		
		db.MovieUserCart.create({
			id_movie:id_movie,
			id_user:id_user
		})
		.then(result=>res.redirect('/carrito')) 
		db.MovieUserWish.destroy({
			where:{
				id_movie:id_movie,
				id_user:id_user
			}
		})
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
		.then(result=>res.redirect('/carrito'))
	},
	addRental:(req,res)=>{
		let id_user = req.params.id_user
		let id_movie = req.params.id_movie
		let d = new Date();
		//console.log('now:',d,'+1:',sumarDias(d, 1));
		let arrayMoviesToBuy = []
		console.log(req.body.cartList)


		db.MovieUserRental.bulkCreate([{
			id_movie:id_movie,
			id_user:id_user,
			expired_at: sumarDias(d, req.body.dias) //suma un dia con 0  //'2023-02-03T19:23:08.183Z'   
		}])
		.then(result=>{console.log('body:',req.body.dias); res.redirect('/products/misAlquileres'); }) 
		
		db.MovieUserCart.destroy({ 
			where:{
				id_movie:id_movie,  
				id_user:id_user 
			}
		})

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
		.then(result=>res.redirect('/products/misAlquileres'))
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