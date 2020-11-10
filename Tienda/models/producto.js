import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const prodSchema = new Schema({
    nombre: {type: String, required: [true, 'Nombre obligatorios']},
    descripcion: String,
    precio: String,
    url: String
});

const Producto = mongoose.model('Producto', prodSchema);
export default Producto;