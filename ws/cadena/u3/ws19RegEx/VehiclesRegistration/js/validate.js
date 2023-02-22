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
      brandError.innerText = "Please enter the brand.";
      brandError.style.display = 'block';
      brandError.style.color = 'red';
      return false;
    } else if (!brandRegex.test(inp)) {
      brandError.innerText = "!Warning: Enter a valid brand.";
      brandError.style.display = 'block';
      brandError.style.color = 'red';
      return false;
    } else {
      brandError.style.display = 'none';
      brandError.style.color = 'red';
      return true;
    }
  }
  


function validatePlate() {
    let inp = document.getElementById('plate').value;
    let plateRegex = /^[A-Z]{3}\d{4}$/;
    let plateError = document.getElementById('plate-error');
  
    if (inp.trim() === '') {
      plateError.innerText = "Enter the plate of the vehicle.";
      plateError.style.display = 'block';
      plateError.style.color = 'red';
      return false;
    } else if (!plateRegex.test(inp)) {
      plateError.innerText = "! Warning: The plate not valid. Enter a valid license, format: ABC1234.";
      plateError.style.display = 'block';
      plateError.style.color = 'red';
      return false;
    } else {
      plateError.style.display = 'none';
      plateError.style.color = 'red';
      return true;
    }
  }


  function validateModel() {
    let inp = document.getElementById('model').value;
    let modelRegex = /^[a-zA-Z\s.-\d]{1,10}$/;
    let modelError = document.getElementById('model-error');
  
    if (inp.trim() === '') {
      modelError.innerText = "Enter the car model.";
      modelError.style.display = 'block';
      modelError.style.color = 'red';
      return false;
    } else if (!modelRegex.test(inp)) {
      modelError.innerText = "!Warning:  Enter a valid model.";
      modelError.style.display = 'block';
      modelError.style.color = 'red';
      return false;
    } else {
      modelError.style.display = 'none';
      modelError.style.color = 'red';
      return true;
    }
  }
  

  
  
    
