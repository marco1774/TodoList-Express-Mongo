import React, { Component } from "react";
import Todo from "./todo";

export class TodoList extends Component {
  render() {
    const lista = this.props.coseDaFareArray.map(elemento => (
      <Todo
        testo={elemento.testo}
        Id={elemento.Id}
        cancellaDallaLista={this.props.cancellaDallaLista}
      />
    ));

    return (
      <div className="container">
        <ul className="list-group">{lista}</ul>
      </div>
    );
  }
}

export default TodoList;
