const { check } = require('express-validator');

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
                            .isLength({max: 300}).withMessage('Es demaciado largo, max. 300 caracteres'),
    check('imageMovie'), //imagen cargada del usuario
] 