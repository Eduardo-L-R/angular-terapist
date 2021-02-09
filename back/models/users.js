const mongoose = require('mongoose');

const Users = new mongoose.Schema({
  username: {
    required: true,
    type: String
  },
  password: {
    required: true,
    type: String
  },
  token: {
    required: false,
    type: String
  },
  expirationTime: {
    required: false,
    type: Date
  },
  userDateCreated: {
    required: false,
    type: Date
  }
});

module.exports = mongoose.model('Users', Users);
