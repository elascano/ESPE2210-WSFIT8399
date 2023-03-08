let express = require('express')
let app = express()
let portarg=process.argv[2]


app.get('/liliana', function(req, res){
    res.send('Hello world from nodeJs, I am <b>Liliana  ')
})

let server = app.listen(portarg, function(){
    let host = server.address().address
    let port = server.address().port

    
console.log('Web app listening at http://%s:%s',host,port)
})

