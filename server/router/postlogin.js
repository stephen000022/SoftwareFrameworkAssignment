var fs = require('fs');

module.exports = function(req, res) {
    var u = req.body.email;
    var p = req.body.password;
    var c = u + p;

console.log(c);
fs.readFile('./data/user.json', 'utf8', function(err, data) {
    if (err) throw err;
    let userArray = JSON.parse(data);
    console.log(userArray);
    let i = userArray.findIndex(user =>
        ((user.email == u) && (user.password == p)));
    if (i == -1) {
        res.send({"ok": false});
    } else {
        console.log(userArray[i]);
        res.send({"ok": true})
    }
});
}