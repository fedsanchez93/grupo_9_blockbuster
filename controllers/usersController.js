const path = require('path')
const fs = require('fs');
const bcrypt = require('bcryptjs')
const User = require('../models/User');
const { validationResult } = require('express-validator');

const usersFilePath = path.join(__dirname, '../data/users.json');
const listaUsers = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const controller = {
    perfil:(req,res)=>{
        let id = req.params.id
        res.render('users/perfilUser',{listaUsers, id, user: req.session.userLogged})
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

		let userInDB = User.findByField('email', req.body.email);

		if (userInDB) {
			return res.render('register', {
				errors: {
					email: {
						msg: 'Este email ya está registrado'
					}
				},
				oldData: req.body
			});
            
		}

		let userToCreate = {
			...req.body,
			name:req.body.name.toUpperCase(),
			password: bcrypt.hashSync(req.body.password, 10),
			image: req.file ? req.file.filename : '/userFoto.jpeg',
			category: "visitor"
		}

		let userCreated = User.create(userToCreate);
        console.log(userCreated)
		return res.redirect('/login');
	},
    
    loginProcess: (req, res) => {
		let userToLogin = User.findByField('email', req.body.email);
		
		if(userToLogin) {
			let isOkThePassword = bcrypt.compareSync(req.body.password, userToLogin.password);
			if (isOkThePassword) {
				delete userToLogin.password;
				req.session.userLogged = userToLogin;

				if(req.body.remember_user) {
					res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 * 24 * 10}) //dura 10 dias
				}

				return res.redirect('/users/perfil/');
			} 

			return res.render('login', {
				errors: {
					email: {
						msg: 'Las credenciales son inválidas'
					}
				},
				oldData: req.body
			});
		}

		return res.render('login', {
			errors: {
				email: {
					msg: 'No se encuentra este email en nuestra base de datos'
				}
			},
			oldData: req.body
		});
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
		res.render('users/listaUsuarios',{listaUsers,user: req.session.userLogged})
		
	},

	editarUsuario:(req,res)=>{
		if(req.session.userLogged.category == "admin") { 
			let userToEdit = listaUsers.find(user => user.id == req.params.id);

			res.render('users/editarPerfilAdmin',{user:req.session.userLogged, userToEdit});
		} else {
			res.redirect('/');
		}
	},

	guardarUsuario:(req,res)=> {

		let userToEdit = listaUsers.find(user => user.id == req.params.id);

		userToEdit = {
			"id": userToEdit.id,
			"name": userToEdit.name,
			"usuario": userToEdit.usuario,
			"email": userToEdit.email,
			password: bcrypt.hashSync(req.body.password, 10),
			"image": userToEdit.image,
			"category": req.body.category
		};

		let newListaUsers= listaUsers.map(element => {
			if(userToEdit.id == element.id){return element = userToEdit}
			return element
		})

        fs.writeFileSync(usersFilePath, JSON.stringify(newListaUsers,null, '\t' ))
		res.redirect('/');
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
	} 

}

module.exports = controller