
function validateName (){

    let name = document.getElementById('name').value;
    let regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]{4,10}$/;
    let nameError = document.getElementById('name-error');

    if (name.trim() === '') {
        nameError.innerText = "Please enter the name.";
        nameError.style.display = 'block';
        nameError.style.color = 'red';
        return false;
      } else if (!regex.test(name)) {
        nameError.innerText = "!Warning: Invalid name";
        nameError.style.display = 'block';
        nameError.style.color = 'red';
        return false;
      }else {
        nameError.style.display = 'none';
        return true;
      }
}

function  validateLastName() {
 
    let lastname = document.getElementById('lastname').value;
    let regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]{4,10}$/;
    let lastnameError = document.getElementById('last-error');

    if (lastname.trim() === '') {
        lastnameError.innerText = "Please enter the lastname.";
        lastnameError.style.display = 'block';
        lastnameError.style.color = 'red';
        return false;
      } else if (!regex.test(lastname)) {
        lastnameError.innerText = "!Warning: Invalid lastname";
        lastnameError.style.display = 'block';
        lastnameError.style.color = 'red';
        return false;
      }else {
        nameError.style.display = 'none';
        return true;
      }
}

function validateIdentification() {
  let id = document.getElementById('identification').value;
  let regex = /^[0-9]{10}$/;
  let lastIdError = document.getElementById('id-error');
  
  if (id.trim() === '') {
    lastIdError.innerText = "Por favor ingrese la identificación.";
    lastIdError.style.display = 'block';
    lastIdError.style.color = 'red';
    return false;
  } else if (!regex.test(id) || isNaN(id)) {
    lastIdError.innerText = "!Advertencia: identificación no válida";
    lastIdError.style.display = 'block';
    lastIdError.style.color = 'red';
    return false;
  } else {
    lastIdError.style.display = 'none';
    return true;
  }
}

function validarFecha(event) {
    var campoFecha = document.getElementById('date');
    let dateError = document.getElementById('date-error');
    var fechaIngresada = new Date(campoFecha.value);
    var fechaActual = new Date();
    
    if (fechaIngresada > fechaActual) {
        dateError.innerText = "!Warning:La fecha ingresada no puede ser mayor que la fecha actual.";
        dateError.style.display = 'block';
        dateError.style.color = 'red'; 
      event.preventDefault();
    }
  }


  function validatePhone() {
    let phone = document.getElementById('phone').value;
    let regex = /^[0-9]{10}$/;
    let phoneError = document.getElementById('phone-error');
    
    if (phone.trim() === '') {
      phoneError.innerText = "Por favor ingrese el número de celular.";
      phoneError.style.display = 'block';
      phoneError.style.color = 'red';
      return false;
    } else if (!regex.test(phone)) {
      phoneError.innerText = "!Advertencia: número de celular no válido";
      phoneError.style.display = 'block';
      phoneError.style.color = 'red';
      return false;
    } else {
      phoneError.style.display = 'none';
      return true;
    }
  }