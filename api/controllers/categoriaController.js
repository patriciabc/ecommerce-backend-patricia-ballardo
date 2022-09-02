import Categoria from "../models/Categoria.js";

const crearCategoria = async (req, res) => {
    try{
      const nuevaCategoria = await Categoria.create(req.body);
      return res.json({
        msg: 'Categoria creada',
        data: {
          categoria: nuevaCategoria,
        },
      });
    }catch (error){
      return res.status(500).json({
        msg: "Error al crear una Categoria",
        error,
      });
    }
  };

export { crearCategoria };