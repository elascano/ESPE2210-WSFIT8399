let express = require('express')
let app = express()
let portarg = process.argv[2]

app.get('/dennis', function (req, res){
    res.send('Hello World from nodeJS! without refreshing, I am <h2>Dennis</h2>')
});

let server = app.listen(portarg, function (){
    let host = server.address().address
    let port = server.address().port

    console.log('Web app listening at http://%s:%s', host, port)
})