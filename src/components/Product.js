import React from "react";
import Quantity from "./Quantity";

function Product(props) {
  let handleIncrement = () => {
    props.onIncrementQuantity(props.item.id);
  };
  let handleDecrement = () => {
    props.onDecrementQuantity(props.item.id);
  };
  return (
    <span>
      {props.item.name} - {props.item.price}
      <Quantity
        quantity={props.item.quantity}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </span>
  );
}

export default Product;
