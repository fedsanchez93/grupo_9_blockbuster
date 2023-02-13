window.addEventListener('load', function() {
    let name = document.querySelector('#name');
    let usuario = document.querySelector('#usuario');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let image = document.querySelector('#file-input');
    let form = document.querySelector('form.form-registro');

    let errorName = document.querySelector()



    form.addEventListener('',function(e){
        e.preventDefault();

        if (name.value.length < 2){
            error_name.innerHTML = "El nombre debe contener al menos 2 caracteres";
        } else {
            error_name.innerHTML = "Nombre aceptable";
        };
    })


})