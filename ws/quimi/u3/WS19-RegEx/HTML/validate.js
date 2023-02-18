
let expressions={ 
    plate: /^[^FfDd][a-zA-Z]{2}[0-9]{4}$/,
    onlyLetters: /^[a-zA-Z\s-_\d]{1,30}$/,
    model: /^[a-zA-Z\s.-\d]{1,10}$/
}
function validatePlate(){
    let inp=document.getElementById('plate').value;
    if(!(expressions.plate).test(inp)){
        window.alert("Invalid Plate!!");
        return false;
    }else{
        return true;
    }
    
}