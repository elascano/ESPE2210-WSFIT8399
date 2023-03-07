const idInput = document.getElementById("ID");
const quantityInput = document.getElementById("quantity");
const priceInput = document.getElementById("price");
const productTypeSelect = document.getElementById("product-type");
const paymentSelect = document.getElementById("payment");
const deliverySelect = document.getElementById("delivery");
const bubbleWrapCheckbox = document.getElementById("bubble-wrap");
const cartonBoxCheckbox = document.getElementById("carton-box");
const extraProtectionCheckbox = document.getElementById("extra-protection");
const agreeRadio = document.getElementById("agree");
const addBtn = document.querySelector("input[type='submit']");
const resetBtn = document.querySelector("input[type='reset']");
const name = document.querySelector('#name').value.trim();
const lastname = document.querySelector('#lastname').value.trim();
const located = document.querySelector('#located').value.trim();
const ID = document.querySelector('#ID2').value.trim();
const email = document.querySelector('#email').value.trim();
const service = document.querySelector('#service').value.trim();
// Agregar validación en evento de envío del formulario


// Limpiar mensajes de error del formulario
function clearFormValidation() {
  const errorDivs = document.querySelectorAll('.error');
  errorDivs.forEach(div => div.remove());
}

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  // Detener el envío del formulario si hay campos inválidos
  if (!isFormValid()) {
    event.preventDefault();
  }
});

// Agregar validación en evento de reinicio del formulario
resetBtn.addEventListener("click", () => {
  clearFormValidation();
});

// Validar un campo de entrada con una expresión regular y mostrar mensaje de error si es necesario
function isValidInput(input, regex, errorMessage) {
  if (regex.test(input.value)) {
    return true;
  } else {
    alert(errorMessage);
    return false;
  }
}

// Validar campos del formulario
function isFormValid() {
  let isValid = true;

  // Validar ID producto
  if (!isValidInput(idInput, /^[0-9]+$/, "Debe ingresar un número entero para el ID del producto.")) {
    isValid = false;
  }

  // Validar Cantidad
  if (!isValidInput(quantityInput, /^[1-9]\d*$/, "Debe ingresar un número entero positivo para la cantidad.")) {
    isValid = false;
  }

  // Validar Precio
  if (!isValidInput(priceInput, /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/, "Debe ingresar un precio válido en el formato $00.00.")) {
    isValid = false;
  }
 // Validar Tipo de Producto
  if (productTypeSelect.value === "") {
    alert("Debe seleccionar una opción para el tipo de producto.");
    isValid = false;
  }

  // Validar Forma de Pago
  if (paymentSelect.value === "") {
    alert("Debe seleccionar una opción para la forma de pago.");
    isValid = false;
  }

  // Validar Retiro
  if (deliverySelect.value === "") {
    alert("Debe seleccionar una opción para el retiro.");
    isValid = false;
  }

   // Validar Aceptar Condiciones
   if (!agreeRadio.checked) {
    errors.agree = "Debe aceptar todas las condiciones.";
  }

  // Validar cada campo
  if (!name.match(/^[A-Za-zÁ-Úá-úñÑ\s]+$/)) {
    errors.name = 'Ingrese un nombre válido';
  }
  if (!lastname.match(/^[A-Za-zÁ-Úá-úñÑ\s]+$/)) {
    errors.lastname = 'Ingrese un apellido válido';
  }
  if (!located.match(/^[A-Za-zÁ-Úá-úñÑ0-9\s]+$/));
}
function showError(input, errorMessage, errorId) {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error';
  errorDiv.textContent = errorMessage;
  errorDiv.id = errorId;

  const inputContainer = input.parentElement;
  inputContainer.appendChild(errorDiv);
}
function removeError(errorId) {
  const errorDiv = document.getElementById(errorId);
  if (errorDiv) {
    errorDiv.remove();
  }
}