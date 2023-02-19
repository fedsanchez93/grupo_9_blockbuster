const path = require("path");
const db = require("../../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require("moment");


const usersApiController = {
    list: (req, res) => {
        db.User.findAll()
        .then((users) => {
            users = users.map((user,i)=>{
                return{
                    "id": user.id,
                    "name": user.name,
                    "email": user.email,
                    "detail":'/api/users/' + user.id
                }
            })
            let respuesta = {
                meta: {
                    status: 200,
                    totalUsers: users.length,
                    url: "api/users",
                },
                data: users,
            };
            res.json(respuesta);
        });
    },

    detail: (req, res) => {
        db.User.findByPk(req.params.id)
        .then((user) => {

            user = {
                "id": user.id,
                "name": user.name,
                "username": user.username,
                "email": user.email,
                "image_url": '/images/users/'+user.image_url,
                "is_admin": user.is_admin,
                "is_active": user.is_active,
            }

            let respuesta = {
                meta: {
                    status: 200,
                    url: "/api/users/"+req.params.id,
                },
                data: user,
            };
            res.json(respuesta);
        });
    },
}
module.exports = usersApiController