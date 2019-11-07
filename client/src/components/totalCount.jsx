import React from "react";

export default function TotalCount(props) {
  return (
    <div className="d-flex justify-content-center">
      <h2>
        Totale rimanenti{" "}
        <span className="badge badge-secondary">{props.totalCount}</span>
      </h2>
    </div>
  );
}
