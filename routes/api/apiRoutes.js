const express = require("express");
const router = express.Router();
const moviesAPIController = require("../../src/controllers/api/moviesApiController");
const usersApiController = require('../../src/controllers/api/usersApiController')


//Rutas

//Listado de películas
router.get("/products", moviesAPIController.list);
//Detalle de una película
router.get("/products/:id", moviesAPIController.detail);

//Filtrar películas por rating. Puede colocar desde 1 hasta 10
// router.get("/recomended/:rating", moviesAPIController.recomended);

//Agregar una película
router.post("/products/create", moviesAPIController.create);
//Modificar una película
router.put("/products/update/:id", moviesAPIController.update);
//Eliminar una película
router.delete("/products/delete/:id", moviesAPIController.destroy);

// listado de usuarios
router.get("/users", usersApiController.list)
router.get("/users/:id", usersApiController.detail)


// interaccion con productos
router.post('/wishes/add/:id_user/:id_movie', moviesAPIController.addWishes)
router.post('/wishes/delete/:id_user/:id_movie', moviesAPIController.deleteWishes)

router.post('/cart/add/:id_user/:id_movie', moviesAPIController.addCart)
router.post('/cart/delete/:id_user/:id_movie', moviesAPIController.deleteCart)

router.post('/rental/add/:id_user/:id_movie', moviesAPIController.addRental)
router.post('/rental/delete/:id_user/:id_movie', moviesAPIController.deleteRental)



module.exports = router;
