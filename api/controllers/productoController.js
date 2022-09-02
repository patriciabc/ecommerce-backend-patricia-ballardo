import Producto from "../models/Producto.js";

const crearProducto = async (req, res) => {
    try{
      const nuevoProducto = await Producto.create(req.body);
      return res.json({
        msg: 'Producto creado',
        data: {
          producto: nuevoProducto,
        },
      });
    }catch (error){
      return res.status(500).json({
        msg: "Error al crear un Producto",
        error,
      });
    }
  };

export { crearProducto };