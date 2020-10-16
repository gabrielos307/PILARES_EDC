const { Http2ServerRequest } = require('http2');

const express = require('express')
const app = express();
/*
app.get('/', (req, res)=>{
    res.end('Hello world')
});

*/
app.use(express.static('public'))


app.listen(3000, () => {
    console.log('Servidor en funcion')
});