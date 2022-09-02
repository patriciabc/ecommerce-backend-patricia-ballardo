import express from "express";
import crearCategoriaValidator from '../middlewares/crearCategoriaValidator.js';

import {crearCategoria} from '../controllers/categoriaController.js';

const router = express.Router();

router
  .route('/categoria')
  .post(crearCategoriaValidator,crearCategoria);

export default router;