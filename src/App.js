import React, { Component } from 'react';
import './App.css';
import Checkout from './containers/checkout/checkout.container';
import BookShelf from './containers/bookShelf/bookShelf.container';
import {Route, Link} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItemCount: 0,
      cartItems: []
    }

    this.updateCart = (id, item) => {
      let cartItems = this.state.cartItems;
      let currentItemCount = 0;
      this.state.cartItems.forEach((item)=> {
        if(item.id === id) {
          currentItemCount++;
        }
        return false;
      });

      if(currentItemCount < item.qty) {
        cartItems.push(item.itemDetail);
      } else {
        cartItems.some((item, idx) => {
          if(item.id === id) {
            cartItems.splice(idx, 1);
            return true;
          }
          return false;
        });
      }

      this.setState({
        cartItemCount: cartItems.length,
        cartItems: cartItems
      });
    };

    this.addBookToCart = (item) => {
      let count = this.state.cartItemCount;
      let tempCartItemsVar = this.state.cartItems.slice();

      const addedId = item.id;
      const existingLength = tempCartItemsVar.filter((cartItem) => {
        return cartItem.id === addedId;
      }).length;

      if(existingLength === item.stock) {
        return;
      }

      tempCartItemsVar.push(item);
      this.setState({ cartItemCount: ++count });
      this.setState({cartItems: tempCartItemsVar });
    }
  }
  

  render() {
    return (
      <div>
      <nav className="navbar navbar-default">
      <div className="container-fluid">
      <div className="navbar-header">
      <Link className="navbar-brand" to="/">My Bookstore</Link>
      </div>
      <ul className="nav navbar-nav">
        <li><Link to="/">Book List</Link></li>
      </ul>

      <Link to='/cart' style={{"marginTop": "5px"}} className="btn btn-primary pull-right">Checkout ({this.state.cartItemCount} items)</Link>
      </div>
      </nav>
        <div>
          <Route exact path="/" render={(props) => <BookShelf {...props} add-book-to-cart={this.addBookToCart} />} ></Route>
          <Route strict path="/cart" render={(props) => <Checkout {...props} cart-items={this.state.cartItems} update-cart={this.updateCart} />} ></Route>
        </div>
      </div>
    );
  }
}

export default App;
