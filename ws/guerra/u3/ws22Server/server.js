let express = require('express')
let app=express ()
let portarg = process.argv()


app.get('/', function (req, res ) {
    res.send('hellow word, Im <b>Luciana</b>')
});


let server=app.listen(portarg, function(){
    let host = server.address().address
    let port = server.address().port

    console.log('web app listening at http://%s:%s ', host, port)
})