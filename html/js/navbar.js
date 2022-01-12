let navBar = [
  {
    logo: "./styles/imagenesJs/telefono-inteligente.png",
    logoCarrito: "fas fa-shopping-cart",
  },
];

navBar.forEach((navBar1) => {
  $("#navbar").append(` <div class="navbar bg-dark navbar-dark container-fluid">
          <a  class="navbar-brand" href="index.html"><img src= ${navBar1.logo}>Tecnitel</a>
      <i class="fas fa-shopping-cart ${navBar1.logoCarrito}"></i>
  </div>`);
});
