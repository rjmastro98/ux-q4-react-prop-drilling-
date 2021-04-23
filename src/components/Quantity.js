import React from "react";

function Quantity(props) {
  return (
    <span>
      <button onClick={props.onDecrement}>-</button>
      {props.quantity}
      <button onClick={props.onIncrement}>+</button>
    </span>
  );
}

export default Quantity;
