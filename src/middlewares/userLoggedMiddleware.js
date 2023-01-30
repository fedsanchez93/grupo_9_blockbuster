const User = require('../../models/User');
const db = require('../database/models');

function userLoggedMiddleware(req, res, next) {
	res.locals.isLogged = false;

	let emailInCookie = req.cookies.userEmail ? req.cookies.userEmail : '' ;
	//locals.req.cookies.userEmail ? emailInCookie = req.cookies.userEmail : null
	//let userFromCookie = User.findByField('email', emailInCookie);
	let	userFromCookie = db.User.findAll({
			where:{email:emailInCookie}
		})
		.then(result=>{
			
			if (result.length > 0) {
				req.session.userLogged = result[0];
			}
		
			if (req.session.userLogged) {
				res.locals.isLogged = true;
				res.locals.userLogged = req.session.userLogged;
			}
		
			next();
		})
	

	
}

module.exports = userLoggedMiddleware;