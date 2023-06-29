import { Request, Response } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middleware';
import { StatusCodes } from 'http-status-codes';

interface Icity {
  name: string;
}

interface IFilter {
  filter?: string;
}

export const createValidation = validation(getSchema => ({
  body: getSchema<Icity>(
    yup.object().shape({
      name: yup.string().required().min(3),
    })
  ),
  query: getSchema<IFilter>(
    yup.object().shape({
      filter: yup.string().optional().min(3),
    })
  ),
}));

export const create = async (req: Request<{}, {}, Icity>, res: Response) => {
  console.log(req.body);
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Not implemented');
};
