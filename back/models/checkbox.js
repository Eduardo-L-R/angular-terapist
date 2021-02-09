const mongoose = require('mongoose');

const checkbox = new mongoose.Schema({
  nombre: {
    required: true,
    type: String
  },
  formulario: {
    required: true,
    type: String
  }
  // label: {
  //   required: true,
  //   type: String
  // },
  // toggle: {
  //   required: true,
  //   type: Boolean
  // },
  // inline: {
  //   required: true,
  //   type: Boolean
  // },
  // name: {
  //   required: true,
  //   type: String
  // },
  // access: {
  //   required: true,
  //   type: Boolean
  // },
  // other: {
  //   required: true,
  //   type: Boolean
  // },
  // values: {
  //   required: true,
  //   type: Array
  // },
});

module.exports = mongoose.model('checkbox', checkbox);
