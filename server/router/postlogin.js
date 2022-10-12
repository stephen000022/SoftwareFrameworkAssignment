var fs = require('fs');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var mongodb = require('mongodb');
var ObjectId = mongodb.ObjectId;
var dbname = "mydb";
var colename1 = "user";

module.exports = function(req, res) {
    var u = req.body.email;
    var p = req.body.password;
    var c = u + p;

console.log(c);

    MongoClient.connect(url, {
        useNewUrlParser: true
    }, function(err, client) {
        if (err) throw err;
        let db = client.db(dbname);
        db.collection(colename1).find({}).toArray(function(err, docs) {
            if (err) throw err;
            console.log("Checking");
            console.log(docs);
            let i = docs.findIndex(user =>
                ((user.email == u) && (user.password == p)));
            if (i == -1) {
                res.send({"ok": false});
            } else {
                res.send({"ok": true});
                //res.send(u);
                //res.send(p);
            }
        });
    });


//fs.readFile('./data/user.json', 'utf8', function(err, data) {
  //  if (err) throw err;
    //let userArray = JSON.parse(data);
    //console.log(userArray);
    //let i = userArray.findIndex(user =>
        //((user.email == u) && (user.password == p)));
    //if (i == -1) {
      //  res.send({"ok": false});
    //} else {
      //  fs.readFile('./data/user.json', 'utf8', function(err, data) {
        //    let theuser = JSON.parse(data);
          //  let k = theuser.findIndex(user => 
            //  (( theuser.email == u )));
            //let theuserArray = theuser[k];
            //res.send({"ok": true});
            //res.send(theuserArray);
       // })
   // }
//});
}