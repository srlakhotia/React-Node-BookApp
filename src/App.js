import React, { Component } from 'react';
import './App.css';
import BookShelf from './components/bookShelf/bookShelf.component';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItemCount: 0
    }

    this.cartItems = [];

    this.goToCart = () => {
     //Add code to go to cart 
    }
  
    this.addBookToCart = (item) => {
      //Addbookto cartItems
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
            <button style={{"marginTop": "5px"}} className="btn btn-primary pull-right" onClick={this.goToCart()}>Checkout ({this.state.cartItemCount})</button>
          </div>
        </nav>
        <BookShelf add-book-to-cart={this.addBookToCart}></BookShelf>
      </div>
    );
  }
}

export default App;
