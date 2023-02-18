window.addEventListener('load', function() {
    let name = document.querySelector('#name');
    let user = document.querySelector('#usuario');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let image = document.querySelector('#file-input');
    let form = document.querySelector('.form-registro');
    let submit = document.querySelector('#crear-cuenta');
    

    let errorName = document.querySelector('.error_name');
    let errorUser = document.querySelector('.error_user');
    let errorMail = document.querySelector('.error_email');
    let errorPassword = document.querySelector('.error_password ul');
    let cantidad = document.querySelector('.error_password .cantidad');
    let mayusculas = document.querySelector('.error_password .mayusculas');
    let minusculas = document.querySelector('.error_password .minusculas');
    let numeros = document.querySelector('.error_password .numeros');

  



    submit.addEventListener('click', function(event){

        let totalErrores = []
       
        //Validación del nombre
        if(name.value.length < 2){
            errorName.innerHTML = "El nombre debe contener al menos 2 caracteres";
            errorName.style.color = "red";
            totalErrores.push(1);
        } else {
            errorName.innerHTML = "Nombres aceptables";
            errorName.style.color = "green"
        };

        //Validación del usuario
        if(user.value.length < 2){
            errorUser.innerHTML = "El usuario debe contener al menos 2 caracteres";
            errorUser.style.color = "red"
            totalErrores.push(1);
        } else {
            errorUser.innerHTML = "Nombre de usuario aceptable";
            errorUser.style.color = "green"
        };

        //Validación del email
        let mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
        if(email.value.match(mailformat)){
            errorMail.innerHTML = "Email aceptable";
            errorMail.style.color = "green"
        } else {
            errorMail.innerHTML = "El email no es válido";
            errorMail.style.color = "red"
            totalErrores.push(1);
        };
       
        //Validación del password
        //let erroresDePassword = [];
        let lowerCaseLetters = /[a-z]/g;
        let upperCaseLetters = /[A-Z]/g;
        let numbers = /[0-9]/g;
        
        if(password.value.length < 5){
            cantidad.innerHTML ="La contraseña debe contener al menos 5 caracteres";
            cantidad.style.color="red"
            totalErrores.push(1);
        } else {
            cantidad.innerHTML = "La contraseña tiene al menos 5 caracteres";
            cantidad.style.color = "green"
        }; 

        if(password.value.match(lowerCaseLetters)){
            minusculas.innerHTML = "La contraseña tiene minúsculas";
            minusculas.style.color = "green"
        } else {
            minusculas.innerHTML ="La contraseña debe contener al menos una minúscula";
            minusculas.style.color="red"
            totalErrores.push(1);
        }
        
       if(password.value.match(upperCaseLetters)){
            mayusculas.innerHTML = "La contraseña tiene mayúsculas";
            mayusculas.style.color = "green"
        } else {
            mayusculas.innerHTML = "La contraseña debe contener al menos una mayúscula";
            mayusculas.style.color="red"
            totalErrores.push(1);
        }

        if(password.value.match(numbers)){
            numeros.innerHTML = "La contraseña tiene números";
            numeros.style.color = "green"        
        } else {
            numeros.innerHTML="La contraseña debe contener al menos un número";
            numeros.style.color="red";
            totalErrores.push(1);
        };

        //  if(password.value.match(".*[*.!@#$%^&(){}[]:";'<>,.?/~`_+-=|\\].*")){  --> REVISAR POR QUÉ
        //      NO FUNCIONA
        //     errorDePassword.push = "La contraseña debe contener al menos una minúscula";
        //     };

        // if(erroresDePassword.length > 0){
        //     totalErrores.push(1);    
        //     for (let i=0; i < erroresDePassword.length; i++){
        //         errorPassword.innerHTML += "<li>" + erroresDePassword[i] + "</li>";
        //         //errorPassword.innerHTML = erroresDePassword
        //         errorPassword.style.color="red"};
             
        // } else {
        //     errorPassword.innerHTML = "La contraseña ingresada es válida" //Revisar si debe ir como <li>
        // };
   
        
        //Validación de confirmación de password --> HAY QUE AGREGAR CONFIRMACIÓN DE PASSWORD A LA VISTA PARA SER CONSISTENTE CON EL EDITAR USUARIO
        /*if(password.value != rePassword.value) {
            errorUser.innerHTML = "Las contraseñas no coinciden";
        } else {
            errorUser.innerHTML = "Password confirmada";
        };*/ 



        //Validación de imagen



        if(totalErrores.length > 0){
            event.preventDefault();
        }

        console.log(totalErrores)

    });

})

