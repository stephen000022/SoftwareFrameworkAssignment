var express = require('express'); 
var app = express();
var cors = require('cors');
app.use (cors());
var bodyParser = require('body-parser');
app.use (bodyParser.urlencoded({ extended: true }));
app.use (bodyParser.json());
app.use (express.static(__dirname + '/../dist/login'));
console.log(__dirname);
const PORT = 3000;
const io = require('socket.io')(http, {
    cors: {
        origin: "*",//"http://localhost:4200/group",
        //methods: ["GET", "POST"], 
    }
});

var http = require("http").Server(app);
//var server = http.listen(3000, function() {
    //console.log("Server listening on port: 3000");
//});

app.post('/login', require('./router/postlogin'));
app.post('/loginafter', require('./router/afterlogin'));
app.post('/group', require('./router/group'));
const sockets = require('./socket.js');
const link = require('./mongodb');
app.post('/userInsert', link.insertuser);
app.get('/userFind', link.finduser);
app.put('/userUpdate', link.updateuser);
app.post('/userDelete', link.deleteuser);

app.post('/groupInsert', link.insertgroup);
app.get('/groupFind', link.findgroup);
app.put('/groupUpdate', link.updategroup);
app.post('/groupDelete', link.deletegroup);
const PORT2 = 3001;
sockets.connect(io, PORT2);

require('./listen.js').listen(http,PORT);