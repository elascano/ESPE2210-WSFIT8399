function validarFormulario() {
    // Obtener los valores de los campos de formulario
    var name = document.getElementById("name").value;
    var card = document.getElementById("Card").value;
    var expiration = document.getElementById("Expiration").value;
    var zip = document.getElementById("zip").value;
  
    // Validar los valores
    var nameValido = validarNombre(name);
    var cardValido = validarTarjeta(card);
    var expirationValido = validarFecha(expiration);
    var zipValido = validarCodigoPostal(zip);
  
    // Mostrar mensajes de error si es necesario
    if (!nameValido) {
      document.getElementById("nameError").innerHTML = "Por favor, ingrese un nombre válido.";
    } else {
      document.getElementById("nameError").innerHTML = "";
    }
  
    if (!cardValido) {
      document.getElementById("cardError").innerHTML = "Por favor, ingrese un número de tarjeta válido.";
    } else {
      document.getElementById("cardError").innerHTML = "";
    }
  
    if (!expirationValido) {
      document.getElementById("expirationError").innerHTML = "Por favor, ingrese una fecha de vencimiento válida.";
    } else {
      document.getElementById("expirationError").innerHTML = "";
    }
  
    if (!zipValido) {
      document.getElementById("zipError").innerHTML = "Por favor, ingrese un código postal válido.";
    } else {
      document.getElementById("zipError").innerHTML = "";
    }
  
    // Devolver si el formulario es válido
    return nameValido && cardValido && expirationValido && zipValido;
  }
  
  function validarNombre(name) {
    var regex = /^[A-Za-z]+$/;
    return regex.test(name);
  }
  
  function validarTarjeta(card) {
    return card.length === 16;
  }
  
  function validarFecha(expiration) {
    var today = new Date();
    var expirationDate = new Date(expiration);
    return expirationDate > today;
  }
  
  function validarCodigoPostal(zip) {
    var regex = /^[0-9]{6}$/;
    return regex.test(zip);
  }
  