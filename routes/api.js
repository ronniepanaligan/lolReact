const router = require('express').Router();
const axios = require('axios');
const config = require('../config/main')

const baseURL = config.baseUrl;
const apiKey = `?api_key=${config.apiKey}`

router.get('/summoner/:summoner_name', (req, res, next) => {
  const name = req.params.summoner_name;

  axios.get(baseURL + 'summoner/v3/summoners/by-name/' + name + apiKey)
  .then((response) => {
    res.json(response.data);
  });
});

module.exports = router;
