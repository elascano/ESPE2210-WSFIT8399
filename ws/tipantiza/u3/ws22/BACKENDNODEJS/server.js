let express=require('express')
let app=express()
let portarg=process.argv[2]

app.get('/', function (reg, res){
res.send('Hello World from nodeJS! without refreshing, I am <h1> Nayeli');
});

let server = app.listen(portarg, function(){
    let host=server.address().address
    let port=server.address().port

    console.log('web app listening at http://%s:%s',host,port)
})