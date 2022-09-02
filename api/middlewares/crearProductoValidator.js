import joi from 'joi';

const crearProductoSchema = joi.object({
    nombre: joi.string().required(),
    descripcion: joi.string().required(),
    especificaciones:joi.string().required(),
    categoria:joi.string().required(),
    precio:joi.number().required(),
    stock:joi.number().required(),
    fotos:joi.string().required(),
});


export default async (req, res, next) => {
  try {
    await crearProductoSchema.validateAsync(req.body);
    next();     
  } catch (error) {
    return res.status(400).json({
      msg: 'Hubo un error al validar el registro del Producto',
      error,
    });
  }
};