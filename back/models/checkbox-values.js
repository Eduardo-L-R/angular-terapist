const mongoose = require('mongoose');

const checkboxValues = new mongoose.Schema({

  id: {
    required: true,
    type: Number
  },
  label: {
    required: true,
    type: String
  },
  value: {
    required: true,
    type: String
  },
  selected: {
    required: true,
    type: Boolean
  }
});

module.exports = mongoose.model('checkboxValues', checkboxValues);
