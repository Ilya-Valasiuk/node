'use strict';

let express = require('express');
let app = express();
let config = require('./scripts/config/config'); 
let parserConfig = require('./scripts/config/responseParserConfig')(app);

// set up env variables
let env = require('node-env-file');
env('./.env');

require('./scripts/routes')(app);

require('./scripts/run')(app, config);