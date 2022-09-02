import mongoose from "mongoose";

const schema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellidos: {
    type: String,
    required: true,
  },
  direccion1:{
    type: String
  },
  calle:{
    type: String
  },
  localidad:{
    type: String
  },
  nroexterior:{
    type: String
  },
  nrointerior:String,
  entrecalles:{
    type: String
  },
  ciudad:{
    type: String
  },
  pais:{
    type: String
  },
  zipcode:{
    type: String
  },
  referencias:{
    type: String
  },
  correo: {
    type: String,
    unique: true
  },
  telefono:{
    type: String,
    required: true,    
  },
  password: {
    type: String,
    required: true,
  },
  rol: {
    type: String,
    enum: ['Administrador', 'Vendedor', 'Cliente'],
    required: true,
  }
});

export default mongoose.model("Usuario", schema);
