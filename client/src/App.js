import React, { Component } from "react";
import axios from "axios";
import Title from "./components/title";
import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";
import TotalCount from "./components/totalCount";
import "./App.css";

window.id = 1;

export class App extends Component {
  state = {
    coseDaFareArray: [{ testo: "questa è una prova!!", Id: 0 }]
  };

  //-------------------------------------------------------------------------------
  // componentDidMount = () => {
  //   fetch("http://5da87245e44c790014cd4dfd.mockapi.io/api/versione1/coseDaFare")
  //     .then(eleObj => eleObj.json())
  //     .then(elemento => this.setState({ coseDaFareArray: elemento }));
  // };

  componentDidMount = () => {
    axios
      .get("http://localhost:4000/api/tasks")
      .then(res => {
        const items = res.data;
        this.setState({ coseDaFareArray: items });
      })
      .then(() =>
        console.log("state cose da fare ", this.state.coseDaFareArray)
      );
  };

  //-------------------------------------------------------------------------------
  // aggiungiAllaLista = event => {
  //   console.log("Aggiunto alla lista.", event, this.state.coseDaFareArray);
  //   // this.state.coseDaFareArray.push({ testo: event, Id: window.id++ });
  //   this.state.coseDaFareArray.push({
  //     testo: event,
  //     Id: this.state.coseDaFareArray.length
  //   });
  //   this.setState({ coseDaFareArray: this.state.coseDaFareArray });
  // };
  aggiungiAllaLista = event => {
    axios.post("http://localhost:4000/api/tasks", {
      testo: event
    });
    // aggiorno direttamente lo stato mettendo un nuovo elemento nell'array
    // preso dall'input
    this.state.coseDaFareArray.push({
      testo: event,
      Id: null
    });
    // aggiorno lo stato con setState per farlo sapere a react e refreshare la pagina.
    this.setState({ coseDaFareArray: this.state.coseDaFareArray });
  };

  //-------------------------------------------------------------------------------
  // cancellaDallaLista = event => {
  //   console.log("cancellato!!", event);
  //   let resultFilter = this.state.coseDaFareArray.filter(elemento => {
  //     return elemento.Id !== event;
  //   });
  //   this.setState({ coseDaFareArray: resultFilter });
  // };

  cancellaDallaLista = event => {
    console.log("cancellato!!", event);
    axios.delete(`http://localhost:4000/api/tasks/${event}`);
    let resultFilter = this.state.coseDaFareArray.filter(elemento => {
      return elemento._id !== event;
    });
    this.setState({ coseDaFareArray: resultFilter });
  };

  //-------------------------------------------------------------------------------

  render() {
    return (
      <div className="App shadow p-3 mb-5 bg-white rounded">
        <Title />
        <TotalCount totalCount={this.state.coseDaFareArray.length} />
        <TodoForm aggiungiAllaLista={this.aggiungiAllaLista} />
        <TodoList
          coseDaFareArray={this.state.coseDaFareArray}
          cancellaDallaLista={this.cancellaDallaLista}
        />
      </div>
    );
  }
}

export default App;
