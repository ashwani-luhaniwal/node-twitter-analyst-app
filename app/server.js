var express = require('express'),
    path = require('path');

var app = express();

// use ejs and express layouts
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/../public/views'));

app.use(express.static(path.join(__dirname, '/../public')));

require('./database.js');
require('./routes.js')(app);

module.exports = app;