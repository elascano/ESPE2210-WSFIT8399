let express = require('express')  //Importamos e framework
let app= express()       //Cosntructor para iniciar la app
let portarg=process.argv[2] //obtenemos el tercer elemento de un arreglo

app.get('/diego',function(req,res){       //Unica direccion 
    res.send('Hello world Im KEVIN DAVID')
})

let server = app.listen(portarg, function(){ //en lugar de poner portarg puedo cambiar el puerto ejemplo 3000 Levantamos el servidor 
    let host = server.address().address      //Parametro port
    let port=server.address().port          //Parametro host

    console.log('Web app listening at http://%s:%s', host, port)
})