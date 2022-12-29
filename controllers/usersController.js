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
    // guardarRegistro:(req,res)=>{
    //     let emailRepetido = false
    //     let salida
    //     listaUsers.forEach(element => {
    //        if( element.email == req.body.email ){
    //         emailRepetido = true
    //        } 
    //     });
    //     let newUser = {
    //         id: (listaUsers[listaUsers.length-1].id)+1,
    //         name:req.body.name.toUpperCase(),
    //         usuario:req.body.usuario,
    //         email:req.body.email,
    //         password: bcrypt.hashSync( req.body.password, 10),
    //         image: req.file ? req.file.filename : '/userFoto.jpeg'
    //     }
    //     res.redirect('/login')
    //     // if(!emailRepetido){
    //     listaUsers.push(newUser)
    //     fs.writeFileSync(usersFilePath, JSON.stringify(listaUsers,null, '\t' ))
        
    // },
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
			image: req.file ? req.file.filename : '/userFoto.jpeg'
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
	}
}

module.exports = controller