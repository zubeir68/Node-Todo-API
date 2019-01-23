const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose.js');
const { Todo }  = require('./../server/models/todo');
const { User } = require('./../server/models/user');


let id = "5c47be6ce79a060f29d7899e";

if(!ObjectID.isValid(id)) {
    console.log('ID not valid');
}

//debugger;
//  Todo.find({
//      _id: id
//  }).then(todos => {
//      console.log('find function Todos: ', todos);
//  })


//  Todo.findOne({
//      _id: id
//  }).then(todo => {
//      console.log('findOne function Todos:', todo);
//  });

// Todo.findById(id).then(todo => {
//     if(!todo) {
//         return console.log('Id not found')
//     }
//     console.log('Todo By ID:', todo);
// }).catch(e => console.log(e))

User.findById(id).then(user => {
    if(!user) {
        return console.log('Id not found');
    }
    console.log('User by ID: ', user);
}).catch(e => console.log(e));