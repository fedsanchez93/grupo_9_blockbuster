function authMiddleware(req, res, next) {
	if (!req.session.userLogged) { //en el caso q no este logueado, redirige a login
		return res.redirect('/login');
	}
	next();
}

module.exports = authMiddleware;