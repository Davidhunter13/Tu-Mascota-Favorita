


// MOSTRAR POR AREA 

function mostrarPorArea(area) {
    // Mostrar el indicador de carga
    var loader = document.getElementById("loader");
    loader.style.display = "block";
  
    // Ocultar todos los contenedores
    var contenedores = document.getElementsByClassName("targetas");
    for (var i = 0; i < contenedores.length; i++) {
      contenedores[i].classList.remove("visible");
    }
  
    // Cambiar el estilo del botón seleccionado
    var botones = document.getElementsByTagName("button");
    for (var i = 0; i < botones.length; i++) {
      botones[i].classList.remove("selected");
    }
    var botonSeleccionado = document.querySelector("button[data-area='" + area + "']");
    botonSeleccionado.classList.add("selected");
  
    setTimeout(function() {
      loader.style.display = "none";
      // Mostrar los contenedores asociados al área después de ocultar el loader
      for (var i = 0; i < contenedores.length; i++) {
        if (contenedores[i].classList.contains(area)) {
          contenedores[i].classList.add("visible");
        } else {
          contenedores[i].classList.remove("visible");
        }
      }
    }, 1000); // Tiempo en milisegundos de la animación de carga
  }
  
