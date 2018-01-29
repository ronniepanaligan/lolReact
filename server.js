const express = require('express');
const session = require('express-session');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/main');
const cors = require('cors')

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
mongoose.connect(config.url, { useMongoClient: true });

app.use(express.static(path.join(__dirname, 'dist')));

//middleware stuff
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(session({ secret: config.secret, saveUninitialized: true, resave: true, cookie: { maxAge: 60 }  }));
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport');

const api = require('./routes/api');
app.use('/api', api);

app.get('/*', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(port, function(){
    console.log('running on Port '+ port);
});
