import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book'

class BookShelf extends Component {
  static propTypes = {
    shelfName: PropTypes.string.isRequired,
    shelfType: PropTypes.string.isRequired,
    booksOnShelf: PropTypes.array.isRequired,
    onUpdateBookToShelf: PropTypes.func.isRequired
  }


  render(){
    const { shelfName, shelfType, booksOnShelf, onUpdateBookToShelf } = this.props
    return(
      <div className='bookshelf'>
        <div className='bookshelf-title'>{shelfName}</div>
        <div className = 'bookshelf-books'>
          <ol className = 'books-grid'>
            {booksOnShelf.map((book) => (
              <li key={book.industryIdentifiers[0].identifier} className='books-grid'>
                <Book
                  book={book}
                  onUpdateBookToShelf={onUpdateBookToShelf}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf
