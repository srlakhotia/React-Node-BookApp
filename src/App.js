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

    this.goToCart = () => {
      // document.location.href = '/cart';
    }
  
    this.addBookToCart = (item) => {
      let count = this.state.cartItemCount;
      let tempCartItemsVar = this.state.cartItems.slice();
      tempCartItemsVar.push(item);
      this.setState({cartItemCount: ++count});
      this.setState({cartItems: tempCartItemsVar })
    }
  }
  

  render() {
    return (
      <div>
      <nav className="navbar navbar-default">
      <div className="container-fluid">
      <div className="navbar-header">
      <a className="navbar-brand" href="/">My Bookstore</a>
      </div>
      <ul className="nav navbar-nav">
      <li><a href="/">Book List</a></li>
      </ul>

      <Link to='/cart' style={{"marginTop": "5px"}} className="btn btn-primary pull-right" onClick={this.goToCart}>Checkout ({this.state.cartItemCount} items)</Link>
      </div>
      </nav>
        <div>
          <Route exact path="/" render={(props) => <BookShelf {...props} add-book-to-cart={this.addBookToCart} />} ></Route>
          <Route strict path="/cart" render={(props) => <Checkout {...props} cart-items={this.state.cartItems} />} ></Route>
        </div>
      </div>
    );
  }
}

export default App;
