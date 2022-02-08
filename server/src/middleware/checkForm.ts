import { NextFunction, Request, Response } from 'express';
import { ContactRequest, isContactRequest } from '../models/contactRequest';

export const checkForm = (req: Request, res: Response, next: NextFunction) => {
  if (isContactRequest(req.body)) {
    if (
      ('phone' in req.body &&
        typeof req.body.phone === 'string' &&
        req.body.phone.length <= 14) ||
      !('phone' in req.body)
    )
      next();
    else {
      res.status(400).send({
        error: 'Bad field type or length'
      });
    }
  } else
    res.status(400).send({
      error: 'Fields left unfilled'
    });
};
