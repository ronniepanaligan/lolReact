const router = require('express').Router();
const axios = require('axios');
const config = require('../config/main');
const Summoner = require('../models/summoner');

const baseURL = config.baseUrl;
const apiKey = `?api_key=${config.apiKey}`

//basic route to get summoner info
router.get('/summoner/:summoner_name', (req, res, next) => {
  const name = req.params.summoner_name;

  axios.get(baseURL + 'summoner/v3/summoners/by-name/' + name + apiKey)
  .then((response) => {
    Summoner.findOrCreate({
      where: {
        name: req.params.name
      },
      defaults: response.data
    });
    res.json(response.data);
  });
  .catch(next);
});

module.exports = router;
