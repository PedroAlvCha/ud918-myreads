import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onUpdateBookToShelf: PropTypes.func.isRequired
  }


  render() {
    const { book, onUpdateBookToShelf } = this.props
    return(
      <div key={book.industryIdentifiers[0].identifier} className='book'>
        <div className='book-top' style={{
            backgroundImage: `url(${book.imageLinks.thumbnail})`
        }}>
          <div className='book-shelf-changer'>
            <select
               value={book.shelf}
               onChange={(event) => {
                 onUpdateBookToShelf(book, event.target.value);
               }}
            >
              <option value='none' disabled>Move to...</option>
              <option value='currentlyReading'>Currently Reading</option>
              <option value='wantToRead'>Want to Read</option>
              <option value='read'>Read</option>
              <option value='none'>None</option>
            </select>
          </div>
        </div>
        <div className='book-title'>{book.title}</div>
        <div className='book-authors'>{book.authors}</div>
      </div>
    )
  }
}

export default Book
