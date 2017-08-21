//the only purpose of app is to render the BookList and BookDetail
//it is a component, not a container - it does not care about the Redux app state
import React, { Component } from 'react';
import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';

export default class App extends Component {
  render() {
    return (
      <div>	
      	<BookList />
      	<BookDetail />
      </div>
    );
  }
}
