var nodemailer = require('nodemailer');


//send email
function sendEmail(email, token) {
 
    var email = email;
    var token = token;
 
    var mail = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
            user: 'elefantealegre1@outlook.com', // Your email id
            pass: 'Elefante1' // Your password
        }
    });
 
    var mailOptions = {
        //from: 'elefantealegre1@outlook.com',
        from:'"Blockbuster 👻👻👻👻" <elefantealegre1@outlook.com>',
        to: email,
        subject: 'Reestablecer contraseña',
        html: `
        <h1>Usted Solicitó restablecer la contraseña, utilice amablemente este enlace para restablecer su contraseña: </h1>
        
        <a href="http://localhost:5000/users/resetPassword?token=${token}"><input type="submit" class="btn btn-primary" value="Recuperar contraseña"></a> `
 
    };
 
    mail.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error)
        } else {
            console.log(info)
            return 'Llego el mail fijate!!'
        }
    });
}

module.exports = sendEmail;