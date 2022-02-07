import 'dotenv/config';
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.send({ value: process.env.DB_NAME });
});

app.listen(8080, () => console.log('Listening...'));
