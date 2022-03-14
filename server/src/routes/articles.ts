import express, { Request, Response } from 'express';
import { retreive } from '../database/retrieve';
import sql from 'mssql/msnodesqlv8';
import { config } from '../config';

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
    const conn = await new sql.ConnectionPool(config).connect();
    const stmt = new sql.PreparedStatement(conn);

    const conditions: string[] = [];

    const body: { category?: number; search?: string } = {};

    if (req.query.category) {
      conditions.push('IdCategory = @category');
      stmt.input('category', sql.Int);
      body.category = parseInt(req.query.category as string);
    }

    if (req.query.search) {
      conditions.push('Title LIKE @search');
      stmt.input('search', sql.VarChar);
      body.search = `%${req.query.search}%`;
    }

    let sqlQuery =
      'SELECT Id AS id, Title as title, Content as content, Thumbnail as thumbnail, IdCategory AS category, CreationTime AS created FROM Articles';

    if (conditions.length > 0) sqlQuery += ' WHERE ' + conditions.join(' AND ');

    stmt.prepare(sqlQuery, (err) => {
      if (err) throw err;
      stmt.execute(body, (err, result) => {
        if (err) throw err;
        res.send({ result: result?.recordsets[0] });
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      err: 'Something went wrong with the server.'
    });
  }
});

export { router };
