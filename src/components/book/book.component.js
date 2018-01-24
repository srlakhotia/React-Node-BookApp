import React, {Component} from 'react';

class Book extends Component {
    constructor(props) {
        super(props);

        this.addToCart = () => {
            this.props['add-book-to-cart']({
                id: this.props['bk-id']
            });
        };
    }
    render() {
        return (
            <div className="book-tile">
                <p className="book-title"><strong>{this.props['bk-title']}</strong>, {this.props['bk-year']}</p>
                <p className="book-author">Author: {this.props['bk-author']}</p>
                <p className="book-price">Price: ${this.props['bk-price']}</p>
                <button
                    className="btn btn-default add-to-cart-button"
                    onClick={this.addToCart}
                    style = {{
                        position: 'absolute',
                        right: '13px',
                        top: 'calc(50% - 16px)'
                    }}
                >Add to cart</button>
            </div>
        )
    }
};


export default Book;