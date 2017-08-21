import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  //key - a piece of state, value - the reducer itself 
  //(whatever gets retuned from the books_reducer function)
  //any key here ends up as a key on our global state
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
