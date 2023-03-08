
window.addEventListener('load',()=>{

let agregarDeseos = document.querySelector('#agregarDeseos')

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
        timer: 1500
      })
})
.catch(function(error){
	console.error(error)
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Ocurrio un error',
        showConfirmButton: false,
        timer: 1500
      })
})

    
})

})//fin funcion load