import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Book from './Book'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'



class SearchBooks extends Component {
  static propTypes = {
    onUpdateBookToShelf: PropTypes.func.isRequired,
    bookListFromSearch: PropTypes.array.isRequired,
    query: PropTypes.string.isRequired,
    onUpdateBookToQuery: PropTypes.func.isRequired
  }


  render(){
    const { onUpdateBookToShelf, bookListFromSearch, query, onUpdateBookToQuery } = this.props

    //console.log('booksToList',booksToList)

    let showingSearchBooks;
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      showingSearchBooks = bookListFromSearch.filter((book) => match.test(book.title || book.authors))
    } else {
      showingSearchBooks = bookListFromSearch
    }


    return(
      <div>
        <div className='search-books-bar'>
          <Link
            to='/'
            className='close-search'
          />
          <div className="search-books-input-wrapper">
            <input
              type='text'
              placeholder='Search Books'
              value={query}
              onChange={(event) => onUpdateBookToQuery(event.target.value)}
            />
          </div>
        </div>
        <div className='search-books-results'>
          <ol className = 'books-grid'>
            {showingSearchBooks.map((book) => (
              <li key={book.id} className='books-grid'>
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

export default SearchBooks
