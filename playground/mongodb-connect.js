// //const {MongoClient, ObjectID} = require('mongodb').MongoClient;
// const { MongoClient, ObjectID } = require("mongodb");

// MongoClient.connect(
//   "mongodb://localhost:27017/TodoApp",
//   (err, client) => {
//     if (err) {
//       return console.log("Unable to connect to MongoDB server");
//     }
//     console.log("Connect to MongoDB server");

//     db.collection("Todos")
//       .find({
//         _id: new ObjectID("")
//       })
//       .toArray()
//       .then(
//         docs => {
//           console.log("Todos");
//           console.log(JSON.stringify(docs, undefined, 2));
//         },
//         err => {
//           console.log("Unable to fetch todos", err);
//         }
//       );

//     db.collection("Todos")
//       .count()
//       .then(
//         count => {
//           console.log(`Count: ${count}`);
//         },
//         err => {
//           console.log("Unable to fetch todos", err);
//         }
//       );

//     client.close();
//   }
// );
``