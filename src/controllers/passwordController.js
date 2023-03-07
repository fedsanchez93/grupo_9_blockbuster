
var bcrypt = require('bcryptjs');
var randtoken = require('rand-token');
const sendEmail = require('../functions/sendEmail')
const db = require('../database/models');



const passwordController = {

    forgotPassword: function (req, res, next) {
        res.render('reset-password', {
            title: 'Recuperar Contraseña'
        })
    },
    sendEmail:function (req, res, next) {
        var email = req.body.email;
        //console.log(sendEmail(email, fullUrl));
        db.User.findOne(
          {where:{
            email:email
          }}
        )
        .then(result=>{
    // res.json(result)
    
        var type = ''
        var msg = ''
        //console.log(result);
        if (result != null) {
            var token = randtoken.generate(20);
            var sent = sendEmail(email, token);
            //console.log(sent)
            if (sent != '0') {
                
                db.User.update(
                  {
                  password: token
                  },
                  {
                    where: {email:email}
                  });
                type = 'success';
                msg = `Fue enviado el link de recuperacion de contraseña al email: ${email}    Exitos!`;
            } else {
                type = 'error';
                msg = 'Ocurrio un error, prueba mas tarde';
            }
        } else {
            //console.log('2');
            type = 'error';
            msg = 'No tenemos registrado el email: ' +email;
        }
        req.flash(type, msg);
        res.redirect('/users/forgotPassword');
    //});
        })
    },
    resetPassword:function (req, res, next) {
        res.render('reset-password', {
            title: 'Ingrese su nueva contraseña por favor',
            token: req.query.token
        });
    },
    updatePassword: function (req, res, next) {
        var token = req.body.token;
        var password = req.body.password;
    
        db.User.findOne(
          {where:{
            password:token
          }}
        )
        .then(result=>{
    
              var type
              var msg
              if (result != null) {
                  //var saltRounds = 10;
                  // var hash = bcrypt.hash(password, saltRounds);
                //   bcrypt.genSalt(saltRounds, function (err, salt) {
                //       bcrypt.hash(password, salt, function (err, hash) {
                          
    
                          db.User.update(
                            {
                            password: bcrypt.hashSync(password, 10),
                            },
                            {
                              where: {email:result.email}
                            });
    
                //       });
                //   });
                  type = 'success';
                  msg = 'Tu contraseña fue actualizada con exito!!';
              } else {
                  console.log('2');
                  type = 'error';
                  msg = 'Link incorrecto, prueba nuevamente.';
              }
              req.flash(type, msg);
              res.redirect('/');
        })
    }
}

module.exports = passwordController;