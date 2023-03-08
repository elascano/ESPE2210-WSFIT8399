function validateUser(){
    var usuario = $('#username').valid();
    var password = $('#username').valid();
    var url = "http:/localhost/exam_1/functions7validateUser.php"
$.ajax({
    type: 'POST',
    url : url,
    data: {'user': usuario, 'password':password},
    success: function(response)
    {
        console.log(reponse)
        if(response == 1){
            alert("Bienvenido" +usuario);
            window.location = "http://localhost/exam_1/views/mainForm.html";
        }else{
            alert("El usuario" + usuario + "no existe, o la contraseña es incorrecta" )
        }
    }    

}
    )

}