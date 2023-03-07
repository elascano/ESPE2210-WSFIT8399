let expressions = {
    code: /^[a-zA-Z]{3}\d{4}$/,
    cant: /^\d{4}$/,
    price: /^\d+(\.\d{1,2})?$/
}
function validatecodeproduct() {
    // Expresión regular para validar la cadena
    let inp = document.getElementById('code').value;
    let brandRegex = /^[a-zA-Z]{3}\d{4}$/;
    let brandError = document.getElementById('code-error');
    if (inp.trim() === '') {
        brandError.innerText = "Please enter the code.";
        brandError.style.display = 'block';
        return false;
    } else if (!brandRegex.test(inp)) {
        brandError.innerText = "The code entered is not valid.";
        brandError.style.display = 'block';
        return false;
    } else {
        brandError.style.display = 'none';
        return true;
    }
}

function validatecant() {
    // Expresión regular para validar la cadena
    let inp = document.getElementById('cant').value;
    let brandRegex = /^\d{4}$/;
    let brandError = document.getElementById('cant-error');
    // Verificar si la cadena cumple con la expresión regular
    if (inp.trim() === '') {
        brandError.innerText = "Please enter the cant.";
        brandError.style.display = 'block';
        return false;
    } else if (!brandRegex.test(inp)) {
        brandError.innerText = "The cant entered is not valid.";
        brandError.style.display = 'block';
        return false;
    } else {
        brandError.style.display = 'none';
        return true;
    }
}

function validateprice() {
    // Expresión regular para validar el precio
    let inp = document.getElementById('price').value;
    let brandRegex = /^\d+(\.\d{1,2})?$/;
    let brandError = document.getElementById('price-error');

    if (inp.trim() === '') {
        brandError.innerText = "Please enter the price.";
        brandError.style.display = 'block';
        return false;
    } else if (!brandRegex.test(inp)) {
        brandError.innerText = "The price entered is not valid.";
        brandError.style.display = 'block';
        return false;
    } else {
        brandError.style.display = 'none';
        return true;
    }

    // Verificar si el precio es un número
    /*if (isNaN(precio)) {
        return false; // no es un número
    }

    // Verificar si el precio cumple con la expresión regular
    if (!regex.test(precio)) {
        return false; // no cumple con la estructura de un precio válido
    }

    // Precio válido
    return true;*/
}

