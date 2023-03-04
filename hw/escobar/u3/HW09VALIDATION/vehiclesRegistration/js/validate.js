let expressions = {
    plate: /^[^FfDd][a-zA-Z]{2}[0-9]{4}$/,
    onlyLetters: /^[a-zA-Z\s-_\d]{1,30}$/,
    model: /^[a-zA-Z\s.-\d]{1,10}$/
}

function validateBrand(){
    let inp = document.getElementById('brand').value;
    let brandRegex = /^[a-zA-Z\s-_\d]{1,30}$/;    
    let brandError = document.getElementById('brand-error');

    if (inp.trim()===''){
        brandError.innerText = "Card brand required";
        brandError.style.display = 'block';
        return false;
    }else if (!brandRegex.test(inp)){       
        brandError.innerText = "Invalid brand car!!";
        brandError.style.display = 'block';
        return false;
    }else{
        brandError.style.display='none';
        return true;
    }
}

function validatePlate(){
    let inp = document.getElementById('plate').value;
    let plateRegex = /^[A-Z]{3}\d{4}$/;
    let plateError = document.getElementById('plate-error');

    if (inp.trim()===''){
        plateError.innerText = "Card plate required";
        plateError.style.display = 'block';
        return false;
    } else if (!plateRegex.test(inp)){
        plateError.innerText = "Invalide plate!!";
        plateError.style.display = 'none';
        return false;
    }else{
        plateError.style.display = 'none';
        return true;
    }
}

function validateModel(){
    let inp = document.getElementById('model').value;
    let modelRegex = /^[a-zA-Z\s.-\d]{1,10}$/;
    let modelError = document.getElementById('model-error');

    if (inp.trim()===''){
        modelError.innerText = "Card model required";
        modelError.style.display = 'block';
        return false;
    }else if(!modelRegex.test(inp)){
        modelError.innerText = "Invalid model car";
        modelError.style.display = 'block';        
        return false;
    }else{
        modelError.style.display = 'none';
        return true;
    }
}