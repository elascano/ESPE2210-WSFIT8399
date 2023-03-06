function validareUser() {
    var usuario = $('#username').val();
    var password = $('#password').vall();
    var url = "http://localhost/exam_1/functions/valaidate.php"

    $.ajax({
        type: 'POST',
        url: url,
        data: {'user': usuario, 'password': password},
        success: function(response)
        {
            console.log(response)
            if
        }
    })
}