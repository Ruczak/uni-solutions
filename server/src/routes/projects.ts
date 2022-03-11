import express, { Request, Response } from 'express';
import { retreive } from '../database/retrieve';
import sql from 'mssql/msnodesqlv8';
import { config } from '../config';

const router = express.Router();

router.get('/projects/categories', async (req: Request, res: Response) => {
  try {
    const result = await retreive(
      'SELECT Id AS id, Name AS name FROM ProjectCategories'
    );

    res.send({ result });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      error: 'Something went wrong with the server.'
    });
  }
});

router.get('/projects', async (req: Request, res: Response) => {
  try {
    const conn = await new sql.ConnectionPool(config).connect();
    const stmt = new sql.PreparedStatement(conn);

    const conditions: string[] = [];

    const { body } = req;

    if (body.category) {
      conditions.push('IdCategory = @category');
      stmt.input('category', sql.Int);
    }

    if (body.search) {
      conditions.push('Name LIKE @search');
      stmt.input('search', sql.VarChar);
      body.search = `%${body.search}%`;
    }

    let query =
      'SELECT Id AS id, Name AS name, Description AS description, IdCategory AS category, CreationDate as created, Image as image FROM Projects';

    if (conditions.length > 0) {
      query += ' WHERE ' + conditions.join(' AND ');
    }

    stmt.prepare(query, (err) => {
      if (err) throw err;
      stmt.execute(req.body, (err, result) => {
        if (err) throw err;
        res.send({ result: result?.recordsets[0] });
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      error: 'Something went wrong with the server.'
    });
  }
});

export { router };
