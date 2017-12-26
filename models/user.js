var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userModel = new schema({
  email: {
    type: String
  },
  password: {
    type: String
  },
  firstName: {
    type: String
  }
});

module.exports = mongoose.model('User', userModel);
