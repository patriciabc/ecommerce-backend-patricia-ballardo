import joi from 'joi';

const agregarItemCarritoSchema = joi.object({
    cliente: joi.string().required(),
    items:[
      {
        producto    : joi.string().required(),
        cantidad    : joi.string().required()
      }
  ]
});

export default async (req, res, next) => {
  try {
    
    await agregarItemCarritoSchema.validateAsync(req.body);
    next();     
  } catch (error){
    return res.status(400).json({
      msg: 'Hubo un error al validar el registro del carrito',
      error,
    });
  }
};