var express = require('express'); 
var app = express();
var cors = require('cors');
app.use (cors());
var bodyParser = require('body-parser');
app.use (bodyParser.urlencoded({ extended: true }));
app.use (bodyParser.json());
app.use (express.static(__dirname + '/../dist/login'));
console.log(__dirname);

var http = require("http").Server(app);
var server = http.listen(3000, function() {
    console.log("Server listening on port: 3000");
});

app.post('/login', require('./router/postlogin'));
app.post('/loginafter', require('./router/afterlogin'));
app.post('/group', require('./router/group'))