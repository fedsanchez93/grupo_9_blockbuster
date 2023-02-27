const { check } = require('express-validator');
const path = require('path')
let acceptedExtensions = ['.jpg', '.png', '.gif','.jpeg','.webp'];
module.exports = [
    check('titulo')                     .isLength({min: 2, max: 100}).withMessage('Debes completar el titulo, maximo 100 caracteres'),
    check('duracion')                   .isDecimal().withMessage('Debe ser un numero valido (puede ser decimal con . )')
                                        .isLength({min: 1, max: 6}).withMessage('Debes completar la duracion, 1.00 min a 999.00 min'),

    check('release_year')               .isInt({ min: 1 }).withMessage('Debe ser un numero entero valido')
                                        .isLength({min: 4, max: 4}).withMessage('Debes completar el año de creación (4 digitos)'),

    check('precio')                     .isDecimal().withMessage('Debe ser un decimal valido (9.5)')
                                        .isLength({min: 1, max: 10}).withMessage('Debes completar el precio'),
    check('CalificacionBlockbuster')    .isLength({min: 1, max: 3}).withMessage('Debes completar la Calificacion Blockbuster, con un valor del 0 al 10')
                                        .isDecimal().withMessage('Debe ser un decimal valido (9.5)'),
    check('CalificacionIMDb')           .isLength({min: 1, max: 3}).withMessage('Debes completar la Calificacion IMDb, con un valor del 0 al 10').isDecimal().withMessage('Debe ser un decimal valido (9.5)'),
    check('CalificacionRottenTomatoes') .isLength({min: 1, max: 3}).withMessage('Debes completar la Calificacion Rotten Tomatoes, con un valor del 0 al 10').isDecimal().withMessage('Debe ser un decimal valido (9.5)'),
    
    check('imagen')                     .isLength({max: 200}).withMessage('Es demaciado largo, max. 200 caracteres'), //es la url_imagen
    check('trailer')                    .isLength({ max: 300}).withMessage('Debes completar con una url valida'), //es url
    check('descripcion')    .notEmpty().withMessage('Debes completar la descripción')
                            .isLength({max: 400}).withMessage('Es demaciado largo, max. 400 caracteres'),
    check('imageMovie').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.gif','.jpeg','.webp'];

		// if (!file) {
		// 	throw new Error('Tienes que subir una imagen');
		// } else 
		if(file){
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}

		return true;
	}).withMessage(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`), //imagen cargada del usuario
] 