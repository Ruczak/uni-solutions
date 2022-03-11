import express, { Request, Response } from 'express';
import { appendFile } from 'fs';
import { retreive } from '../database/retrieve';

const router = express.Router();

router.get('/projects/categories', async (req: Request, res: Response) => {
  try {
    const result = await retreive(
      'SELECT Id AS id, Name AS name FROM ProjectCategories'
    );

    res.send({ result });
  } catch (err) {
    console.log(err);
    res.send({
      error: {
        code: 500,
        msg: 'Something went wrong with the server.'
      }
    });
  }
});

router.get('/projects', async (req: Request, res: Response) => {
  try {
    const result = await retreive(
      'SELECT Id AS id, Name AS name, Description AS description, IdCategory AS category, CreationDate as created, Image as image FROM Projects'
    );

    res.send({ result });
  } catch (err) {
    console.log(err);
    res.send({
      error: {
        code: 500,
        msg: 'Something went wrong with the server.'
      }
    });
  }
});

export { router };
