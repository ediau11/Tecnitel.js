let formu = $("#formulario").append(`<div class="container">
<div class="row ">
    <div class="col-md-12 ">
        <div class="well well-sm">
            <form>
                <fieldset>
                    <legend class="text-center header fondoContacto ">  
                <h2>¿Quieres saber más de nosotros? ¡Contáctanos!</h2>
                    </legend>
                
                    <div class="form-group">
                        <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                        <div class="col-md-8">
                            <input id="nombreFormulario" name="name" type="text" placeholder="Nombre" aria-label="nombre" class="form-control">
                        </div>
                    </div>
                    <div class="form-group">
                        <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                        <div class="col-md-8">
                            <input id="apellidoFormulario" name="name" type="text" placeholder="Apellido" class="form-control">
                        </div>
                    </div>

                    <div class="form-group">
                        <span class="col-md-1 col-md-offset-2 text-center"><i class="fas fa-envelope"></i></i></span>
                        <div class="col-md-8">
                            <input id="email" name="email" type="text" placeholder="Correo Electronico" class="form-control">
                        </div>
                    </div>

                    <div class="form-group">
                        <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-phone-square bigicon"></i></span>
                        <div class="col-md-8">
                            <input id="phone" name="phone" type="text" placeholder="Numero de Telefono" class="form-control">
                        </div>
                    </div>

                    <div class="form-group">
                        <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-pencil-square-o bigicon"></i></span>
                        <div class="col-md-8">
                            <textarea class="form-control" id="message" name="message" placeholder="Envianos tu mensaje, nos contactaremos contigo lo mas pronto posible!" rows="7"></textarea>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-md-12 text-center">
                            <button type="reset" class="btn btn-primary btn-lg" onClick="finalizarFormulario()">Enviar</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    </div>
</div>
</div>`);

const finalizarFormulario = () => {
  const formularioNombre = document.getElementById("nombreFormulario").value;
  const formularioApellido =
    document.getElementById("apellidoFormulario").value;
  const Mensajeformulario = $("#formulario").append(
    `<h3 class="modalFormulario">Muchas gracias por comunicarte con nosotros ${formularioNombre} ${formularioApellido} pronto nos pondremos en contacto contigo! </h3>`
  );
  Mensajeformulario();
};
