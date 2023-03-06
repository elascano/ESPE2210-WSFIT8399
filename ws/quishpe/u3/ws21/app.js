function validateUser(){
    var usuario = $('#username').val();
    var password = $('#password').val();
    var url = "https://localhost/exam_1/functions/validate.php"
}

$.ajax({
    type: 'POST',
    url: url,
    data: {'user':usuario, 'password':password},
    succes: function (response) {
        console.log(response)
        if
    }
})