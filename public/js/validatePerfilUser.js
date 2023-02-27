window.addEventListener('load', function() {

    let imageUser = document.querySelector('#file-input')
    imageUser.addEventListener('change',(e)=>{ //para visualizar la imagen antes de subirla
        if(!imageUser.files.length) return // Verificamos si existe una imagen seleccionada
        $imgPreview = document.querySelector('#imgPreview'); //Recuperamos la etiqueta img donde cargaremos la imagen
        file = imageUser.files[0]; //Recuperamos el archivo subido
        objectURL = URL.createObjectURL(file);//Creamos la url
        $imgPreview.src = objectURL; 	//Modificamos el atributo src de la etiqueta img
    })

})