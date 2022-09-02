import bcrypt from 'bcrypt'
import Usuario from '../models/Usuario.js';
import jwt from 'jwt-simple'
import configDB from '../config/index.js';


const login = async (req, res) => {
    try {
        // Buscamos un usuario con el correo en el body
        const user = await Usuario.findOne({
            correo: req.body.correo,
        });
        // Si no lo encuentra
        if (!user) {
            return res.status(404).json({
            msg: 'Usuario no encontrado',
          });
        }
        
        // Si encuentra el usuario verificamos la contraseña
        const passCorrect = await bcrypt.compare(req.body.password, user.password);

        // Si esta mal la contraseña    
        if (!passCorrect) {
            return res.status(401).json({
            msg: 'Credenciales inválidas',
            });
        }
        // Si todo va bien, crear token con tiempo
        const expirationDate = new Date();
        expirationDate.setMinutes(expirationDate.getMinutes() + 60);
        const payload = {
            userId: user.id,
            expirationDate,
            role: user.role,
        };
        // Falta en el index de config la llave
        const token = jwt.encode(payload, configDB.jwt.secret);
      return res.json({
        msg: 'Login correcto',
        data: { token },
      });
    } catch (error) {
      return res.status(500).json({
        msg: 'Error al hacer login',
        error
      });
    }
  };


export { login }