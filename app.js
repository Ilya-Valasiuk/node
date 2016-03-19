var express = require('express');
var app = express();

var config = require('./config');
var parserConfig = require('./configParser')(app);

require('./routes')(app);

require('./run')(app, config);