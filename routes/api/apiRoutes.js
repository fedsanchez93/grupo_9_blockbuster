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



module.exports = router;
