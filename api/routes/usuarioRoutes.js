import express from "express";
import crearClienteValidator from '../middlewares/crearClienteValidator.js';
import crearVendedorValidator from '../middlewares/crearVendedorValidator.js';
import crearAdministradorValidator from '../middlewares/crearAdministradorValidator.js';

import {crearUsuario} from '../controllers/usuarioController.js';

const router = express.Router();

router
  .route('/usuario')
  .post(crearClienteValidator,crearUsuario);

  router
  .route('/vendedor')
  .post(crearVendedorValidator,crearUsuario);

  router
  .route('/administrador')
  .post(crearAdministradorValidator,crearUsuario);


export default router;