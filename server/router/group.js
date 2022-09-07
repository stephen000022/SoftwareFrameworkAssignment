var fs = require('fs');

module.exports = function(req, res) {
    var r = req.body.role;
    let groupobj = {
        "groupname": req.body.groupname
    };
    fs.readFile('./data/user.json', 'utf8', function(err, data){
        if (err) throw err;
        let userArray = JSON.parse(data);
        fs.readFile('./data/groupinf.json', 'utf8', function(err, data){
            if (err) throw err;
            let groupArray = JSON.parse(data);
            if ( r == "Group" || r == "Super") {
                groupArray.push(groupobj);
                let uArrayjson = JSON.stringify(groupArray);
                fs.writeFile('./data/groupinf.json', uArrayjson, 'utf8', function(err) {
                    if (err) throw err;
                })
            } else {
                alert("No Admin!!!!")
            }
        });
    });
}