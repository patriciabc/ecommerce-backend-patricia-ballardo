import joi from 'joi';

const crearCategoriaSchema = joi.object({
    nombre: joi.string().required()
});


export default async (req, res, next) => {
  try {
    await crearCategoriaSchema.validateAsync(req.body);
    next();     
  } catch (error) {
    return res.status(400).json({
      msg: 'Hubo un error al validar el registro de la categoria',
      error,
    });
  }
};