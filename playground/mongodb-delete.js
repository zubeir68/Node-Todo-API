//const {MongoClient, ObjectID} = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, client) => {
    if (err) {
      return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connect to MongoDB server");
    const db = client.db('TodoApp');

    //Start

    //deleteMany
    //db.collection('Todos').deleteMany({text: "Eat lunch"}).then(result => {
    //    console.log(result);
    //})


    //deleteOne
    //db.collection('Todos').deleteOne({text: 'Walk the cat'}).then(result => {
    //    console.log(result)
    //})

    //find one and delete
    //db.collection('Todos').findOneAndDelete({completed: false}).then(result => {
    //    console.log(result);
    //})

    db.collection('Users').deleteMany({name: "Zubeir Mohamed"}).then(result => {
        console.log(result);
    }, err => {
        console.log('Error', err)
    })

    //End
    client.close();
  }
);
