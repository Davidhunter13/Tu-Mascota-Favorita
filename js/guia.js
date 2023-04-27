 // MOSTRAR POR ANIMAL
 function mostrarMascota(Mascota) {
    // Cambiar el estilo del botón seleccionado
    var botones = document.getElementsByClassName("boton");
    for (var i = 0; i < botones.length; i++) {
        botones[i].classList.remove("selected");
    }

    var botonSeleccionado = document.querySelector("button[Ide-mascota='" + Mascota + "']");
    botonSeleccionado.classList.add("selected");

    // Ocultar todos los contenedores
    var caja = document.getElementsByClassName("caja");
    for (var i = 0; i < caja.length; i++) {
        caja[i].classList.remove("visible");
    }

    // Mostrar solo los contenedores correspondientes a la mascota seleccionada
    for (var i = 0; i < caja.length; i++) {
        if (caja[i].classList.contains(Mascota)) {
            caja[i].classList.add("visible");
        }
    }
}

// length es una propiedad de JavaScript que se utiliza para obtener la cantidad de elementos que existen en el arreglo
// contains se utiliza para verificar si un elemento tiene una clase CSS específica.



// BUSCADOR

document.addEventListener('keyup', teclas => {
    // Se añade un listener al evento keyup en el documento y se le pasa una función 

    if (teclas.target.matches('#Buscador')) {
        // Si el target del evento coincide con el selector '#Buscador', se ejecuta el siguiente bloque de código:

        document.querySelectorAll('.caja').forEach(caja => {
            // Se seleccionan todos los elementos que tengan la clase 'caja'

            caja.querySelector('.nombre').textContent.toLowerCase().includes(teclas.target.value.toLowerCase())
            // Se comprueba si el valor del input en minúsculas está incluido en el texto de la clase 'nombre' también en minúsculas

            ? caja.classList.remove('filtro')
            // Si se cumple la condición anterior, se elimina la clase 'filtro' de la caja

            : caja.classList.add('filtro')
            // Si no se cumple la condición anterior, se añade la clase 'filtro' a la caja
        });
    }
});


    // console.log(teclas.target.value);

    // El método matches() es utilizado para verificar si un elemento coincide con un selector CSS determinado

// Target es el elemento HTML en el cual se produjo el evento.
//  Por ejemplo, si se hace clic en un botón, el target del evento será ese botón. Si se ingresa texto en un campo de entrada de texto, el target

// addEventListener('keyup', teclas) agrega un oyente de eventos que espera una pulsación de tecla y luego ejecuta una función