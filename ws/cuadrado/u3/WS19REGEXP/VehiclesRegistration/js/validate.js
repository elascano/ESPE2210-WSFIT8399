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
      brandError.innerText = "Please complete this input";
      brandError.style.display = 'block';
      brandError.style.color = 'red';
      return false;
    } else if (!brandRegex.test(inp)) {
      brandError.innerText = "this brand does not exist or does not comply with the format";
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
      plateError.innerText = "Please complete this input";
      plateError.style.display = 'block';
      plateError.style.color = 'red';
      return false;
    } else if (!plateRegex.test(inp)) {
      plateError.innerText = "the plate is entered incorrectly format: PPP1234.";
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
      modelError.innerText = "Please complete this input.";
      modelError.style.display = 'block';
      modelError.style.color = 'red';
      return false;
    } else if (!modelRegex.test(inp)) {
      modelError.innerText = "invalid format for model.";
      modelError.style.display = 'block';
      modelError.style.color = 'red';
      return false;
    } else {
      modelError.style.display = 'none';
      modelError.style.color = 'red';
      return true;
    }
  }
  

  
  
    
