import sql from 'mssql/msnodesqlv8';
import 'dotenv/config';

const config: sql.config = {
  user: process.env.USER_NAME,
  password: process.env.USER_PWD,
  server: process.env.DB_HOST || '',
  database: process.env.DB_NAME,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 1433,
  options: {
    encrypt: false
  }
};

export { config };
