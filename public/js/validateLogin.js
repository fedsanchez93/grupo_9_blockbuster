window.addEventListener('load', function() {
    let email = document.querySelector('#email')
    let password = document.querySelector('#password')
    let errorEmail = document.querySelector('.errorEmail')
    let errorPassword = document.querySelector('.errorPassword')

    email.addEventListener('keyup',(e)=>{
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(email.value.match(mailformat)){
            errorEmail.innerHTML = '✓'
            errorEmail.style.color = 'green'
        }else{
            errorEmail.innerHTML = 'Completa con un email valido'
            errorEmail.style.color = 'rgb(255, 149, 0)'
        }
    })

    password.addEventListener('keyup',(e)=>{
        if(password.value.length > 4){
            errorPassword.innerHTML = ''
            errorPassword.style.color = 'green'
        }else{
            errorPassword.innerHTML = 'Completa la password'
            errorPassword.style.color = 'rgb(255, 149, 0)'
        }
    })
})//fin function load