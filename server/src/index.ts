import 'dotenv/config';
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import sql from 'mssql/msnodesqlv8';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const config: sql.config = {
  user: process.env.USER_NAME,
  password: process.env.USER_PWD,
  server: process.env.SERV_NAME || '',
  database: process.env.DB_NAME,
  port: process.env.SERV_PORT ? parseInt(process.env.SERV_PORT) : 1433,
  options: {
    encrypt: false
  }
};

app.get('/', async (req: Request, res: Response) => {
  let articles;
  try {
    const conn = await new sql.ConnectionPool(config).connect();
    articles = await conn.request().query('EXEC sp_columns Articles');
    res.send({ records: articles?.recordsets[0] });
  } catch (err) {
    console.log('Error connecting to db', err);
    res.send({
      error: {
        message: err,
        code: 500
      }
    });
  }
});

app.listen(8080, () => console.log('Listening...'));
