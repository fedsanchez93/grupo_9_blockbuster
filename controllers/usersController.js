const path = require('path')
const fs = require('fs');
const bcrypt = require('bcryptjs')
const User = require('../models/User');

const usersFilePath = path.join(__dirname, '../data/users.json');
const listaUsers = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const controller = {
    perfil:(req,res)=>{
        let id = req.params.id
        res.render('users/perfilUser',{listaUsers, id, user: req.session.userLogged})
    },
    editarPerfil:(req,res)=>{
        res.render('users/editarPerfilUser',{listaUsers})
    },
    guardarRegistro:(req,res)=>{
        let emailRepetido = false
        let salida
        listaUsers.forEach(element => {
           if( element.email == req.body.email ){
            emailRepetido = true
           } 
        });
        let newUser = {
            id: (listaUsers[listaUsers.length-1].id)+1,
            name:req.body.name,
            usuario:req.body.usuario,
            email:req.body.email,
            password: bcrypt.hashSync( req.body.password, 10),
            image: req.file ? req.file.filename : '/userFoto.jpeg'
        }
        res.redirect('/users/login')
        // if(!emailRepetido){
        listaUsers.push(newUser)
        fs.writeFileSync(usersFilePath, JSON.stringify(listaUsers,null, '\t' ))
        // salida = './users/perfilUser'
        // }else{  salida = 'register'  }
        
        // console.log(newUser)
        // res.render(salida ,{old:req.body, listaUsers})
        //console.log(req.file.filename)
    },
    // verificarLogin:(req,res)=>{
    //     let usuario = {
    //         email:req.body.email,
    //         password:req.body.password,
    //         recordarme:req.body.recordarme
    //     }
    //     //console.log(usuario.recordarme)
    //     let salida
    //     listaUsers.forEach(element => {
    //         if(element.email == usuario.email && bcrypt.compareSync(usuario.password, element.password) && usuario.recordarme == 'recordarme'){
    //             res.cookie('usuarioLogueado',element.email)
    //             salida = '/perfil'
    //             //console.log('hola')
                
                
    //             // req.session.usuario = element
    //             //console.log(req.cookies.usuarioLogueado)
                
    //             // //console.log(req.cookies.usuario)
    //             // if(usuario.recordarme == 'recordarme'){res.cookie('usuario',element.email)}
    //         }else if(element.email == usuario.email && bcrypt.compareSync(usuario.password, element.password)){
    //             req.session.usuario = element
    //             salida = '/users/perfil'
    //         }else{
    //             salida = '/login'
    //         }
            
    //     });
    //     res.redirect(salida)
    // },
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
				}
			});
		}

		return res.render('login', {
			errors: {
				email: {
					msg: 'No se encuentra este email en nuestra base de datos'
				}
			}
		});
	},
    logout: (req, res) => {
		res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect('/');
	}
}

module.exports = controller