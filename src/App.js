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
        if (item.id === id && item.quantity < 1000) {
          return { ...item, quantity: item.quantity + 1 };
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
    this.setState((state) => {
      const newList = state.cart.map((item) => {
        if (item.id === id && item.quantity > 0) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
      return {
        cart: newList,
      };
    });
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
              <Product
                item={item}
                onIncrementQuantity={this.handleIncrementQuantity}
                onDecrementQuantity={this.handleDecrementQuantity}
              />
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
                this.setState({
                  isOnMailingList: event.target.checked,
                })
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
