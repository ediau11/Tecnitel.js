// let imagenesCarrusel = [
//   "./styles/imagenesJs/imagenCarrusel3.jpg",
//   "./styles/imagenesJs/imagenCarrusel2.png",
//   "./styles/imagenesJs/imagenCarrusel1.jpg",
// ];

// let contador = 0;

// function carrousel(direccion) {
//   let direccion1 = direccion;

//   if (direccion1 == "atras") {
//     if (contador == 0) {
//       document.getElementById("imagen").src =
//         imagenesCarrusel[imagenesCarrusel.length - 1];

//       contador++;
//     } else if (contador < imagenesCarrusel.length - 1) {
//       document.getElementById("imagen").src =
//         imagenesCarrusel[imagenesCarrusel.length - 1 - contador];

//       contador++;
//     } else {
//       document.getElementById("imagen").src = imagenesCarrusel[0];

//       contador = 0;
//     }
//   }

//   if (direccion1 == "adelante") {
//     if (contador == 0) {
//       document.getElementById("imagen").src = imagenesCarrusel[0];

//       contador++;
//     } else if (contador < imagenesCarrusel.length - 1) {
//       document.getElementById("imagen").src = imagenesCarrusel[contador];

//       contador++;
//     } else {
//       document.getElementById("imagen").src =
//         imagenesCarrusel[imagenesCarrusel.length - 1];

//       contador = 0;
//     }
//   }
// }

let carru = $("#contenedorCarrusel").append(`</div>
<div class="sec">
  <div id="demo" class="carousel slide" data-ride="carousel">

    <!-- Indicators -->
    <ul class="carousel-indicators">
      <li data-target="#demo" data-slide-to="0" class="active"></li>
      <li data-target="#demo" data-slide-to="1"></li>
      <li data-target="#demo" data-slide-to="2"></li>
     
    </ul>
  
    <!-- The slideshow -->
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="styles/imagenesJs/imagenCarrusel1.jpg" alt="Imagen de Granos de Cafe">
        
      </div>
      <div class="carousel-item">
        <img src="styles/imagenesJs/imagenCarrusel2.png" alt="Imagen de cafe tostado">
      </div>
      <div class="carousel-item">
        <img src="styles/imagenesJs/imagenCarrusel3.jpg" alt="Imagen de cafeteria">
      </div>
    </div>
  
    <!-- Left and right controls -->
    <a class="carousel-control-prev" href="#demo" data-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </a>
    <a class="carousel-control-next" href="#demo" data-slide="next">
      <span class="carousel-control-next-icon"></span>
    </a>
  
  </div>
</div>`);
