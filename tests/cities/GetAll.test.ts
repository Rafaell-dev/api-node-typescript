import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Get all cities', () => {
  it('should get all cities', async () => {
    const res01 = await testServer.get('/cities').send();
    expect(Number(res01.header['x-total-count'])).toBeGreaterThan(0); //x-total-count is a the total of cities registers in the database
    expect(res01.status).toEqual(StatusCodes.OK);
    expect(res01.body.length).toBeGreaterThan(0);
  });
});
