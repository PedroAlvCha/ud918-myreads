import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import logo from './logo.svg';
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import './App.css';
import * as BooksAPI from './utils/BooksAPI'

class App extends Component {
  state = {
    booksToList: [],
    booksFromSearch: [],
    query: ''
  }
  componentDidMount() {
    BooksAPI.getAll().then((booksToList) => {
      this.setState({ booksToList })
      //console.log('booksToListAtMount',booksToList)
    })

  }

  updateBookToShelf = (book, shelf) => {
    //console.log(book, shelf)
    book.shelf = shelf;
    BooksAPI.update(book, shelf).then(
      this.setState({
          booksToList: this.state.booksToList.filter((b) => b.id !== book.id).concat([book])
        })
    )
  }

  updateQuery = async query => {
    this.setState({ query: query.trim() })
    await BooksAPI.search(query, 100).then((booksGottenFromSearch) => {
      if(!Array.isArray(booksGottenFromSearch)){
          booksGottenFromSearch = []
      }
      this.setState({ booksFromSearch: booksGottenFromSearch })
    })
  }

  clearQuery = () => {
    this.setState({ query: '' })
  }

  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <ListBooks
            onUpdateBookToShelf={this.updateBookToShelf}
            booksToList={this.state.booksToList}
          />
        )}/>
        <Route path='/search' render={() => (
          <SearchBooks
            onUpdateBookToShelf={this.updateBookToShelf}
            bookListFromSearch={this.state.booksFromSearch}
            query={this.state.query}
            onUpdateBookToQuery={this.updateQuery}
          />
        )}/>
      </div>
    );
  }
}

export default App;
