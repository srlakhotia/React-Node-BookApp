import React, {Component} from 'react';

class CartItem extends Component {
    constructor(props) {
        super(props);
        this.item = this.props.item
        this.itemDetail = this.item.itemDetail;
        this.updateCart = this.props['update-cart'];
        this.state = {
            qty: this.item.qty
        }
    }

    updateQuantity = (e) => {
        let newQuantity = e.target.value;
        if(newQuantity > this.itemDetail.stock) {
            return;
        }
        this.item.qty = parseInt(newQuantity, 10);
        this.setState({
            qty: this.item.qty
        });

        this.updateCart(this.item.id, this.item);
    };

    render() {
        return (
            <div className="checkout-cart-item row">
                <div className="col-lg-8">
                    <p>{this.itemDetail.title}</p>
                    <p>Stock Left: {this.itemDetail.stock}</p>
                </div>
                <div className="col-lg-2 form-group">
                    <input min="1" className="form-control" type="number" onChange={this.updateQuantity} value={this.state.qty} />
                </div>
                <div className="col-lg-2">
                    ${(this.itemDetail.price * this.state.qty).toFixed(2)}
                </div>
            </div>
        );
    }
}

export default CartItem;