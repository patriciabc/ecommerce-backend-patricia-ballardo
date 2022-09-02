import express from "express";
import loginUsuarioValidator from '../middlewares/loginUsuarioValidator.js';


import {login} from '../controllers/authController.js';

const router = express.Router();

router
  .route('/login')
  .post(loginUsuarioValidator,login);

export default router;