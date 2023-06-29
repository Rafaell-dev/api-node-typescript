import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Delete city by id', () => {
  it('should delete a city by id', async () => {
    const res00 = await testServer
      .post('/cities')
      .send({
        name: 'São Paulo',
      })
      .send();

    expect(res00.status).toEqual(StatusCodes.CREATED);

    const res01 = await testServer.delete(`/cities/${res00.body}`).send();

    expect(res01.status).toEqual(StatusCodes.NO_CONTENT);
  });

  it('The response should state that the city does not exist.', async () => {
    const res02 = await testServer.delete('/cities/123').send();

    expect(res02.status).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
    expect(res02.body).toHaveProperty('errors.default');
  });
});
