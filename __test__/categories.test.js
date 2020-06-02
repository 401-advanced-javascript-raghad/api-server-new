'use strict';
const supergoose = require('@code-fellows/supergoose');

const categories = require('../lib/models/categories/categories.collection');


describe('categories Model', () =>{
  it('can create() a categories', ()=> {
    let testObj = {name: 'test-categ1', display_name: 'raghad', description:'student'};
    return categories.create(testObj)
      .then(record => {
        Object.keys(testObj).forEach(key=> {
          expect(record[key]).toEqual(testObj[key]);
        });
      });
  });
  it('can get() food', ()=> {
    let testObj = {name: 'test-categ1', display_name: 'raghad', description:'student'};
    return categories.get()
      .then(results => {
        Object.keys(testObj).forEach(key=> {
          expect(results[0][key]).toEqual(testObj[key]);
        });
      });
  });
  it('can update() food', ()=> {
    let testObj = {name: 'test-categ1', display_name: 'raghad', description:'student'};
    return categories.update(testObj)
      .then(results => {
        Object.keys(testObj).forEach(key=> {
          expect(results[key]).toEqual(testObj[key]);
        });
      });
  });
  it('can delete() food', ()=> {
    let testObj = {name: 'test-categ1', display_name: 'raghad', description:'student'};
    return categories.delete(testObj.params.id)
      .then(results => {
        Object.keys(testObj).forEach(key=> {
          expect(results[key]).toEqual(testObj[key]);
        });
      });
  });
});
