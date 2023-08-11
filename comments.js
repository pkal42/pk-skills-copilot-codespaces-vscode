//create a web server
var express = require('express');
var router = express.Router();
var comments = require('../models/comments');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();
var mongoose = require('mongoose');
var app = express();