function validarFormulario() {
    // Obtener los valores de los campos de formulario
    var brand = document.getElementById("brand").value;
    var product = document.getElementById("product").value;
    var amount = document.getElementById("amount").value;
    var email = document.getElementById("email").value;
    var date = document.getElementById("date").value;
  
    // Validar los valores
    var brandValido = validarMarca(brand);
    var productValido = validarProducto(product);
    var amountValido = validarCantidad(amount);
    var emailValido = validarEmail(email);
    var dateValido = validarFecha(date);
  
    // Mostrar mensajes de error si es necesario
    if (!brandValido) {
      document.getElementById("brandError").innerHTML = "Por favor,escoga una marca.";
    } else {
      document.getElementById("brandError").innerHTML = "";
    }
  
    if (!productValido) {
      document.getElementById("productError").innerHTML = "Por favor, escoga una opción.";
    } else {
      document.getElementById("productError").innerHTML = "";
    }

    if (!amountValido) {
      document.getElementById("amountError").innerHTML = "Por favor, ingrese una cantidad válida.";
    } else {
      document.getElementById("amountError").innerHTML = "";
    }

    if (!emailValido) {
      document.getElementById("emailError").innerHTML = "Por favor, ingrese un correo valido.";
    } else {
      document.getElementById("emailError").innerHTML = "";
    }
  
    if (!dateValido) {
      document.getElementById("dateError").innerHTML = "Por favor, ingrese una fecha válida.";
    } else {
      document.getElementById("dateError").innerHTML = "";
    }

    
   
  
    
  
    // Devolver si el formulario es válido
    return brandValido && productValido && amountValido &&  emailValido && dateValido;
  }
  
  function validarMarca(brand) {
    var regex = /^[A-Za-z]+$/;
    return regex.test(brand);
  }
  
  function validarProducto(product) {
    var regex = /^[A-Za-z]+$/;
    return regex.test(product);
  }

  function validarCantidad(amount) {
    return amount.length === 100;
  }

  function validarEmail(email) {
    return email.length === 100;
  }
  
  function validarFecha(date) {
    var today = new Date();
    var date = new Date(date);
    return date > today;
  }
  
  
  