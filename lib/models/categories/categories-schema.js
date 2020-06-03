'use strict';

const mongoose = require('mongoose');

const catSchema = mongoose.Schema({
  name : {type: String, required: true},
  display_name: {type: String, required: true},
  description: {type: String, required: false},
});

module.exports = mongoose.model('catSchema', catSchema);
