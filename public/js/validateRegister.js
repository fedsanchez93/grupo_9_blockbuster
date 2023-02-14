window.addEventListener('load', function() {
    let name = document.querySelector('#name');
    let user = document.querySelector('#usuario');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let image = document.querySelector('#file-input');
    let form = document.querySelector('form.form-registro');

    let errorName = document.querySelector('.error_name');
    let errorUser = document.querySelector('.error_user');
    let errorEmail = document.querySelector('.error_email');



    form.addEventListener('',function(e){
        e.preventDefault();

        //Validación del nombre
        if (name.value.length < 2){
            errorName.innerHTML = "El nombre debe contener al menos 2 caracteres";
        } else {
            errorName.innerHTML = "Nombres aceptables";
        };

        //Validación del usuario
        if (user.value.length < 2){
            errorUser.innerHTML = "El usuario debe contener al menos 2 caracteres";
        } else {
            errorUser.innerHTML = "Nombre de usuario aceptable";
        };

        //Validación del usuario
        let mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
        if (email.value.match(mailformat)){
            errorEmail.innerHTML = "El email no es válido";
        } else {
            errorEmail.innerHTML = "Email aceptable";
        };
    })


})