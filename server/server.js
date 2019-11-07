const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser"); // analizza oggetto request body e restituisce tutto sotto req.body.
const Task = require("./api/model/modelTodo"); // importiamo il modello Task
const cors = require("cors");

const app = express();

// collego mongoose a mongoDb
mongoose
  .connect("mongodb://localhost:27017/Tododb", {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => console.log("Conneted to mongoDb...."))
  .catch(err => console.log("Error to connect to mongoDb....", err));

app.use(cors());
// Middleware body-parser
// support parsing of application/json type post data
// l'oggetto request passerà prima qui...
app.use(bodyParser.json());

// in ascolto...

app.get("/api/tasks", (req, res) => {
  Task.find() // Task è il nome del modello
    .then(obj => res.json(obj));
});

app.post("/api/tasks", (req, res) => {
  console.log("post req.body", req.body);
  const new_task = new Task(req.body); // creo un nuovo oggetto Task dalle info prese dall'oggetto req.body
  new_task.save().then(task => res.json(task)); // salvo il nuovo oggetto in mongo
});

app.put("/api/tasks/:itemId", (req, res) => {
  console.log("put req.params.itemId", req.params.itemId);
  console.log("put req.params", req.params);
  Task.findOneAndUpdate({ _id: req.params.itemId }, req.body, {
    new: true
  }).then(task => res.json(task));
});

app.delete("/api/tasks/:itemId", (req, res) => {
  Task.deleteOne({ _id: req.params.itemId }).then(() =>
    res.send("ok cancellato")
  );
});

app.listen(4000, () => console.log("server on port 4000..."));
