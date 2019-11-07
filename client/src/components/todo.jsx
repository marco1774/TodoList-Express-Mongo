import React from "react";

export default function Todo(props) {
  return (
    <li
      className="list-group-item shadow p-3 mb-2 bg-white rounded"
      key={props.Id}
    >
      {props.Id}) {props.testo}
      <button
        type="button"
        className="btn btn-danger float-right"
        onClick={() => props.cancellaDallaLista(props.Id)}
      >
        Cancella
      </button>
    </li>
  );
}
