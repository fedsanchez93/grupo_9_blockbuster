const path = require("path");
const db = require("../../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require("moment");


const moviesApiController = {
    list: (req, res) => {

        let queryLimit = req.query.limit ? Number(req.query.limit) : 100
        //let queryOffset = req.query.offset ? Number(req.query.offset) : 0
        let queryPage = req.query.page ? Number(req.query.page) : 0
        let offset =  queryPage >=1 ? (queryPage) * queryLimit : 0
        let paginaSiguiente =  Number(queryPage+1)
        let paginaAnterior = queryPage >= 1 ? queryPage -1 : 0

        //console.log(queryLimit, queryOffset)
        // let queryPage = req.query.page ? Number(req.query.page) : 0
        // let next 
        // let previous 

        let generos = db.Genre.findAll({include:[{association:"movies"}]})
        let movies = db.Movie.findAll(
            {limit: queryLimit,
                offset: offset,  
            include: [{association: "genres"},{association: "languages"},{association:'users_rentals'},{association:'users_wishlist'},{association:'users_cart'}]}
        )
        Promise.all([movies, generos])
        .then(([movies, generos]) => {

            generos = generos.map((genero)=>{ 
                return{
                    //...generos,
                    "genre":genero.genre,
                    totalMovies:genero.movies.length 
                }
            })

            let respuesta = {
                meta: {
                    status: 200,
                    totalMovies: movies.length,
                    url: "/api/products",
                    totalGeneros:generos.length,
                    countByCategory: generos,
                    paginaSiguiente: `/api/products?limit=${queryLimit}&page=${paginaSiguiente}`,
                    paginaAnterior: `/api/products?limit=${queryLimit}&page=${paginaAnterior}`
                },
                data: movies,
            };
            res.json(respuesta);
        });
    },

    detail: (req, res) => {
        db.Movie.findByPk(req.params.id, 
            {include: [{association: "genres"},{association: "languages"}]}
            ).then((movie) => {
            let respuesta = {
                meta: {
                    status: 200,
                    //total: movie.length,
                    url: "/api/products/"+req.params.id,
                },
                data: movie,
            };
            res.json(respuesta);
        });
    },

    create: (req, res) => {
        Movies.create({
            title: req.body.titulo,
            image_url: req.body.imagen || req.file ? '/images/img-movies/'+req.file.filename : "https://i.pinimg.com/564x/f8/28/73/f828738fc037b66f2bdb74deaf36ad3d.jpg", 
            description: req.body.descripcion,
            length: req.body.duracion,
            release_year: req.body.release_year,
            price: req.body.precio,
            trailer: req.body.trailer ||  "https://www.youtube.com/embed/LDXYRzerjzU",
            is_active: req.body.is_active,
            movie_url: "https://www.youtube.com/embed/LDXYRzerjzU",
            blockbuster_rating: req.body.CalificacionBlockbuster,
            imdb_rating: req.body.CalificacionIMDb,
            rotten_tomatoes_rating: req.body.CalificacionRottenTomatoes
        })
            .then((confirm) => {
                confirm.setGenres(req.body.genres)
                confirm.setLanguages(req.body.languages)

                let respuesta;
                if (confirm) {
                    respuesta = {
                        meta: {
                            status: 200,
                            total: confirm.length,
                            url: "api/products/create",
                        },
                        data: confirm,
                    };
                } else {
                    respuesta = {  //verificar que haria en caso de error o q falte algo
                        meta: {
                            status: 200,
                            total: confirm.length,
                            url: "api/products/create",
                        },
                        data: confirm,
                    };
                }
                res.json(respuesta);
            })
            .catch((error) => res.send(error));
    },
    update: (req, res) => {
        let movieId = req.params.id;
        Movies.update(
            {
                title: req.body.titulo,
                image_url: req.body.imagen, 
                description: req.body.descripcion,
                length: req.body.duracion,
                release_year: req.body.release_year,
                price: req.body.precio,
                trailer: req.body.trailer, 
                is_active: req.body.is_active,
                movie_url: "https://www.youtube.com/embed/LDXYRzerjzU",
                blockbuster_rating: req.body.CalificacionBlockbuster,
                imdb_rating: req.body.CalificacionIMDb,
                rotten_tomatoes_rating: req.body.CalificacionRottenTomatoes
            },
            {
                where: { id: movieId },
            }
        )
            .then((confirm) => {
                db.Movie.findByPk(req.body.id)
                    .then(movie=>{
                        movie.setGenres(req.body.genres)
                        movie.setLanguages(req.body.languages)
                    })

                let respuesta;
                if (confirm) {
                    respuesta = {
                        meta: {
                            status: 200,
                            total: confirm.length,
                            url: "api/products/update/"+movieId,
                        },
                        data: confirm,
                    };
                } else {
                    respuesta = {
                        meta: {
                            status: 204,
                            total: confirm.length,
                            url: "api/products/update/"+movieId,
                        },
                        data: confirm,
                    };
                }
                res.json(respuesta);
            })
            .catch((error) => res.send(error));
    },
    destroy: (req, res) => {
        let movieId = req.params.id;
        Movies.destroy({ where: { id: movieId }, force: true }) // force: true es para asegurar que se ejecute la acción
            .then((confirm) => {
                let respuesta;
                if (confirm) {
                    respuesta = {
                        meta: {
                            status: 200,
                            total: confirm.length,
                            url: "api/products/destroy/"+movieId,
                        },
                        data: confirm,
                    };
                } else {
                    respuesta = {
                        meta: {
                            status: 204,
                            total: confirm.length,
                            url: "api/products/destroy/"+movieId,
                        },
                        data: confirm,
                    };
                }
                res.json(respuesta);
            })
            .catch((error) => res.send(error));
    },



    addWishes: (req, res) => {
        let id_user = req.params.id_user
        let id_movie = req.params.id_movie

        db.MovieUserWish.create({
            id_movie: id_movie,
            id_user: id_user
        })
            .then(result => {
                result = {
                    data: result,
                    status: 200
                }
                res.json(result)
            })
            .catch(err => {
                res.json({ status: 'Ocurrio un error' })
            })
    },
    deleteWishes: (req, res) => {
        let id_user = req.params.id_user
        let id_movie = req.params.id_movie

        db.MovieUserWish.destroy({
            where: {
                id_movie: id_movie,
                id_user: id_user
            }
        })
            .then(result => {
                result = {
                    data: result,
                    status: 200
                }
                res.json(result)
            })
            .catch(err => {
                res.json({ status: 'Ocurrio un error' })
            })
    },
    addCart: (req, res) => {
        let id_user = req.params.id_user
        let id_movie = req.params.id_movie

        db.MovieUserCart.create({
            id_movie: id_movie,
            id_user: id_user
        })
            .then(result => {
                result = {
                    data: result,
                    status: 200
                }
                res.json(result)
            })
            .catch(err => {
                res.json({ status: 'Ocurrio un error' })
            })

        db.MovieUserWish.destroy({
            where: {
                id_movie: id_movie,
                id_user: id_user
            }
        })
    },
    deleteCart: (req, res) => {
        let id_user = req.params.id_user
        let id_movie = req.params.id_movie

        db.MovieUserCart.destroy({
            where: {
                id_movie: id_movie,
                id_user: id_user
            }
        })
            .then(result => {
                result = {
                    data: result,
                    status: 200
                }
                res.json(result)
            })
            .catch(err => {
                res.json({ status: 'Ocurrio un error' })
            })
    },
    addRental: (req, res) => {
        let id_user = req.params.id_user
        let id_movie = req.params.id_movie
        let idList = id_movie.split(',')
        let date = new Date();
        let exp_days = 7; // Una semana
        //console.log('now:',d,'+1:',sumarDias(d, 1));
        let arrayMoviesToBuy = []
        idList.forEach(id => arrayMoviesToBuy.push({
            id_movie: id,
            id_user: id_user,
            expired_at: sumarDias(date, exp_days)
        }))
        console.log(idList);
        //console.log(req.body.cartList)

        db.MovieUserRental.bulkCreate(arrayMoviesToBuy)
            .then(result => {
                result = {
                    data: result,
                    status: 200
                }
                res.json(result)
            })
            .catch(err => {
                res.json({ status: 'Ocurrio un error' })
            })

        db.MovieUserCart.destroy({
            where: {
                id_movie: idList,
                id_user: id_user
            }
        })

    },
    deleteRental: (req, res) => {
        let id_user = req.params.id_user
        let id_movie = req.params.id_movie

        db.MovieUserRental.destroy({
            where: {
                id_movie: id_movie,
                id_user: id_user
            }

        })
            .then(result => {
                result = {
                    data: result,
                    status: 200
                }
                res.json(result)
            })
            .catch(err => {
                res.json({ status: 'Ocurrio un error' })
            })
    },
}
module.exports = moviesApiController;