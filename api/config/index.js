import dotenv from 'dotenv';

dotenv.config();

export default {
  server: {
    port: process.env.PORT || 3000,
  },
  database: {
    uri: process.env.DB_URI || 'mongodb://localhost/ecommerce-default',
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  }
};
