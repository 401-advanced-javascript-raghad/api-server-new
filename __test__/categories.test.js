'use strict';

const categories = require('../lib/models/categories/categories.collection');


describe('categories Model', () =>{
  let testObj = {name: 'test-categ1', display_name: 'raghad', description:'student'};
  let test2Obj = {name: 'test-categ2', display_name: 'raghadQu', description:'student'};

  it('can create() a categories', ()=> {
    return categories.create(testObj)
      .then(record => {
        Object.keys(testObj).forEach(key=> {
          expect(record[key]).toEqual(testObj[key]);
        });
      });
  });
  it('can get() categories', ()=> {
    return categories.get()
      .then(results => {
        Object.keys(testObj).forEach(key=> {
          expect(results[0][key]).toEqual(testObj[key]);
        });
      });
  });
  it('can update() categories', ()=> {
    return categories.get()
      .then(results => {
        return categories.update(results[0]._id,test2Obj)
          .then(data => {
            Object.keys(test2Obj).forEach(key=> {
              expect(data[key]).toEqual(test2Obj[key]);
            });
          });
      });
  });
  it('can delete() categories', ()=> {
    return categories.get()
      .then(results => {
        return categories.delete(results[0]._id)
          .then(data => {
            return categories.get()
              .then(results => {
                expect(results).toEqual([]);
              });
          });
      });
  });
});