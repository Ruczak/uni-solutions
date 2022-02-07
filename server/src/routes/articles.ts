import express, { Request, Response } from 'express';
import { retreive } from '../database/retrieve';

const router = express.Router();

router.get('/articles/categories', async (req: Request, res: Response) => {
  try {
    const result = await retreive('SELECT * FROM ArticleCategories');

    res.send({ result });
  } catch (err) {
    console.log(err);
    res.send({
      err: {
        code: 500,
        msg: 'Something went wrong with the server.'
      }
    });
  }
});

router.get('/articles', async (req: Request, res: Response) => {
  try {
    const result = await retreive('SELECT * FROM Articles');

    res.send({ result });
  } catch (err) {
    console.log(err);
    res.send({
      err: {
        code: 500,
        msg: 'Something went wrong with the server.'
      }
    });
  }
});

export { router };
