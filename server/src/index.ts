import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { router as articleRouter } from './routes/articles';
import { router as assetRouter } from './routes/asset';
import { router as projectRouter } from './routes/projects';
import { router as contactRouter } from './routes/contact';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(articleRouter);
app.use(projectRouter);
app.use(contactRouter);
app.use(assetRouter);

app.listen(process.env.SERV_PORT, () =>
  console.log(`Listening on port ${process.env.SERV_PORT}...`)
);
