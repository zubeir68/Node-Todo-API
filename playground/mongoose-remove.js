const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose.js');
const { Todo }  = require('./../server/models/todo');
const { User } = require('./../server/models/user');

Todo.remove({}).then(result => {
    console.log(result)
})

Todo.findOneAndRemove({
    _id: '5c47f1f70b10310fed637c91'
}).then(todo => {
    console.log(todo);
})

Todo.findByIdAndRemove("5c47f1f70b10310fed637c91").then(todo => {
    console.log(todo);
})