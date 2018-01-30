import React, {Component} from 'react';
import './order.container.css';
import {Link} from 'react-router-dom';

class OrderPage extends Component {
    constructor(props) {
        super(props);
        this.cartItems = this.props['cart-items'];
        this.updateStock = this.props['update-stock'];

        this.addBookToCart = (book) => {
            this.props['add-book-to-cart'](book);
        };

        this.placeOrder = () => {
            this.updateStock(this.cartItems);
        }
    }

    render() {
        return (
            <div>
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <div className="checkout-cart-item row">
                            <div className="col-lg-12">Enter Shipping Details</div>
                        </div>
                        </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <input type="text" required className="form-control" id="name" placeholder="Enter Name" />
                        </div>
                        <div className="form-group">
                            <textarea type="text" required className="form-control" id="address" placeholder="Enter Address"></textarea>
                        </div>
                        <div className="form-group">
                            <input type="text" required className="form-control" id="phone" pattern="/[0-9]/" placeholder="Enter Number" />
                        </div>
                        <Link to="/" type="submit" className="btn btn-success" onClick={this.placeOrder}>Place order</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default OrderPage;