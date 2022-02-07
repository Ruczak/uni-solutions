import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

import { router as articleRouter } from './routes/articles';
import { router as assetRouter } from './routes/asset';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(articleRouter);
app.use(assetRouter);

app.listen(process.env.SERV_PORT, () =>
  console.log(`Listening on port ${process.env.SERV_PORT}...`)
);
