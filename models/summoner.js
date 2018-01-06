var mongoose = require('mongoose');
var schema = mongoose.Schema;

var summonerModel = new schema({
  id: Number,
  accountId: Number,
  name: String,
  profileIcon: Number,
  summonerLevel: Number
});

module.exports = mongoose.model('Summoner', summonerModel);
