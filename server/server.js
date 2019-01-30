require('./config/config');
const _ = require('lodash');
const express = require("express");
const bodyParser = require("body-parser");
const { ObjectID } = require("mongodb"); //check
const { mongoose } = require("./db/mongoose");
const { Todo } = require("./models/todo");
const { User } = require("./models/user");
const { authenticate } = require('./middleware/authenticate');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

//--------------------------------------------TODO
//POST /todos
app.post("/todos", (req, res) => {
  let todo = new Todo({
    text: req.body.text
  });

  todo.save().then(
    doc => {
      res.send(doc);
    },
    e => {
      res.status(400).send(e);
    }
  );
});

//GET /todos
app.get("/todos", (req, res) => {
  Todo.find().then(
    todos => {
      res.send({ todos });
    },
    err => {
      res.status(400).send(err);
    }
  );
});


//GET /todos/:id
app.get("/todos/:id", (req, res) => {
  let id = req.params.id;

  if (!ObjectID.isValid(id)) { //check
    return res.status(404).send(); //check
  }                                  //check

  Todo.findById(id).then(todo => {
      if(!todo) {
         return res.status(404).send();
      }
      return res.send({todo});
      
  }).catch(e => res.status(400).send())

});

//DELETE /todo/:id
app.delete('/todos/:id', (req,res) => {
  let id = req.params.id;

  if(!ObjectID.isValid(id)) {
   return res.status(400).send();
  }
  Todo.findByIdAndRemove(id).then(todo => {
    if(!todo) {
     return res.status(404).send();
    }
   res.send({todo});
  }, e => res.status(400).send());
});


//PATCH /todos/:id

app.patch('/todos/:id', (req, res) => {
  let id = req.params.id;

  //with lodash this will specify only what you can edit
  let body = _.pick(req.body, ['text', 'completed']);

  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  if(_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then(todo => {
    if(!todo) {
      return res.status(404).send();
    }

    res.send({todo});
  }).catch(e => {
    res.status(400).send()
  })

})

//------------------------------------------USERS

//GET /users

// app.get('/users', (req,res) => {
//   User.find().then(users => {
//     res.status(200).send({users});
//   }).catch(e => res.status(400).send(e));
// })



app.get('/users/me', authenticate, (req, res) => {
  res.send(req.user);
})

//POST /users

app.post("/users", (req, res) => {
  let body = _.pick(req.body, ['email', 'password']);
  let user = new User(body);



  user.save().then(() => {
    return user.generateAuthToken();
  }).then(token => {
    res.header('x-auth', token).send(user);
  }).catch(e => {
    res.status(400).send(e);
  })
})


app.listen(port, () => {
  console.log(`Started on port: ${port}`);
});

module.exports = {
  app
};
