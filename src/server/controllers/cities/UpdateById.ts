import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { validation } from '../../shared/middleware';
import * as yup from 'yup';

interface IparamsProps {
  id?: number;
}

interface IBodyProps {
  name: string;
}

export const updateByIdValidation = validation(getSchema => ({
  params: getSchema<IparamsProps>(
    yup.object().shape({
      id: yup.number().required().moreThan(0),
    })
  ),
  body: getSchema<IBodyProps>(
    yup.object().shape({
      name: yup.string().required().min(3),
    })
  ),
}));

export const updateById = async (
  req: Request<{}, {}, IBodyProps, IparamsProps>,
  res: Response
) => {
  console.log(req.params);
  console.log(req.body);
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Not implemented');
};
