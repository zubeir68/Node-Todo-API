let express = require("express");
let bodyParser = require("body-parser");

let { mongoose } = require("./db/mongoose");
let { Todo } = require("./models/todo");
let { User } = require("./models/user");

var app = express();

app.use(bodyParser.json());

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

//POST /users
app.post("/users", (req, res) => {
  let user = new User({
    email: "zubeir.mohamed@outlook.de"
  });

  user.save().then(
    doc => {
      res.status(200).send(doc);
    },
    e => {
      res.status(400).send(e);
    }
  );
});


app.listen(3000, () => {
  console.log("Started on port 3000");
});

module.exports = {
  app
};
