const express = require('express');
const session = require('express-session');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const request = require('request');
const passport = require('passport');

const app = express();
const port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
mongoose.connect(config.url, { useMongoClient: true });

app.use(express.static(path.join(__dirname, 'dist')));

//middleware stuff
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(session({ secret: secret, saveUninitialized: true, resave: true, cookie: { maxAge: 60 }  }));
app.use(passport.initialize());
app.use(passport.session());

const api = require('./routes/api.js')(app);
const routes = require('./routes/routes')(app);
const auth = require('./routes/auth')(app);

app.get('/*', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(port, function(){
    console.log('running on Port '+ port);
});
