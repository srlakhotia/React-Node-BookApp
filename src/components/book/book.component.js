import React, {Component} from 'react';

class Book extends Component {
    constructor(props) {
        super(props);

        this.addBookToCart = this.props['add-book-to-cart'];

        this.addToCart = () => {
            this.addBookToCart({
                id: this.props['bk-id'],
                title: this.props['bk-title'],
                publisher: this.props['bk-publisher'],
                year: this.props['bk-year'],
                price: this.props['bk-price'],
                stock: this.props['bk-stock']
            });
        };
    }
    render() {
        return (
            <div className="book-tile">
                <p className="book-title"><strong>{this.props['bk-title']}</strong>, {this.props['bk-year']}</p>
                <p className="book-author">Author: {this.props['bk-author']}</p>
                <p className="book-price">Price: ${this.props['bk-price']}</p>
                <p className="book-stock">Stock: {this.props['bk-stock']} item(s)</p>
                <button
                    className="btn btn-default add-to-cart-button"
                    onClick={this.addToCart}
                    style = {{
                        position: 'absolute',
                        right: '13px',
                        top: 'calc(50% - 16px)'
                    }}
                    disabled={ this.props['bk-stock'] < 1 }
                >Add to cart</button>
            </div>
        )
    }
};

export default Book;