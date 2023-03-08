let express = require ('express')
let app = express()
let portarg = process.argv[2]

app.get('/anthony',function(req, res){
    res.send ('Hello world form nodeJS! without refreshing, Iam <b>Anthony</tr>')
})

let server = app.listen(portarg, function (){
    let host = server.address().address
    let port = server.address().port

    console.log('listening on port at http://%s%s', host, port)
})