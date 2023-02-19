const path = require("path");
const db = require("../../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require("moment");


const usersApiController = {
    list: (req, res) => {
        db.User.findAll()
        .then((users) => {
            let usersOk = users.map((user,i)=>{
                user.password.delete
            })
            //console.log(usersOk)
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
            let respuesta = {
                meta: {
                    status: 200,
                    //total: user.length,
                    url: "/api/users/"+req.params.id,
                },
                data: user,
            };
            res.json(respuesta);
        });
    },
}
module.exports = usersApiController