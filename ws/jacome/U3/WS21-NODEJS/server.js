
let express = require("express")

let app = express()
let portarg = process.argv[2]


app.get("/", function (req, res) {
    res.send("Hello World from nodeJS! without refreshing. I am <b>Ivonne</b>")

});

let server = app.listen(portarg, function () {
    let host = server.address().address
    let port = server.address().port

    console.log("Web app listeninh at http://%s:%s",host,port)    
})


