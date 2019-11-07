import React, { Component } from "react";
import Todo from "./todo";

export class TodoList extends Component {
  render() {
    const lista = this.props.coseDaFareArray.map((elemento, index) => (
      <Todo
        testo={elemento.testo}
        _id={elemento._id}
        Id={index + 1}
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
