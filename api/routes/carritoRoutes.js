import express from "express";
import agregarItemCarritoValidator from '../middlewares/agregarItemCarritoValidator.js';

import { agregarItemCarrito } from '../controllers/carritoController.js';

const router = express.Router();

router
  .route('/carrito')
  .post(agregarItemCarritoValidator,agregarItemCarrito);

export default router;