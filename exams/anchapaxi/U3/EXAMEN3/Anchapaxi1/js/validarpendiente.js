let cadena = document.getElementById('idProducts').value;

function validarID(cadena) {
    var regex = /^[A-Za-z]\d{4}$/;

    if (cadena.trim() === '') {
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

    return regex.test(cadena);
  }