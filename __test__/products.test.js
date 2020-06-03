'use strict';

const products = require('../lib/models/products/products.collection');


describe('products Model', () =>{
  let testObj = {category:'developer', name: 'test-categ1', display_name: 'raghad', description:'student'};
  let test2Obj = {category:'developer',name: 'test-categ2', display_name: 'raghadQu', description:'student'};
  it('can create() a products', ()=> {
    return products.create(testObj)
      .then(record => {
        Object.keys(testObj).forEach(key=> {
          expect(record[key]).toEqual(testObj[key]);
        });
      });
  });
  it('can get() products', ()=> {
    return products.get()
      .then(results => {
        Object.keys(testObj).forEach(key=> {
          expect(results[0][key]).toEqual(testObj[key]);
        });
      });
  });
  it('can update() products', ()=> {
    return products.get()
      .then(results => {
        return products.update(results[0]._id,test2Obj)
          .then(data => {
            Object.keys(test2Obj).forEach(key=> {
              expect(data[key]).toEqual(test2Obj[key]);
            });
          });
      });
  });
  it('can delete() products', ()=> {
    return products.get()
      .then(results => {
        return products.delete(results[0]._id)
          .then(data => {
            return products.get()
              .then(results => {
                expect(results).toEqual([]);
              });
          });
      });
  });
});
