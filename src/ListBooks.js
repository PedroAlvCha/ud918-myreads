import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'


class ListBooks extends Component {
  static propTypes = {
    onUpdateBookToShelf: PropTypes.func.isRequired,
    booksToList: PropTypes.array.isRequired
  }



  render(){
    const { onUpdateBookToShelf, booksToList } = this.props

    let booksCurrentlyReading
    booksCurrentlyReading = booksToList.filter((book) => (book.shelf === 'currentlyReading'))
    let booksWantToRead
    booksWantToRead = booksToList.filter((book) => (book.shelf === 'wantToRead'))
    let booksRead
    booksRead = booksToList.filter((book) => (book.shelf === 'read'))

    return(
      <div className='list-books'>
        <div className='list-books-title'>
          <h1>MyReads</h1>
        </div>
        <div className='list-books-content'>
          <div className='open-search'>
            <Link
              to='/search'
              className='open-search'
            />
          </div>
          <BookShelf
            shelfName='Currently Reading'
            shelfType='currentlyReading'
            booksOnShelf={booksCurrentlyReading}
            onUpdateBookToShelf={onUpdateBookToShelf}
          />
          <BookShelf
            shelfName='Want to Read'
            shelfType='wantToRead'
            booksOnShelf={booksWantToRead}
            onUpdateBookToShelf={onUpdateBookToShelf}
          />
          <BookShelf
            shelfName='Read'
            shelfType='read'
            booksOnShelf={booksRead}
            onUpdateBookToShelf={onUpdateBookToShelf}
          />
        </div>
      </div>
    )
  }
}

export default ListBooks
