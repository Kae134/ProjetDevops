import request from 'supertest';
import app from '../app.js';

describe('Test des routes de l\'application', () => {
    it('GET / doit retourner un message et un lien vers la liste des tâches', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
        message: 'API is running',
        TaskList: expect.stringContaining('/api/v1/tasklist'),
    });
    });
});
