'use strict';

const supergoose = require('@code-fellows/supergoose');
const { server } = require('../lib/server');
const mockRequest = supergoose(server);

describe('categories API', ()=> {
  it('it can get() categories ', ()=> {
    let obj = {name: 'test-categ1', display_name: 'raghad', description:'student'};
    return mockRequest
      .post('/api/v1/categories')
      .send(obj)
      .then(data => {
        return mockRequest.get('/api/v1/categories')
          .then(result => {
            Object.keys(obj).forEach(key=> {
              expect(result.body[0][key]).toEqual(obj[key]);
            });
          });
      });
  });
  

  it('can post() a new categories ', ()=> {
    let obj = {name: 'test-categ1', display_name: 'raghad', description:'student'};
    return mockRequest
      .post('/api/v1/categories')
      .send(obj)
      .then(data => {
        expect(data.status).toBe(201);
        Object.keys(obj).forEach(key => {
          expect(data.body[key]).toEqual(obj[key]);
        });
      });
  });
  it('TEST post() failure ', ()=> {
    let obj = {name: 'test'};
    return mockRequest
      .post('/api/v1/categories')
      .send(obj)
      .then(data => {
        expect(data.status).toBe(500);
      });
  });
  // it('it can post() product ', ()=> {
  //   let obj = {
  //     'category' : 'test cat',
  //     'name': 'test',
  //     'display_name': 'testttt',
  //     'description': 'The latest tests',
  //   };
  //   return mockRequest
  //     .post('/products')
  //     .send(obj)
  //     .then(data => {
  //       expect(data.status).toBe(201);
  //       Object.keys(obj).forEach(key=> {
  //         expect(data.body[key]).toEqual(obj[key]);
  //       });
  //     });
  // });
  // it('it can get() product ', ()=> {
  //   let obj = {
  //     'category' : 'test cat',
  //     'name': 'test',
  //     'display_name': 'testttt',
  //     'description': 'The latest tests',
  //   };
  //   return mockRequest
  //     .post('/products')
  //     .send(obj)
  //     .then(data => {
  //       return mockRequest.get('/products')
  //         .then(result => {
  //           console.log(result.body);
  //           Object.keys(obj).forEach(key=> {
  //             expect(result.body[0][key]).toEqual(obj[key]);
  //           });
  //         });
  //     });
  // });
});
