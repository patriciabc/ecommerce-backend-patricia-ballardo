import express from 'express';

const api = express();
api.use(express.json());

api.get('/status', (_, res) => {
  return res.json({
    msg: 'API E-commerce funcionando',
  });
});

export default api;
