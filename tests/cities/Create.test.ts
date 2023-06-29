import { describe } from 'node:test';
import { testServer } from '../jest.setup';
import { StatusCodes } from 'http-status-codes';

describe('Create city', () => {
  it('should create a city', async () => {
    const res01 = await testServer.post('/cities').send({
      name: 'São Paulo',
    });

    expect(res01.status).toEqual(StatusCodes.CREATED);
    expect(typeof res01.body).toEqual('number');
  });
  it('Cannot create a register with short name', async () => {
    const res01 = await testServer.post('/cities').send({
      name: 'São Paulo',
    });

    expect(res01.status).toEqual(StatusCodes.BAD_REQUEST);
    expect(typeof res01.body).toHaveProperty('errors.body.name');
  });
});
