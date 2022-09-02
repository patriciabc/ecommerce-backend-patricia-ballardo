import Carrito from "../models/Carrito.js";

const crearCarrito = async (req, res) => {
    try{
      const nuevoCarrito = await Carrito.create(req.body);
      return res.json({
        msg: 'Carrito creada',
        data: {
          carrito: nuevoCarrito,
        },
      });
    }catch (error){
      return res.status(500).json({
        msg: "Error al crear el Carrito",
        error,
      });
    }
  };

  const agregarItemCarrito = async (req, res) => {
    try{
        const carritoCompra = await Carrito.findOne({
            cliente: req.body.cliente,
        });

        if(!carritoCompra){
            carritoCompra =  await crearCarrito(req, res)
        }else{

        }

      return res.json({
        msg: 'Carrito creado',
        data: {
          carrito: carritoCompra,
        },
      });
    }catch (error){
      return res.status(500).json({
        msg: "Error al crear el Carrito",
        error,
      });
    }
  };

export { agregarItemCarrito };