const path = require('path')
const fs = require('fs');

const controller = {
    perfil:(req,res)=>{
        res.render('users/perfilUser')
    },
    editarPerfil:(req,res)=>{
        res.render('users/editarPerfilUser')
    },
}

module.exports = controller