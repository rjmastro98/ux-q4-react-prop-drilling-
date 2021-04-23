import React, { Component } from "react";
import Product from "./components/Product";
import shortid from "shortid";

import "./App.css";

class App extends Component {
  state = {
    cart: [
      {
        id: shortid.generate(),
        name: "scarf",
        price: "11.50",
        quantity: 1,
      },
      {
        id: shortid.generate(),
        name: "Shirt",
        price: "9.80",
        quantity: 1,
      },
      {
        id: shortid.generate(),
        name: "pants",
        price: "25.50",
        quantity: 1,
      },
    ],
    isOnMailingList: false,
  };

  handleIncrementQuantity = (id) => {
    this.setState((state) => {
      const newList = state.cart.map((item) => {
        if (item.id === id) {
          return Object.assign({}, item, { quantity: item.quantity + 1 });
        } else {
          return item;
        }
      });

      return {
        cart: newList,
      };
    });
  };

  handleDecrementQuantity = (id) => {
    // Your Code Here!
    // Do the same as handleIncrementQuantity, but decrement it instead
    // Remember that you should not decrement below zero!
  };

  handleCheckout = () => {
    alert(
      "Purchase Completed!" +
        (this.state.isOnMailingList
          ? " You will be added to the mailing list!"
          : "")
    );
  };

  render() {
    return (
      <div className="app">
        <h2>Shopping Cart</h2>
        <ul className="list">
          {this.state.cart.map((item) => (
            <li key={item.id}>
              <Product your props here />
            </li>
          ))}
        </ul>
        <div>
          <label>
            <input
              type="checkbox"
              defaultChecked={this.stateIncisOnMailingList}
              onChange={(event) =>
                // Your code here!
                // Use setState to update the flag in state for the checkbox
                // Hint: use event.target.checked
                this.setState()
              }
            />
            Sign me up for the mailing list!
          </label>
        </div>
        <button onClick={this.handleCheckout}>Purchase</button>
      </div>
    );
  }
}

export default App;
