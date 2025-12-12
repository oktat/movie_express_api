import supertest from 'supertest'
import app from '../app/app.js'

describe('/api/movies', () => {
    const restype= 'application/json; charset=utf-8'
    var token = null

    it('post /movies ', async () => {
      await supertest(app)
        .post('/api/movies')
        .set('Accept', 'application/json')
        .send({
            title: 'A piros árnyék',
            year: 1999,
            director: 'Kozma János',
            length: 123
        })
        .expect('Content-Type', restype)
        .expect(201)

    })
    it('get /movies', async () => {
      await supertest(app)
        .get('/api/movies')
        .set('Accept', 'application/json')
        .expect('Content-Type', restype)
        .expect(200)
    })
    it('put /movies/:id', async () => {
      await supertest(app)
        .put('/api/movies/1')
        .set('Accept', 'application/json')
        .send({
            title: 'A vörös árnyék',
            year: 1999,
            director: 'Kozma János',
            length: 123
        })
        .expect('Content-Type', restype)
        .expect(200)
    })
    it('delete /movies/:id', async () => {
      await supertest(app)
        .delete('/api/movies/1')
        .set('Accept', 'application/json')
        .expect(200)
    })
})
