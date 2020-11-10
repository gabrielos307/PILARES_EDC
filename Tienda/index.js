const { Http2ServerRequest } = require('http2');
const express = require('express');
const router = express.Router();
const app = express();
var url = require('url');
var fs = require('fs');
//const mongoose = require('mongoose');
var hbs = require('express-handlebars');

const options = {useNewUrlParser: true, useCreateIndex: true};
const morgan = require('morgan');
app.use(morgan('tiny'));
const cors = require('cors');
app.use(cors());



//Setting
app.set('appName', 'Boix Dog Store');
app.set('port', 3000);
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/public/layout/'}));
app.set('view engine', 'hbs');



//const Producto = mongoose.model('Producto', prodSchema);

//
// Para acceder al directorio actual
const path = require('path');

//import Producto from '../models/producto'
/*
router.get('/', function(req, res, next){
    res.render('./public/index.hbs',{titulo: 'Holi'} );
  });
/*
  router.post('/nuevo-producto', async(req, res) => {
    const body = req.body;
    try{
        const productoDB = await productoDB.create(body);
        res.status(200).json(productoDB);
    }catch(error){
        return res.status(400).json({mensaje: 'Ocurrio un error', error})
    }
});
router.get('/producto/:id', async(req, res) => {
    const _id = req.params;
    try {
        const productoDB = await Producto.findOne({_id});
        res.json(productoDB);
    } catch (error) {
        return res.status(400).json({mensaje: 'Ocurrio un error', error})
    }
});
router.get('/producto', async(req, res) => {
    try {
        //const data = [{nombre: 'Tazon'}, {descripcion: 'chido', precio: '500'}];
        const productoDB = await Producto.find();
        res.render('producto.ejs', res.json(productoDB));
    } catch (error) {
        return res.status(400).json({mensaje: 'Ocurrio un error', error})
    }
});
router.delete('/producto/:id', async(req, res) =>{
    const _id = req.params.id;
    try {
       const productoDB = await Producto.findByIdAndDelete({_id});
       if(!productoDB){
        return res.status(400).json({mensaje: 'Ocurrio un error', error})
       }
       res.json(productoDB); 
    } catch (error) {
        return res.status(400).json({mensaje: 'Ocurrio un error', error})
    }
});
router.put('/producto/:id', async(req, res) =>{
    const _id = req.params.id;
    const body = req.body;
    try{
        const productoDB = await Producto.findByIdAndUpdate(_id, body, {new: true});
        res.json(productoDB);
    }catch (error) {
        return res.status(400).json({mensaje: 'Ocurrio un error', error})
    }
});
*/

app.use(express.static(path.join(__dirname, 'public')));


app.listen(app.get('port'), () => {
    console.log(app.get('appName'));
    console.log('Servidor en funcion', app.get('port'));
});