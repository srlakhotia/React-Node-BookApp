import React, { Component } from 'react';
import './App.css';
import Checkout from './containers/checkout/checkout.container';
import BookShelf from './containers/bookShelf/bookShelf.container';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItemCount: 0
    }

    this.cartItems = [];

    this.goToCart = () => {

    }
  
    this.addBookToCart = (item) => {
      this.setState({cartItemCount: ++this.state.cartItemCount});
      this.cartItems.push(item.id)
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
      <li className="active"><a href="/">Book List</a></li>
      </ul>
      <button style={{"marginTop": "5px"}} className="btn btn-primary pull-right" onClick={this.goToCart()}>Checkout ({this.state.cartItemCount} items)</button>
      </div>
      </nav>
      <Router>
        <div>
          <Route exact path="/" render={(props) => <BookShelf {...props} add-book-to-cart={this.addBookToCart} />} />
          <Route strict path="/cart" component={Checkout} />
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
