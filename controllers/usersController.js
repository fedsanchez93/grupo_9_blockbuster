const path = require('path')
const fs = require('fs');

const usersFilePath = path.join(__dirname, '../data/users.json');
const listaUsers = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const controller = {
    perfil:(req,res)=>{
        res.render('users/perfilUser',{listaUsers})
    },
    editarPerfil:(req,res)=>{
        res.render('users/editarPerfilUser',{listaUsers})
    },
}

module.exports = controller