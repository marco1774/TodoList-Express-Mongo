import React from "react";

export default function TodoForm(props) {
  let input;
  return (
    <div className="container">
      <div className="row">
        <div className="input-group mb-3 shadow p-3 mb-5 bg-white rounded">
          <input
            ref={node => {
              input = node;
            }} //prende il nodo input e lo mette in input.
            type="text"
            className="form-control"
            placeholder="Aggiungi alla lista..."
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <div className="input-group-append">
            <button
              // prende il valore di input e lo passa al metodo.
              onClick={() => {
                props.aggiungiAllaLista(input.value);
                input.value = "";
              }}
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              Aggiungi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
