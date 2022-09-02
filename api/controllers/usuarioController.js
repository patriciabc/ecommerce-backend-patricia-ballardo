import Usuario from "../models/Usuario.js";
import bcrypt from 'bcrypt'

const crearUsuario = async (req, res) => {
    try{
      const encryptedPass = await bcrypt.hash(req.body.password, 4);
      req.body.password = encryptedPass;
      const nuevoUsuario = await Usuario.create(req.body);
      return res.json({
        msg: 'Usuario creado',
        data: {
          usuario: nuevoUsuario,
        },
      });
    }catch (error){
      return res.status(500).json({
        msg: "Error al crear un usuario",
        error,
      });
    }
  };

export { crearUsuario };