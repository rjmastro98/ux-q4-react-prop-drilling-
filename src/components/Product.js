import React from "react";
import Quantity from "./Quantity";

function Product(props) {
  return (
    <span>
      Item Name - Item Price -
      <Quantity your props here />
    </span>
  );
}

export default Product;
