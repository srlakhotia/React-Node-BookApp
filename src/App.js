import React, { Component } from 'react';
import './App.css';
import Checkout from './containers/checkout/checkout.container';
import BookShelf from './containers/bookShelf/bookShelf.container';
import OrderPage from './containers/order/order.container';
import {Route, Link} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);

    let bookList = [{
        id: 1,
        title: 'The Harry Potter series',
        author: 'J. K. Rowling',
        publisher: 'Arthur A. Levine Books',
        year: '2009',
        price: 125.49,
        stock: 10
    },{
        id: 2,
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        publisher: 'Mariner Books; 50th Anniversary ed. edition',
        year: '2005',
        price: 26.92,
        stock: 3
    }, {
        id: 3,
        title: 'A Game of Thrones (A Song of Ice and Fire, Book 1)',
        author: 'George R. R. Martin',
        publisher: 'Bantam',
        year: '2011',
        price: 25.99,
        stock: 20
    }, {
        id: 4,
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        publisher: 'HarperOne',
        year: '1993',
        price: 16.39,
        stock: 2
    }, {
        id: 5,
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        publisher: 'Grand Central Publishing',
        year: '1988',
        price: 20.14,
        stock: 0
    }];

    this.state = {
      cartItemCount: 0,
      cartItems: [],
      bookList: bookList
    }

    this.updateCart = (id, item, removeAllOfItem) => {
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
      } else if(removeAllOfItem) {
        for(let i = 0; i < cartItems.length; i++) {
          if(cartItems[i].id === id) {
            cartItems.splice(i, 1);
            i--;
          }
        }
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

    this.updateStockOnOrderConf = (reducedStockArray) => {
      reducedStockArray.forEach((item) => {
        bookList.map((book) => {
          if(book.id === item.id) {
            --book.stock;
          }
          return false;
        });
      });
      this.setState({
        bookList: bookList,
        cartItemCount: 0,
        cartItems: []
      })
    };
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
          <Route exact path="/" render={(props) => <BookShelf {...props} book-list={this.state.bookList} add-book-to-cart={this.addBookToCart} />} ></Route>
          <Route strict path="/cart" render={(props) => <Checkout {...props} cart-items={this.state.cartItems} update-cart={this.updateCart} />} ></Route>
          <Route strict path="/order" render={(props) => <OrderPage {...props} cart-items={this.state.cartItems} update-stock={this.updateStockOnOrderConf} />} ></Route>
        </div>
      </div>
    );
  }
}

export default App;
