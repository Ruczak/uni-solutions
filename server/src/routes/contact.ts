import express, { Request, Response } from 'express';
import sql from 'mssql/msnodesqlv8';
import { config } from '../config';
import { checkForm } from '../middleware/checkForm';

const router = express.Router();

router.post('/contact', checkForm, async (req: Request, res: Response) => {
  try {
    const conn = await new sql.ConnectionPool(config).connect();
    const stmt = new sql.PreparedStatement(conn);

    const body = Object.assign({ sent: new Date() }, req.body);

    stmt.input('firstname', sql.VarChar(40));
    stmt.input('lastname', sql.VarChar(40));
    stmt.input('email', sql.VarChar(80));

    stmt.input('subject', sql.VarChar(40));
    stmt.input('description', sql.VarChar);
    stmt.input('sent', sql.DateTime);

    if (body.phone) {
      stmt.input('phone', sql.Char(14));

      const query =
        'INSERT INTO ContactRequests(FirstName, LastName, Email, Phone, Subject, Description, SendTime) VALUES (@firstname, @lastname, @email, @phone, @subject, @description, @sent)';

      stmt.prepare(query, (err) => {
        if (err) throw err;
        stmt.execute(body, (err, result) => {
          if (err) throw err;

          res.status(201).send({ addedRows: result?.rowsAffected[0] });
        });
      });
    } else {
      const query =
        'INSERT INTO ContactRequests(FirstName, LastName, Email, Subject, Description, SendTime) VALUES (@firstname, @lastname, @email, @subject, @description, @sent)';

      stmt.prepare(query, (err) => {
        if (err) throw err;
        stmt.execute(body, (err, result) => {
          if (err) throw err;

          res.status(201).send({ addedRows: result?.rowsAffected[0] });
        });
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({
      error: 'Something went wrong with the server.'
    });
  }
});

export { router };
