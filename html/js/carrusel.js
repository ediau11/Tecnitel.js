let imagenesCarrusel = [
  "./styles/imagenesJs/imagenCarrusel3.jpg",
  "./styles/imagenesJs/imagenCarrusel2.png",
  "./styles/imagenesJs/imagenCarrusel1.jpg",
];

let contador = 0;

function carrousel(direccion) {
  let direccion1 = direccion;

  if (direccion1 == "atras") {
    if (contador == 0) {
      document.getElementById("imagen").src =
        imagenesCarrusel[imagenesCarrusel.length - 1];

      contador++;
    } else if (contador < imagenesCarrusel.length - 1) {
      document.getElementById("imagen").src =
        imagenesCarrusel[imagenesCarrusel.length - 1 - contador];

      contador++;
    } else {
      document.getElementById("imagen").src = imagenesCarrusel[0];

      contador = 0;
    }
  }

  if (direccion1 == "adelante") {
    if (contador == 0) {
      document.getElementById("imagen").src = imagenesCarrusel[0];

      contador++;
    } else if (contador < imagenesCarrusel.length - 1) {
      document.getElementById("imagen").src = imagenesCarrusel[contador];

      contador++;
    } else {
      document.getElementById("imagen").src =
        imagenesCarrusel[imagenesCarrusel.length - 1];

      contador = 0;
    }
  }
}
