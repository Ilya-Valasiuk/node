'use strict';

let express = require('express');
var app = express();

var config = require('./scripts/config/config');
var parserConfig = require('./scripts/config/responseParserConfig')(app);

require('./scripts/routes')(app);

require('./scripts/run')(app, config);