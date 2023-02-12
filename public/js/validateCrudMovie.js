let titulo = document.querySelector('.titulo')
let errorTitulo = document.querySelector('.errorTitulo')
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

if(titulo.value.length == 0){
    errorTitulo.innerHTML = 'el error es...'
    console.log(titulo.value.length )
}else{
    errorTitulo.innerHTML = '✓'
    errorTitulo.style.color = 'green'
}