const { check } = require('express-validator');

module.exports = [
    check('titulo').notEmpty().withMessage('Debes completar el titulo'),
    check('duracion'),
    check('release_year'),
    check('precio'),
    check('CalificacionBlockbuster'),
    check('CalificacionIMDb'),
    check('CalificacionRottenTomatoes'),
    check('imagen'),
    check('trailer'),
    check('descripcion'),
    check('imageMovie'),
] 