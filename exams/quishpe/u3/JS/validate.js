let expressions = {
    codeplanet: /^[a-zA-Z]{3}\d{4}$/
}
function validatecodeP() {
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
