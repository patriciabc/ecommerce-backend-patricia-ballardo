import mongoose from "mongoose";

const schema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  especificaciones:{
    type: String,
    required: true
  },
  categoria:{
    type:  mongoose.Schema.Types.ObjectId,
    ref: 'Categoria',
    required: true
  },
  precio:{
    type: Number,
    required: true
  },
  stock:{
    type: Number,
    required: true
  },
  fotos:{
    type: String,
    required: true
  }
});

export default mongoose.model("Producto", schema);