window.addEventListener('load', function() {
    let name = document.querySelector('#name');
    let user = document.querySelector('#usuario');
    let email = document.querySelector('#email');
    let password = document.querySelector('#newPassword');
    let submit = document.querySelector('.boton-guardar');


    let errorName = document.querySelector('.error_name');
    let errorUser = document.querySelector('.error_user');
    let errorMail = document.querySelector('.error_email');
    let errorPassword = document.querySelector('.error_password');
    let cantidad = document.querySelector('.error_password .cantidad');
    let mayusculas = document.querySelector('.error_password .mayusculas');
    let minusculas = document.querySelector('.error_password .minusculas');
    let numeros = document.querySelector('.error_password .numeros');

    let imageUser = document.querySelector('#file-input')
    imageUser.addEventListener('change',(e)=>{ //para visualizar la imagen antes de subirla
        if(!imageUser.files.length) return // Verificamos si existe una imagen seleccionada
        $imgPreview = document.querySelector('#imgPreview'); //Recuperamos la etiqueta img donde cargaremos la imagen
        file = imageUser.files[0]; //Recuperamos el archivo subido
        objectURL = URL.createObjectURL(file);//Creamos la url
        $imgPreview.src = objectURL; 	//Modificamos el atributo src de la etiqueta img
    })

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
        let erroresDePassword = [];
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

        if(totalErrores.length > 0){
            event.preventDefault();
        }

    });

})