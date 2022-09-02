import mongoose from "mongoose";

const schema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  }
});

export default mongoose.model("Categoria", schema);
