'use strict';

let express = require('express');
let app = express();
let path = require('path');
global.appRoot = path.resolve(__dirname);

let env = require('node-env-file');
// set up env variables
env('./.env');

let config = require('./config/config'); 

require('./scripts/routes')(app);;
require('./scripts/run')(app, config);
