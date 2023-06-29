import {Request, Response} from 'express';
import {StatusCodes} from 'http-status-codes';
import {validation} from '../../shared/middleware';
import * as yup from 'yup';

interface IparamsProps {
  id?: number;
}

export const deleteByIdValidation = validation(getSchema => ({
  params: getSchema<IparamsProps>(
    yup.object().shape({
      id: yup.number().required().moreThan(0),
    })
  ),
}));

export const deleteById = async (
  req: Request<{}, {}, {}, IparamsProps>,
  res: Response
) => {
  console.log(req.params);
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Not implemented');
};