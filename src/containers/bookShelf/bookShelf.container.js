import React, {Component} from 'react';
import Book from '../../components/book/book.component';
import './bookShelf.container.css';

class BookShelf extends Component {
    constructor(props) {
        super(props);
        
        this.bookList = [{
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

        this.addBookToCart = (book) => {
            this.props['add-book-to-cart'](book);
        };
    }

    render() {
        let mapBookList = this.bookList.map((book, i) => {
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

export default BookShelf ;