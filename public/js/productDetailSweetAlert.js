
window.addEventListener('load',()=>{

let agregarDeseos = document.querySelector('#agregarDeseos')
let quitarDeseo = document.querySelector('#quitarDeseo')
let agregarAlCarrito = document.querySelector('#agregarAlCarrito')
let quitarDelCarrito = document.querySelector('#quitarDelCarrito')

agregarDeseos.addEventListener('click',(e)=>{
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var id_movie = urlParams.get('id');
    let id_user = agregarDeseos.value 
	let settings = {
		method:'POST',
		headers:{
			'Content-Type':'application/json',
		},
	}
fetch(`http://localhost:5000/api/wishes/add/${id_user}/${id_movie}/`, settings)
.then(function(response){
	return response.json();
})
.then(function(data){
	console.log(data)
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Pelicula Agregada a Mis Deseos!',
        showConfirmButton: false,
        timer: 2000
      })
})
.catch(function(error){
	console.error(error)
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Ocurrio un error',
        showConfirmButton: false,
        timer: 2000
      })
})
})


quitarDeseo.addEventListener('click',(e)=>{
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var id_movie = urlParams.get('id');
    let id_user = quitarDeseo.value 
	let settings = {
		method:'POST',
		headers:{
			'Content-Type':'application/json',
		},
	}
fetch(`http://localhost:5000/api/wishes/delete/${id_user}/${id_movie}/`, settings)
.then(function(response){
	return response.json();
})
.then(function(data){
	console.log(data)
    Swal.fire({
        position: 'top-end',
        icon: 'info',
        title: 'Pelicula Quitada de Mis Deseos!',
        showConfirmButton: false,
        timer: 2000
      })
})
.catch(function(error){
	console.error(error)
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Ocurrio un error',
        showConfirmButton: false,
        timer: 2000
      })
})
})
agregarAlCarrito.addEventListener('click',(e)=>{
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var id_movie = urlParams.get('id');
    let id_user = agregarAlCarrito.value 
	let settings = {
		method:'POST',
		headers:{
			'Content-Type':'application/json',
		},
	}
fetch(`http://localhost:5000/api/cart/add/${id_user}/${id_movie}/`, settings)
.then(function(response){
	return response.json();
})
.then(function(data){
	console.log(data)
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Pelicula agregada al Carrito!',
        showConfirmButton: false,
        timer: 2000
      })
})
.catch(function(error){
	console.error(error)
    Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Ocurrio un error',
        showConfirmButton: false,
        timer: 2000
      })
})
})
quitarDelCarrito.addEventListener('click',(e)=>{
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var id_movie = urlParams.get('id');
    let id_user = quitarDelCarrito.value 
	let settings = {
		method:'POST',
		headers:{
			'Content-Type':'application/json',
		},
	}
fetch(`http://localhost:5000/api/cart/delete/${id_user}/${id_movie}/`, settings)
.then(function(response){
	return response.json();
})
.then(function(data){
	console.log(data)
    Swal.fire({
        position: 'top-end',
        icon: 'info',
        title: 'Pelicula Quitada del Carrito!',
        showConfirmButton: false,
        timer: 2000
      })
})
.catch(function(error){
	console.error(error)
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Ocurrio un error',
        showConfirmButton: false,
        timer: 2000
      })
})
})

})//fin funcion load