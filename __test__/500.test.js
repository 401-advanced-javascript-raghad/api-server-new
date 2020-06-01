'use strict';

const {server} = require('../lib/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('web server', () => {
    it('should respond with 500', ()=> {
        
        return mockRequest.get('/bad')
            .then(results=> {
                expect(results.status).toBe(500);
            }).catch(console.error);
    });
});