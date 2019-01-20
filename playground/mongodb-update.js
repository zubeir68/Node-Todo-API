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

    // db.collection('Todos').findOneAndUpdate(
    //     {
    //         _id: new ObjectID('5c43d6ad59aa275e70fefc4e')
    //     }, {
    //         $set: {
    //             completed: true
    //         }
    //     }, {
    //         returnOriginal: false
    //     }).then(result => {
    //         console.log(result);
    //     })
    

    db.collection('Users').findOneAndUpdate(
        {
            _id: new ObjectID('5c43e4ce59aa275e70fefc51')
        },
        {
            $set: {
                name: "Zubeir"
            },
            $inc: {
                age: 1
            }
        }, 
        {
            returnOrignal: false
        }
    ).then(result => {
        console.log('Update Name:')
        console.log(result);
    })

    //End
    client.close();
  }
);
