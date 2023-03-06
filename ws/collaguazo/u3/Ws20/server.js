let express = require('express')
let app = express()
let portarg = process.argv[2]

app.get('/elian', function(req, res){
    res.send('Hello world from nodeJs, i am <b>Elian</b> ')
})

    let server = app.listen(portarg, function(){
        let host = server.address().address
        let port = server.address().port

        console.log('Web app listening http:/$s:$s')
    })

