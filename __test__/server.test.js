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
    it('should respond 404 of an invalid route',() => {

        return mockRequest
            .get('/invalidroute')
            .then(results => {
                expect(results.status).toBe(404);
            }).catch(console.log);
    });
    it('should respond properly /products', ()=> {
        return mockRequest
            .get('/products?query=developer')
            .then(results => {
                expect(results.status).toBe(200);
            })
    });
    it('should respond properly /categories', ()=> {
        return mockRequest
            .get('/categories?query=developer')
            .then(results => {
                expect(results.status).toBe(200);
            })
    });
    it('should post data', ()=> {
        return mockRequest
            .post('/products')
            .send({ category: "developer",name: "raghad", display_name: "Raghad Al-Quran", description: "Student" })
            .then(results => {
                expect(results.status).toBe(200);
            })
    });
    it('should post data', ()=> {
        return mockRequest
            .post('/categories')
            .send({name: "raghad", display_name: "Raghad Al-Quran", description: "Student" })
            .then(results => {
                expect(results.status).toBe(200);
            })
    });
    it('should update data', ()=> {
        return mockRequest
            .put('/categories/1')
            .send({name: "raghad", display_name: "Raghad Al-Quran", description: "Student",id: "1" })
            .then(results => {
                expect(results.status).toBe(200);
            })
    });
    it('should update data', ()=> {
        return mockRequest
            .put('/products/1')
            .send({category:"developer", name: "raghad", display_name: "Raghad Al-Quran", description: "Student",id: "1" })
            .then(results => {
                expect(results.status).toBe(200);
            })
    });
    it('should delete data', ()=> {
        return mockRequest
            .delete('/products/1')
            .send({category:"developer", name: "raghad", display_name: "Raghad Al-Quran", description: "Student",id: "1" })
            .then(results => {
                expect(results.status).toBe(200);
            })
    });
    it('should delete data', ()=> {
        return mockRequest
            .delete('/products/1')
            .send({name: "raghad", display_name: "Raghad Al-Quran", description: "Student",id: "1" })
            .then(results => {
                expect(results.status).toBe(200);
            })
    });
});