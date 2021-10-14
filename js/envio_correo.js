(function() {
  emailjs.init("user_rbT0NQhDwkiip7wOhaQAh");
})();

var myModal = new bootstrap.Modal(document.getElementById('reservaModal'), {
  keyboard: false
});

function openModal() {
  myModal.show();
}

function closeModal() {
  document.getElementById('reservaForm').reset();
  myModal.hide();
}

function sendMail(message, email) {
  
  const params = {
    from_name: "Zharaliz",
    to_name: "Restaurente Sal&Salsa",
    message: message,
    to_email: email + ";mentoriatalentojuventic04@gmail.com"
  }

  emailjs.send('service_crdun8j', 'template_wbayxgd', params
  ).then(x => {
    console.log(x);
    alert("Correo enviado con exito");
    closeModal();
  }).catch(e => {
    console.error(e);
    alert("Error enviando el correo");
  });
}
 
var getData = function() {
  var nombre = document.getElementById("inputNombre").value;
  var apellido = document.getElementById("inputApellido").value;
  var email = document.getElementById("inputEmail").value;
  var telefono = document.getElementById("inputTelefono").value;
  var cantidadPersonas = document.getElementById("inputNumeroPersonas").value;
  var servicio = document.getElementById("inputServicio").value;
  var hora = document.getElementById("inputHora").value;
  var fecha = document.getElementById("inputFecha").value;
  var indicaciones = document.getElementById("inputIndicaciones").value;

  var formulario = {
    nombre, apellido, email, telefono, cantidadPersonas, servicio, hora, fecha, indicaciones
  }

  guardarLocalStorage(formulario);
 
  var message = `
  El cliente: ${nombre}  ${apellido}, \n 
  realizó una reserva para el servicio de: ${servicio}. 
  Email: ${email}
  Número de Teléfono: ${telefono}
  Cantidad de Personas: ${cantidadPersonas}
  Fecha: ${fecha}
  Hora: ${hora}
  Indicaciones ${indicaciones}
  `;

  sendMail(message, email);
}

function guardarLocalStorage(form) {
  var reservaciones = localStorage.reservaciones;

  if (!reservaciones) {
    localStorage.reservaciones = JSON.stringify([form]);
  } else {
    var reservacionesObj = JSON.parse(reservaciones);
    reservacionesObj.push(form);
    localStorage.reservaciones = JSON.stringify(r);
  }
}