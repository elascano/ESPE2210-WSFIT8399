function validateUser(){
    var usuario = $('#username').val();
    var password = $ ('#password').val ();
    var url = "http://localhost/exam_1/functions/validateUser.php"

    $.ajax ({
        type: 'POST',
        url: url,
        data: {'user': usuario, 'password': password},
        success: function (response)
    })
}