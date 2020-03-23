var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 
MongoClient.connect(url, { useNewUrlParser: true , useUnifiedTopology: true}, function(err, db) {
  if (err) throw err;
  console.log("資料庫已建立!");
  db.close();
});