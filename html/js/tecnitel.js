let productos = [
  $.ajax({
    url: "./data/data.json",
    dataType: "json",
    success: (respuesta) => {
      cargarProductos(respuesta);
    },
  }),
];
console.log();

// **********************************************************************
// Agregando productos a mi Main con JQUERY

// **********************************************************************
const cargarProductos = (respuesta) => {
  productos = respuesta;
  productos.forEach((productos, indice) => {
    $("#container").append(
      `<div class= col-sm-3 p-3 h2 h3 > <a href= ${productos.imagen}> <img class= aparecer alt="imagen de Producto" src= "${productos.imagen} "</img> </a> <h2 id="aumentaLetra" class= h2>${productos.nombre} </h2> <h3 class= h3> Precio: ${productos.precio}
    <a href="#cart" class="btn btn-dark addToCart" id="boton" onClick="abrirCarrito(${indice})">Agregar al carrito</a> </div> `
    );
  });
  $(".aparecer").fadeOut(1000).fadeIn();
  $(".h2").slideUp(1000).slideDown(1000);
};

// **********************************************************************************
// funcion para que se abra mi carrito cuando haga click en el boton agregar al carrito

// **********************************************************************************

const cart = [];

function abrirCarrito(indiceProducto) {
  const indiceEncontadoCarrito = cart.findIndex((elemento) => {
    return elemento.id === productos[indiceProducto].id;
  });
  if (indiceEncontadoCarrito === -1) {
    const agregarProducto = productos[indiceProducto];
    agregarProducto.nombre = 1;
    cart.push(agregarProducto);
    actualizarStorage(cart);
    actualizarCarrito();
  } else {
    cart[indiceEncontadoCarrito].nombre += 1;
    actualizarStorage(cart);
    actualizarCarrito();
  }
}

// ****************************************************************************
// agrego el html y los estilos de mi carrito

// **************************************************************************

let modalCarrito = document.getElementById("cart");

function actualizarCarrito() {
  let total = 0;
  modalCarrito.className = "cart";
  modalCarrito.innerHTML = "";
  if (cart.length > 0) {
    cart.forEach((productos, indice) => {
      total = total + productos.precio * productos.nombre;
      const carritoContainer = document.createElement("div");
      carritoContainer.className = "producto-carrito";
      carritoContainer.classList.add();
      carritoContainer.innerHTML = `  <img class="car-img" src="${
        productos.imagen
      }"/>
      <h2> <div class="product-details"> Precio: $ ${
        productos.precio
      }</div> </h2>
    <h2> <div class="product-details"> Subtotal: $ ${
      productos.precio * productos.nombre
    }</div> </h2>
      <a href="#cart" class="btn btn-dark"  id="remove-product" onClick="removeProduct(${indice})">Eliminar producto</a>
`;

      modalCarrito.appendChild(carritoContainer);
    });
    const totalContainer = document.createElement("div");
    totalContainer.className = "total-carrito";
    totalContainer.innerHTML = `<h2><div class= "total"> Total: $ ${total}</div></h2>
    <button class= "btn btn-dark finalizar" id="finalizar" onClick="finalizarCompra()">Comprar</button>`;
    modalCarrito.appendChild(totalContainer);
  } else {
    modalCarrito.classList.remove("cart");
  }
}

// *********************************************************************************

// funcion para activar el boton de eliminar producto

// ******************************************************************************

function removeProduct(indice) {
  cart.splice(indice, 1);
  actualizarStorage(cart);
  actualizarCarrito();
}

// *************************************************************************

// hago funcion para que cuando haga click en el boton finalizar compra me termine de comprar

// **************************************************************************

function finalizarCompra() {
  const total = document.getElementsByClassName("total")[0].innerHTML;
  modalCarrito.innerHTML = "";
  const compraFinalizada = `<h2 class= "centrado"> Ingrese los datos de su tarjeta para finalizar la compra! ${total} </h2>
  <button class= "btn btn-dark pago" id="pago" onClick="dibujarFormu()"> Pagar </button>`;
  modalCarrito.innerHTML = compraFinalizada;
}

// ***************************************************************************

// Funcion para poner datos de tarjeta

// *************************************************************************

const dibujarFormu = () => {
  modalCarrito.innerHTML = "";
  const formulario = `
  <h2 class="h2"> Datos de la tarjeta: </h2>

  <div class="row1">
    <div>
      <label class= formu>Nombre en la tarjeta:</label>
      <input class="color" type="text" id="name" placeholder=""  />
    </div>
    <div>
      <label class= formu>Numero de tarjeta:</label>
       <input class="color" type="text" id="numeroTarjeta" placeholder="**** **** **** ****" />
    </div>
    <div>
      <label class= formu>Vencimiento:</label>
      <input class="color" type="text" id="vencimiento" placeholder=""  />
    </div>
    <div>
    <label class= formu>Cvv:</label>
    <input class="color" type="text" id="cvv" placeholder="" />
    </div>
    <button class= "btn btn-dark addToCart" onClick="finalizar()"> Finalizar Compra </button>
    </div>`;
  modalCarrito.innerHTML = formulario;
};

// ***************************************************************************

// Funcion para dar un mensaje final

// **************************************************************************

const finalizar = () => {
  const compraRealizada = document.getElementById("name").value;
  modalCarrito.innerHTML = "";
  const ultimoMensaje = `<h2 class= "centrado"> Muchas gracias por tu compra ${compraRealizada} recibiras tu pedido en las proximas 48h </h2>`;
  modalCarrito.innerHTML = ultimoMensaje;
};

const actualizarStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};
