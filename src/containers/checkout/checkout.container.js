import React, {Component} from 'react';
import './checkout.container.css';
import CartItem from '../../components/cart-item/cartItem.component';
import {Link} from 'react-router-dom';

class Checkout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            "cart-items": [],
            "total-value": 0
        };
        this.updateCart = this.props['update-cart'];

        this.updateCartByItem = (id, item, removeAllOfItem) => {
            this.updateCart(id, item, removeAllOfItem);
            this.sanitizeValuesForCart();
            this.getTotal();
        }

        this.getTotal = () => {
            let total = 0;

            this.props["cart-items"].forEach((item) => {
                total += parseFloat(item.price);
            });

            this.setState({
                'total-value': total.toFixed(2)
            });
        }
    }

    componentWillMount() {
        this.sanitizeValuesForCart = () => {
            let tempCart = this.state["cart-items"];
            this.props["cart-items"].forEach((prop) => {
                let itemInd;
                if(this.state["cart-items"].some((item, ind) => {
                    if(item.id === prop.id) {
                        itemInd = ind;
                        return true;
                    }
                    return false;
                })) {
                    tempCart[itemInd].qty++;
                } else {
                    tempCart.push({
                        id: prop.id,
                        itemDetail: prop,
                        qty: 1
                    });
                }
            });
            this.setState({'cart-items': tempCart});
        };
        this.sanitizeValuesForCart();
        this.getTotal();
    }

    render() {
        let checkoutMapList = this.state['cart-items'].map((item, i) => {
            if(item.qty) {
                return (<li key={i} className="list-group-item">
                    <CartItem item={item} update-cart={this.updateCartByItem}></CartItem>
                </li>);
            }
            return false;
        });
        return (
            <div>
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <div className="checkout-cart-item row">
                            <div className="col-lg-8">Item Details</div>
                            <div className="col-lg-2">Quantity</div>
                            <div className="col-lg-2">Amount</div>
                        </div>
                    </div>
                    <ul className="list-group">
                        {checkoutMapList}
                        <li key="2" className="list-group-item row">
                            <div className="col-lg-10">Total</div>
                            <div className="col-lg-2">${this.state['total-value']}</div>
                        </li>
                    </ul>
                    <div className="panel-body">
                        <Link to='/order' className="btn btn-success pull-right">Checkout Now</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Checkout;