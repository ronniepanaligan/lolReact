const router = require('express').Router();
const axios = require('axios');
const config = require('../config/main');
const Summoner = require('../models/summoner');

const baseURL = config.baseUrl;
const apiKey = `?api_key=${config.apiKey}`

//basic route to get summoner info such as accountId
router.post('/summoner/:summoner_name', (req, res, next) => {
  const name = req.params.summoner_name;

  axios.get(baseURL + 'summoner/v3/summoners/by-name/' + name + apiKey)
  .then((response) => {
    const aId = response.data.accountId;
    Summoner.findOne({ accountId: aId }, function(err, summoner) {
      if(summoner == null) {
        Summoner.create({
          id: response.data.id,
          accountId: response.data.accountId,
          name: response.data.name,
          profileIconId: response.data.profileIconId,
          summonerLevel: response.data.summonerLevel
        }, function(err) {
          if(err)
            res.json(err);
          res.json(response.data);
        })
      } else {
        res.json(summoner);
      }
    });
  })
});

module.exports = router;
