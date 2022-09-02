import express from "express";
import crearProductoValidator from '../middlewares/crearProductoValidator.js';

import { crearProducto } from '../controllers/productoController.js';

const router = express.Router();

router
  .route('/producto')
  .post(crearProductoValidator,crearProducto);

export default router;