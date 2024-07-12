


let boton = document.querySelector('#mensajito');

// Agregar un event listener para el clic en el botón
boton.addEventListener('click', () => {
    // Obtener el div con id "mensajeB"
    let mensajeB = document.querySelector('#mensajeB');
    
    // Cambiar el estilo para mostrar el mensaje
    mensajeB.style.display = "block";
});

let salir = document.querySelector('#cerrar')
salir.addEventListener('click', ()=>{
    let btn = document.querySelector('#mensajeB')

    btn.style.display="none";

})