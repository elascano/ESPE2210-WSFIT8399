
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

function validateLastName(){

    let lastname = document.getElementById('lastname').value;
    let regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]{4,15}$/;
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
        return onfocus.lastname.value='';
      }else {
        lastnameError.style.display = 'none';
        return true;
      }

}

function validateIdentification() {
    let id = document.getElementById('identification').value;
    let regex = /^[0-9]{10}$/;
    let lastIdError = document.getElementById('id-error');

    if (id.trim() === '') {
        lastIdError.innerText = "Please enter the identification.";
        lastIdError.style.display = 'block';
        lastIdError.style.color = 'red';
        return false;
      } else if (!regex.test(lastname)) {
        lastIdError.innerText = "!Warning: Invalid identification";
        lastIdError.style.display = 'block';
        lastIdError.style.color = 'red';
        return false;
      }else {
        lastIdError.style.display = 'none';
        return true;
      }

}
