const supertest = require('supertest');

const app = require('../app');

const genresKeys = ['id', 'name'];

describe('genres routes', () => {
  it('should get the genres list 🧪 /genres', async () => {
    const res = await supertest(app)
      .get('/genres')
      .expect(200)
      .expect('Content-Type', /json/);

    expect(Array.isArray(res.body)).toBe(true);

    res.body.forEach((genres) => {
      genresKeys.map((prop) => {
        expect(genres).toHaveProperty(prop);
      });
    });
  });

  it('should get the genre id 1 🧪 /genres/1', async () => {
    const res = await supertest(app)
      .get('/genres/1')
      .expect(200)
      .expect('Content-Type', /json/);

    genresKeys.map((prop) => {
      expect(res.body).toHaveProperty(prop);
    });
  });
});
