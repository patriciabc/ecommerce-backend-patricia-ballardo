import joi from "joi"

const loginUsuarioSchema = joi.object({
    correo: joi.string().required(),
    password: joi.string().required(),
})

export default async(req, res, next) => {
    try {
        await loginUsuarioSchema.validateAsync(req.body);
        next();
    } catch (error) {
        return res.status(400).json({
            msg: 'Error de validacion',
            error
         })
    }
 }