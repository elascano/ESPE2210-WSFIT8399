let express = require('express')
let app = express()
let portarg = process.argv[2]

app.get('/juliana', function (req, res) {
    res.send('Hello word from nodeJS! without refreshing, I am <p>Juliana<p>')
});

let server = app.listen(portarg, function () {
    let host = server.address().address
    let port = server.address().port

        console.log('Web app listening at http;//%s:%s', host, port)
})