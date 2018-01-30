import React, {Component} from 'react';
import Book from '../../components/book/book.component';
import './bookShelf.container.css';

class BookShelf extends Component {
    constructor(props) {
        super(props);
        this.addBookToCart = this.props['add-book-to-cart'];
    }

    render() {
        let mapBookList = this.props['book-list'].map((book, i) => {
            return (
                <li key={i} className="book-item">
                    <Book
                        bk-id={book.id}
                        bk-title={book.title}
                        bk-author={book.author}
                        bk-publisher={book.publisher}
                        bk-year={book.year}
                        bk-price={book.price}
                        bk-stock={book.stock}
                        add-book-to-cart={this.addBookToCart}
                    ></Book>
                </li>
            );
        });
        return (
            <ul>
                {mapBookList}
            </ul>
        )
    }
};

export default BookShelf;