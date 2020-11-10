import express from 'express';
const router = express.Router();

import Producto from '../models/producto'

//Agregar producto

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
        
        //const productoDB = await Producto.find();
        //const data = [{nombre: 'Tazon'}, {descripcion: 'chido', precio: '500'}];
        res.render('producto.ejs', {prod: data}); 
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
module.exports = router;

