var express = require("express");
var path = require('path');
var bodyParser = require("body-parser");

var home = require('./routes/home');
var members = require('./routes/members');
var app = express();

//View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));

// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', home);
app.use('/api', members);

app.listen(3000);
console.log("Express app running on port 3000");