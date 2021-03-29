
'use strict';

const superTest = require('supertest');
const server = require('../src/server');
const request = superTest(server.app);

describe('Server', () => {
    it('handle working routes', async () => {
        const response = await request.get('/');
        expect(response.status).toEqual(200);
        expect(response.text).toEqual('Hello World');
    });
    test('handle invalid routes', async () => {
        const response = await request.get('/foo');
        expect(response.status).toEqual(404);
    });
    it('handle bad method', async () => {
        const response = await request.post('/*');
        expect(response.status).toEqual(404);
    });
});