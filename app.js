var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var tRouter = require('./routes/tasks');
var mRouter = require('./routes/teams');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/tasks', tRouter);
app.use('/api/teams', mRouter); // MEMBERS
mongoose.connect('mongodb://localhost/taskprep', { useNewUrlParser: true });
module.exports = app;
