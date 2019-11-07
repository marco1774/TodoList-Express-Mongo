const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  testo: {
    type: String,
    required: "Enter text of the task"
  }
});
// Ogni volta che creeremo un nuovo Task , useremo questo modello
// che lo creerà rispettando lo schema TaskSchema per poterlo mettere
// nella collection tasks -- mongoose cercherà una collection con
// il nome del modello al plurale minuscolo quindi tasks
const Task = mongoose.model("task", TaskSchema);

module.exports = Task;
