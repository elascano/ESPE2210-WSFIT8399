let express = require('express')
let mongose = require('mongose')
let app = express()
let portarg = process.argv[2]

app.get('/Lizeth', function(req, res){
    res.send('Hello world from nodeJS! without refreshing, I am <b>Lizeth</b>')
});

let server = app.listen(portarg, function() {    //levanta el servidor
    let host = sever.address().address
    let port = server.address().port

    console.log('Web app listening at http://%s:%s', host, port)
});





