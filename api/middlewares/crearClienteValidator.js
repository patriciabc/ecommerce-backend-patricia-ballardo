import joi from 'joi';

const crearClienteSchema = joi.object({
    nombre: joi.string().required(),
    apellidos:joi.string().required(),
    direccion1:joi.string().required(),
    calle:joi.string().required(),
    localidad:joi.string().required(),
    nroexterior:joi.string().required(),
    nrointerior:joi.string().optional(),
    entrecalles:joi.string().required(),
    ciudad:joi.string().required(),
    pais:joi.string().required(),
    zipcode:joi.string().required(),
    referencias:joi.string().required(),
    correo: joi.string().required(),
    password: joi.string().required(),
    telefono:joi.string().required(),
    rol:joi.string().optional(),
});


export default async (req, res, next) => {
  try {
    req.body.rol="Cliente"
    await crearClienteSchema.validateAsync(req.body);
    next();     
  } catch (error) {
    return res.status(400).json({
      msg: 'Hubo un error al validar el registro del Cliente',
      error,
    });
  }
};