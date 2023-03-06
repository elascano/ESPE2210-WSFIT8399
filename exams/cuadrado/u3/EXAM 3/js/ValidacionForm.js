let expressions = {
    plate: /^[^FfDd][a-zA-Z]{2}[0-9]{4}$/,
    onlyLetters: /^[a-zA-Z\s-_\d]{1,30}$/,
    model: /^[a-zA-Z\s.-\d]{1,10}$/,
	nombres: /^[a-zA-Z\s-_\d]{1,30}$/,
	email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
	fono: /^(?:\+593|593|0)?(?:9)(?:2|3|4|5|6|7|8|9)(?:\d{7})$/,
	ID: /^d{3}-\d{2}-\d{4}$,
	Numeros: ^[0-9]+$
}

function validateId() {
    let inp = document.getElementById('id').value;
    let exprenombre = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let nameError = document.getElementById('id-error');
  
    if (inp.trim() === '') {
      nameError.innerText = "The id cannot be empty";
      nameError.style.display = 'inline';
      return false;
		
    } else if (!exprenombre.test(inp)) {
      nameError.innerText = "Please id the name correctly.";
      nameError.style.display = 'inline';
      return false;
		
    } else {
      nameError.style.display = 'none';
      return true;
		
    }
}

function validateNombres() {
    let inp = document.getElementById('name').value;
    let exprenombre = /^[^0-9]+$/;
    let nameError = document.getElementById('name-error');
  
    if (inp.trim() === '') {
      nameError.innerText = "The name cannot be empty";
      nameError.style.display = 'inline';
      return false;
		
    } else if (!exprenombre.test(inp)) {
      nameError.innerText = "Please enter the name correctly.";
      nameError.style.display = 'inline';
      return false;
		
    } else {
      nameError.style.display = 'none';
      return true;
		
    }
}

function validateApellidos() {
    let inp = document.getElementById('lastname').value;
    let expreapellido = /^[^0-9]+$/;
    let nameError = document.getElementById('lastname-error');
  
    if (inp.trim() === '') {
      nameError.innerText = "The lastname cannot be empty";
      nameError.style.display = 'inline';
      return false;
		
    } else if (!expreapellido.test(inp)) {
      nameError.innerText = "Please enter the lastname correctly.";
      nameError.style.display = 'inline';
      return false;
		
    } else {
      nameError.style.display = 'none';
      return true;
		
    }
}


function validateEmail() {
    let inp = document.getElementById('email').value;
    let expreEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let nameError = document.getElementById('email-error');
  
    if (inp.trim() === '') {
      nameError.innerText = "The email cannot be empty";
      nameError.style.display = 'inline';
      return false;
		
    } else if (!expreEmail.test(inp)) {
      nameError.innerText = "Please enter the email correctly.";
      nameError.style.display = 'inline';
      return false;
		
    } else {
      nameError.style.display = 'none';
      return true;
		
    }
}

function validateFono() {
    let inp = document.getElementById('phone').value;
    let expreEmail = /^(?:\+593|593|0)?(?:9)(?:2|3|4|5|6|7|8|9)(?:\d{7})$/;
    let nameError = document.getElementById('phone-error');
  
    if (inp.trim() === '') {
      nameError.innerText = "The phone cannot be empty";
      nameError.style.display = 'inline';
      return false;
		
    } else if (!expreEmail.test(inp)) {
      nameError.innerText = "Please enter the phone correctly.";
      nameError.style.display = 'inline';
      return false;
		
    } else {
      nameError.style.display = 'none';
      return true;
		
    }
}
function validatePassword() {
  let inp = document.getElementById('password').value;
  
  let nameError = document.getElementById('password-error');

  if (inp.trim() === '') {
    nameError.innerText = "The password cannot be empty";
    nameError.style.display = 'inline';
    return false;
  
  }
}
