import express, { Request, Response } from 'express';
import { retreive } from '../database/retrieve';

const router = express.Router();

router.get('/articles/categories', async (req: Request, res: Response) => {
  try {
    const result = await retreive(
      'SELECT Id AS id, Name AS name FROM ArticleCategories'
    );

    res.send({ result });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      err: 'Something went wrong with the server.'
    });
  }
});

router.get('/articles', async (req: Request, res: Response) => {
  try {
    const result = await retreive(
      'SELECT Id AS id, Title as title, Content as content, Thumbnail as thumbnail, IdCategory AS category, CreationTime AS created FROM Articles'
    );

    res.send({ result });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      err: 'Something went wrong with the server.'
    });
  }
});

export { router };
