import joi from 'joi';

const crearAdministradorSchema = joi.object({
    nombre: joi.string().required(),
    apellidos:joi.string().required(),
    telefono:joi.string().required(), 
    correo: joi.string().required(),
    password: joi.string().required(),
    rol:joi.string().optional(),
});


export default async (req, res, next) => {
  try {
    req.body.rol="Administrador"
    await crearAdministradorSchema.validateAsync(req.body);
    next();     
  } catch (error) {
    return res.status(400).json({
      msg: 'Hubo un error al validar el registro del Administrador',
      error,
    });
  }
};