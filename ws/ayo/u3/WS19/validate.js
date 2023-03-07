//JavaScript Document 
let expressions = {
    plate: /^[^FfDd][a-zA-Z]{2}[0-9]{4}$/,
    onlyLetters: /^[a-zA-Z\s-_\d]{1,30}$/,
    model: /^[a-zA-Z\s.-\d]{1,10}$/
}

function validateBrand(){
    let expRegName =/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let fullNameJS = document.getElementById("brand");
    if (!expRegName.exec(fullNameJS.value)){
        alert("BRAND must Only use letters.");
        //fullNameJS.focus();
        return false;
    }else {
        return true;
    }
}

function validatePlate(){
    let inp = document.getElementById('plate').value;
    if (!(expressions.plate).test(inp)){
        window.alert("Invalid Plate !!");
        //return false;
    }//else {
        //return true;
    //}
}

function validateModel(){
    let inp = document.getElementById('model').value;
    if (!(expressions.model).test(inp)){
        return false;
    }
    return true;
}