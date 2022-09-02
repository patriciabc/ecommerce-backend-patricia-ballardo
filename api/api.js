import express from 'express';
import usuarioRoutes from './routes/usuarioRoutes.js';
import categoriaRoutes from './routes/categoriaRoutes.js';
import productoRoutes from './routes/productoRoutes.js';
import authRoutes from './routes/authRoutes.js';
import carritoRoutes from './routes/carritoRoutes.js'


const api = express();
api.use(express.json());

api.get('/status', (_, res) => {
  return res.json({
    msg: 'Api E-commerce funcionando',
  });
});

api.use(usuarioRoutes)
api.use(categoriaRoutes)
api.use(productoRoutes)
api.use(authRoutes)
api.use(carritoRoutes)

export default api;
