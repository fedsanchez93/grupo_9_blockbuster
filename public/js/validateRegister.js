window.addEventListener('load', function() {
    let name = document.querySelector('#name');
    let user = document.querySelector('#usuario');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let image = document.querySelector('#file-input');
    let form = document.querySelector('form.form-registro');

    let errorName = document.querySelector('.error_name');
    let errorUser = document.querySelector('.error_user');
    let errorPassword = document.querySelector('.error_password ul');
    <div class="error_user"></div>



    form.addEventListener('submit',function(e){
        e.preventDefault();

        //Validación del nombre
        if(name.value.length < 2){
            errorName.innerHTML = "El nombre debe contener al menos 2 caracteres";
        } else {
            errorName.innerHTML = "Nombres aceptables";
        };

        //Validación del usuario
        if(user.value.length < 2){
            errorUser.innerHTML = "El usuario debe contener al menos 2 caracteres";
        } else {
            errorUser.innerHTML = "Nombre de usuario aceptable";
        };

        //Validación del email
        let mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
        if(email.value.match(mailformat)){
            errorEmail.innerHTML = "El email no es válido";
        } else {
            errorEmail.innerHTML = "Email aceptable";
        };

        //Validación del password
        let erroresDePassword = [];
        let lowerCaseLetters = /[a-z]/g;
        let upperCaseLetters = /[A-Z]/g;
        let numbers = /[0-9]/g;
        
        if(password.value.length < 5){
            erroresDePassword.push = "La contraseña debe contener al menos 5 caracteres";
        } 

        if(password.value.match(lowerCaseLetters)){
            erroresDePassword.push = "La contraseña debe contener al menos una minúscula";
        };

       if(password.value.match(upperCaseLetters)){
            erroresDePassword.push = "La contraseña debe contener al menos una mayúscula";
        };

        if(password.value.match(numbers)){
            erroresDePassword.push = "La contraseña debe contener al menos un número";
        };

         /*if(password.value.match(".*[*.!@#$%^&(){}[]:";'<>,.?/~`_+-=|\\].*")){
            errorDePassword.push = "La contraseña debe contener al menos una minúscula";
            };*/

        if(erroresDePassword.length > 0){
            for (let i=0; i < erroresDePassword.length; i++){
                errorPassword.innerHTML += "<li>" + erroresDePassword[i] + "</li>";
            };
        } else {
            errorPassword.innerHTML = "La contraseña ingresada es válida" //Revisar si debe ir como <li>
        };
   
        
        //Validación de confirmación de password
        if(password.value != rePassword.value) {
            errorUser.innerHTML = "Las contraseñas no coinciden";
        } else {
            errorUser.innerHTML = "Password confirmada";
        };



        //Validación de imagen

    

    });


});