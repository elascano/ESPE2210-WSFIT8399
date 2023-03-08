
function validarServicioREST(url) {

    var xhttp = new XMLHttpRequest();
  
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
  
        var respuesta = JSON.parse(this.responseText);
        if (respuesta.hasOwnProperty("datos") && Array.isArray(respuesta.datos)) {
  
          console.log("REST service is valid.");
        } else {
          console.error("The response from the REST service is invalid.");
        }
      } else if (this.readyState == 4) {
  
        console.error("REST service is not available.");
      }
    };
  
    xhttp.open("GET", url, true);
    xhttp.send();
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
  
  
  
  

  
    function validateage() {
      let age = document.getElementById('age').value;
      let regex = /^[0-9]{10}$/;
      let ageError = document.getElementById('age-error');
      
      if (age.trim() === '') {
        ageError.innerText = "Enter your age.";
        ageError.style.display = 'block';
        ageError.style.color = 'red';
        return false;
      } else if (!regex.test(phone)) {
        ageError.innerText = "!Warning: wrong age";
        ageError.style.display = 'block';
        ageError.style.color = 'red';
        return false;
      } else {
        ageeError.style.display = 'none';
        return true;
      }
    }
    
    function validarMoney() {
        var money = document.getElementById('money').value;
        let moneyError = document.getElementById('moneyerror');
        
        if (money.trim() === '') {
            dateError.innerText = "!Warning:La fecha ingresada no puede ser mayor que la fecha actual.";
            dateError.style.display = 'block';
            dateError.style.color = 'red'; 
          event.preventDefault();
        }
      }
    