import mongoose from "mongoose";

const schema = new mongoose.Schema({
  cliente: {
    type:  mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
  fechapago:{
    type:Date,
    required:false
  },
  items:[{
    producto: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'Producto',
        required: true,
      },
    cantidad: {
        type:Number,
        required: true
    },
    precio: {
        type:Number,
        required: false
    },
    descuento: {
        type:Number,
        required: false,
        default:0,
    },
    total: {
        type:Number,
        required: false
    }
  }],
  estado:{
    type:String,
    required: true,
    default:"Activo"
  }
});

export default mongoose.model("Carrito", schema);
