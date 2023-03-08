let expressions={
    plate: /^[^FfDd][a-zA-Z]{2}[0-9]{4}$/,
    onlyLetters: /^[a-zA-Z\s-_\d]{1,30}$/,
    model: /^[a-zA-Z\s.-\d]{1,10}$/
}

function validateBrand() {
    let inp = document.getElementById('brand').value;
    let brandRegex = /^[a-zA-Z\s-_\d]{1,30}$/;
    let brandError = document.getElementById('brand-error');
  
    if (inp.trim() === '') {
      brandError.innerText = "Enter the make of the vehicle.";
      brandError.style.display = 'block';
      return false;
    } else if (!brandRegex.test(inp)) {
      brandError.innerText = "An error has occurred. The brand entered is not valid. Please enter a valid brand.";
      brandError.style.display = 'block';
      return false;
    } else {
      brandError.style.display = 'none';
      return true;
    }
  }

function validatePlate() {
    let inp = document.getElementById('plate').value;
    let plateRegex = /^[A-Z]{3}\d{4}$/;
    let plateError = document.getElementById('plate-error');
  
    if (inp.trim() === '') {
      plateError.innerText = "Enter the vehicle license plate.";
      plateError.style.display = 'block';
      return false;
    } else if (!plateRegex.test(inp)) {
      plateError.innerText = "An error has occurred. The registration entered is not valid. Please enter a valid license plate.";
      plateError.style.display = 'block';
      return false;
    } else {
      plateError.style.display = 'none';
      return true;
    }
  }


  function validateModel() {
    let inp = document.getElementById('model').value;
    let modelRegex = /^[a-zA-Z\s.-\d]{1,10}$/;
    let modelError = document.getElementById('model-error');
  
    if (inp.trim() === '') {
      modelError.innerText = "Enter the vehicle model.";
      modelError.style.display = 'block';
      return false;
    } else if (!modelRegex.test(inp)) {
      modelError.innerText = "An error has occurred. The model entered is invalid. Enter a valid model.";
      modelError.style.display = 'block';
      return false;
    } else {
      modelError.style.display = 'none';
      return true;
    }
  }