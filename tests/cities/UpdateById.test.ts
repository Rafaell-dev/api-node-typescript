import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Update data', () => {
  it('should update data successfully', async () => {
    // Create a new city
    const createRes = await testServer.post('/cities').send({
      name: 'São Paulo',
    });

    expect(createRes.status).toEqual(StatusCodes.CREATED);

    // Update the city name
    const updateRes = await testServer
      .put(`/cities/${createRes.body.id}`)
      .send({
        name: 'New York',
      });

    expect(updateRes.status).toEqual(StatusCodes.OK);
    expect(updateRes.body.name).toEqual('New York');
  });

  it('should fail to update data if the city does not exist', async () => {
    const invalidCityId = '123';

    const updateRes = await testServer.put(`/cities/${invalidCityId}`).send({
      name: 'New York',
    });

    expect(updateRes.status).toEqual(StatusCodes.NOT_FOUND);
    expect(updateRes.body).toHaveProperty('message', 'City not found');
  });
});

//created by chat-gpt needed to be reviewed