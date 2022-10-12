var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var mongodb = require('mongodb');
var ObjectId = mongodb.ObjectId;
var dbname = "mydb";
var colename1 = "user";
var colename2 = "group";


exports.insertuser = function(req, res) {
    console.log("data send")
    MongoClient.connect(url, {
        useNewUrlParser: true
    }, function(err, client) {
        if (err) throw err;
        let db = client.db(dbname); 
        let doc = req.body;
        myCol = db.collection(colename1);
        myCol.insertOne(doc, function(err, result) {
            console.log("Inserted the following document into the collection:");
            console.log(doc);
            res.send(doc);
            client.close();
        });

    });
};

exports.finduser = function(req, res) {
    MongoClient.connect(url, {
        useNewUrlParser: true
    }, function(err, client) {
        if (err) throw err;
        let db = client.db(dbname);

        db.collection(colename1).find({}).toArray(function(err, docs) {
            if (err) throw err;
            console.log("Found the following records");
            console.log(docs);
            res.send(docs);
            client.close();
        });
    });
};

exports.findtheuser = function(req, res) {
    MongoClient.connect(url, {
        useNewUrlParser: true
    }, function(err, client) {
        if (err) throw err;
        let db = client.db(dbname);

        db.collection(colename1).find({}).toArray(function(err, docs) {
            if (err) throw err;
            console.log("Found the user by email");
        });
    });
};

exports.updateuser = function(req, res) {
    MongoClient.connect(url, {
        useNewUrlParser: true
    }, function(err, client) {
        let db = client.db(dbname);
        let queryJSON = req.body.query;
        let updateJSON = req.body.update;

        db.collection(colename1).updateMany(queryJSON, {
            $set: updateJSON
        }, function(err, result) {
            console.log("for the documents with", queryJSON);
            console.log("SET: ", updateJSON);
            res.send(result);
            client.close();
        });
    });
};

exports.deleteuser = function(req, res) {
    MongoClient.connect(url, function(err, client) {
        let db = client.db(dbname);
        let queryJSON = req.body;
        console.log(queryJSON);
        queryJSON._id = new ObjectId(queryJSON._id);

        db.collection(colename1).deleteMany(queryJSON, function(err, result) {
            console.log("Removed the documents with: ", queryJSON, result);

            res.send(queryJSON);
            client.close();
        });
    });
};

exports.insertgroup = function(req, res) {
    MongoClient.connect(url, {
        useNewUrlParser: true
    }, function(err, client) {
        if (err) throw err;
        let db = client.db(dbname); 
        let doc = req.body;
        myCol = db.collection(colename2);
        myCol.insertOne(doc, function(err, result) {
            console.log("Inserted the following document into the collection:");
            console.log(doc);
            res.send(doc);
            client.close();
        });

    });
};

exports.findgroup = function(req, res) {
    MongoClient.connect(url, {
        useNewUrlParser: true
    }, function(err, client) {
        if (err) throw err;
        let db = client.db(dbname);

        db.collection(colename2).find({}).toArray(function(err, docs) {
            if (err) throw err;
            console.log("Found the following records");
            console.log(docs);
            res.send(docs);
            client.close();

        });
    });
};

exports.updategroup = function(req, res) {
    MongoClient.connect(url, {
        useNewUrlParser: true
    }, function(err, client) {
        let db = client.db(dbname);
        let queryJSON = req.body.query;
        let updateJSON = req.body.update;

        db.collection(colename2).updateMany(queryJSON, {
            $set: updateJSON
        }, function(err, result) {
            console.log("for the documents with", queryJSON);
            console.log("SET: ", updateJSON);
            res.send(result);
            client.close();
        });
    });
};

exports.deletegroup = function(req, res) {
    MongoClient.connect(url, function(err, client) {
        let db = client.db(dbname);
        let queryJSON = req.body;
        console.log(queryJSON);
        queryJSON._id = new ObjectId(queryJSON._id);

        db.collection(colename2).deleteMany(queryJSON, function(err, result) {
            console.log("Removed the documents with: ", queryJSON, result);

            res.send(queryJSON);
            client.close();
        });
    });
};