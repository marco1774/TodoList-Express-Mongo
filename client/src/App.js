import React, { Component } from "react";
import Title from "./components/title";
import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";
import "./App.css";
import TotalCount from "./components/totalCount";

window.id = 1;

export class App extends Component {
  state = {
    coseDaFareArray: [{ testo: "questa è una prova!!", Id: 0 }]
  };
  componentDidMount = () => {
    fetch("http://5da87245e44c790014cd4dfd.mockapi.io/api/versione1/coseDaFare")
      .then(eleObj => eleObj.json())
      .then(elemento => this.setState({ coseDaFareArray: elemento }));
  };

  aggiungiAllaLista = event => {
    console.log("Aggiunto alla lista.", event, this.state.coseDaFareArray);
    // this.state.coseDaFareArray.push({ testo: event, Id: window.id++ });
    this.state.coseDaFareArray.push({
      testo: event,
      Id: this.state.coseDaFareArray.length
    });
    this.setState({ coseDaFareArray: this.state.coseDaFareArray });
  };

  cancellaDallaLista = event => {
    console.log("cancellato!!", event);
    let resultFilter = this.state.coseDaFareArray.filter(elemento => {
      return elemento.Id !== event;
    });
    this.setState({ coseDaFareArray: resultFilter });
  };

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
