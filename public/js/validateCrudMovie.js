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
precio.addEventListener('keyup',(e)=>{
    if( precio.value <= 1 || precio.value > 1000000 || precio.value.length > 10 ){
        error_precio.innerHTML = 'Debes completar el precio'
        error_precio.style.color = 'rgb(255, 149, 0)'
        console.log(precio.value < 0)

    }else if( !isNaN(precio.value)){
        error_precio.innerHTML = '✓'
        error_precio.style.color = 'green'
    }else{
        error_precio.innerHTML = 'completa con un numero!!!'
        error_precio.style.color = 'rgb(255, 149, 0)'
    }
})
CalificacionBlockbuster.addEventListener('keyup',(e)=>{
    if( CalificacionBlockbuster.value == '' || CalificacionBlockbuster.value <= 0 || CalificacionBlockbuster.value > 10 ){
        error_CalificacionBlockbuster.innerHTML = 'Debes completar la CalificacionBlockbuster con un valor entre 0-10'
        error_CalificacionBlockbuster.style.color = 'rgb(255, 149, 0)'
    }else if( !isNaN(CalificacionBlockbuster.value)){
        error_CalificacionBlockbuster.innerHTML = '✓'
        error_CalificacionBlockbuster.style.color = 'green'
    }else{
        error_CalificacionBlockbuster.innerHTML = 'completa con un numero!!!'
        error_CalificacionBlockbuster.style.color = 'rgb(255, 149, 0)'
    }
})
CalificacionIMDb.addEventListener('keyup',(e)=>{
    if( CalificacionIMDb.value == '' || CalificacionIMDb.value <= 0 || CalificacionIMDb.value > 10 ){
        error_CalificacionIMDb.innerHTML = 'Debes completar la CalificacionIMDb con un valor entre 0-10'
        error_CalificacionIMDb.style.color = 'rgb(255, 149, 0)'
    }else if( !isNaN(CalificacionIMDb.value)){
        error_CalificacionIMDb.innerHTML = '✓'
        error_CalificacionIMDb.style.color = 'green'
    }else{
        error_CalificacionIMDb.innerHTML = 'completa con un numero!!!'
        error_CalificacionIMDb.style.color = 'rgb(255, 149, 0)'
    }
})
CalificacionRottenTomatoes.addEventListener('keyup',(e)=>{
    if( CalificacionRottenTomatoes.value == '' || CalificacionRottenTomatoes.value <= 0 || CalificacionRottenTomatoes.value > 10 ){
        error_CalificacionRottenTomatoes.innerHTML = 'Debes completar la CalificacionRottenTomatoes con un valor entre 0-10'
        error_CalificacionRottenTomatoes.style.color = 'rgb(255, 149, 0)'
    }else if( !isNaN(CalificacionRottenTomatoes.value)){
        error_CalificacionRottenTomatoes.innerHTML = '✓'
        error_CalificacionRottenTomatoes.style.color = 'green'
    }else{
        error_CalificacionRottenTomatoes.innerHTML = 'completa con un numero!!!'
        error_CalificacionRottenTomatoes.style.color = 'rgb(255, 149, 0)'
    }
})
trailer.addEventListener('keyup',(e)=>{
    if((trailer.value.length > 2 && trailer.value.length < 10 ) ){
        error_trailer.innerHTML = 'Debes completar el trailer'
        error_trailer.style.color = 'rgb(255, 149, 0)'
    }else if(trailer.value.length >= 300){
        error_trailer.innerHTML = 'Maximo 300 caracteres'
        error_trailer.style.color = 'rgb(255, 149, 0)'
    }else{
        error_trailer.innerHTML = '✓'
        error_trailer.style.color = 'green'
    }
})
descripcion.addEventListener('keyup',(e)=>{
    if(descripcion.value.length < 20 || descripcion.value == ''){
        error_descripcion.innerHTML = 'Debes completar la descripcion'
        error_descripcion.style.color = 'rgb(255, 149, 0)'
    }else if(descripcion.value.length >= 300){
        error_descripcion.innerHTML = 'Maximo 300 caracteres'
        error_descripcion.style.color = 'rgb(255, 149, 0)'
    }else{
        error_descripcion.innerHTML = '✓'
        error_descripcion.style.color = 'green'
    }
})
urlImage.addEventListener('keyup',(e)=>{
    if(urlImage.value.length > 2 && urlImage.value.length < 10){
        error_urlImage.innerHTML = 'Debes completar el urlImage'
        error_urlImage.style.color = 'rgb(255, 149, 0)'
    }else if(urlImage.value.length >= 200){
        error_urlImage.innerHTML = 'Maximo 200 caracteres'
        error_urlImage.style.color = 'rgb(255, 149, 0)'
    }else{
        error_urlImage.innerHTML = '✓'
        error_urlImage.style.color = 'green'
    }
})

})//fin funcion load