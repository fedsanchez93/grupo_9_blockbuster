window.addEventListener('load',()=>{



let titulo = document.querySelector('.titulo')
let duracion = document.querySelector('.duracion')
let release_year = document.querySelector('.release_year')
let precio = document.querySelector('.precio')
let CalificacionBlockbuster = document.querySelector('.CalificacionBlockbuster')
let CalificacionIMDb = document.querySelector('.CalificacionIMDb')
let CalificacionRottenTomatoes = document.querySelector('.CalificacionRottenTomatoes')
let trailer = document.querySelector('.trailer')
let descripcion = document.querySelector('.descripcion')
let radioFoto = document.querySelector('.radioFoto')
let imageMovie = document.querySelector('.imageMovie')
let urlImage = document.querySelector('.urlImage')

let error_titulo = document.querySelector('.error_titulo')
let error_duracion = document.querySelector('.error_duracion')
let error_release_year = document.querySelector('.error_release_year')
let error_precio = document.querySelector('.error_precio')
let error_CalificacionBlockbuster = document.querySelector('.error_CalificacionBlockbuster')
let error_CalificacionIMDb = document.querySelector('.error_CalificacionIMDb')
let error_CalificacionRottenTomatoes = document.querySelector('.error_CalificacionRottenTomatoes')
let error_trailer = document.querySelector('.error_trailer')
let error_descripcion = document.querySelector('.error_descripcion')
let error_radioFoto = document.querySelector('.error_radioFoto')
let error_imageMovie = document.querySelector('.error_imageMovie')
let error_urlImage = document.querySelector('.error_urlImage')

titulo.addEventListener('keyup',(e)=>{
    if(titulo.value.length < 2 || titulo.value == ''){
        error_titulo.innerHTML = 'Debes completar el titulo'
        error_titulo.style.color = 'rgb(255, 149, 0)'
        console.log(titulo.value.length )
    }else if(titulo.value.length >= 100){
        error_titulo.innerHTML = 'Maximo 100 caracteres'
        error_titulo.style.color = 'rgb(255, 149, 0)'
    }else{
        error_titulo.innerHTML = '✓'
        error_titulo.style.color = 'green'
    }
})

duracion.addEventListener('keyup',(e)=>{
    if( duracion.value <= 0 || duracion.value > 999 ){
        error_duracion.innerHTML = 'Debes completar la duracion con un valor entre 0-999'
        error_duracion.style.color = 'rgb(255, 149, 0)'
        console.log(duracion.value < 0)

    }else if( !isNaN(duracion.value)){
        error_duracion.innerHTML = '✓'
        error_duracion.style.color = 'green'
    }else{
        error_duracion.innerHTML = 'completa con un numero!!!'
        error_duracion.style.color = 'rgb(255, 149, 0)'
    }
})
release_year.addEventListener('keyup',(e)=>{
    if( release_year.value <= 1700 || release_year.value > 2100 ){
        error_release_year.innerHTML = 'Debes completar el año'
        error_release_year.style.color = 'rgb(255, 149, 0)'
        console.log(release_year.value < 0)

    }else if( !isNaN(release_year.value)){
        error_release_year.innerHTML = '✓'
        error_release_year.style.color = 'green'
    }else{
        error_release_year.innerHTML = 'completa con un numero!!!'
        error_release_year.style.color = 'rgb(255, 149, 0)'
    }
})
CalificacionBlockbuster.addEventListener('keyup',(e)=>{
    if( CalificacionBlockbuster.value < 0 || CalificacionBlockbuster.value > 10 ){
        error_CalificacionBlockbuster.innerHTML = 'Debes completar la CalificacionBlockbuster con un valor entre 0-10'
        error_CalificacionBlockbuster.style.color = 'rgb(255, 149, 0)'
    }else if( !isNaN(CalificacionBlockbuster.value)){
        error_CalificacionBlockbuster.innerHTML = '✓'
        error_CalificacionBlockbuster.style.color = 'green'
        console.log(typeof parseInt(CalificacionBlockbuster.value))

    }else{
        error_error_CalificacionBlockbuster.innerHTML = 'completa con un numero!!!'
        error_error_CalificacionBlockbuster.style.color = 'rgb(255, 149, 0)'
    }
})

})//fin funcion load