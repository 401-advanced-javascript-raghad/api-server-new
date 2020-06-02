'use strict';

const mongoose = require('mongoose');

const prodSchema = mongoose.Schema({
  category : {type: String, required: true},
  name : {type: String, required: true},
  display_name: {type: String, required: true},
  description: {type: String, required: false},
});

module.exports = mongoose.model('prodSchema', prodSchema);
