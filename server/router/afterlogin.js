var fs = require('fs');

module.exports = function(req, res) {
    let userobj = {
        "email": req.body.email,
        "username": req.body.username,
        "id": req.body.id,
        "role": req.body.role,
        "password": req.body.password
    }
    let uArray = [];
    fs.readFile('./data/user.json', 'utf8', function(err, data){
        if (err) throw err;
        let uArray = JSON.parse(data);
        uArray.push(userobj);
        console.log(userobj);

        uArrayjson = JSON.stringify(uArray);
        fs.writeFile('./data/user.json', uArrayjson, 'utf8', function(err){
            if (err) throw err;
            res.send(uArray);
        });
    });
};