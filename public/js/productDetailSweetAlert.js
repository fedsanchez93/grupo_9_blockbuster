

document.querySelector('#agregarDeseos').addEventListener('click',(e)=>{
e.preventDefault()
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
})