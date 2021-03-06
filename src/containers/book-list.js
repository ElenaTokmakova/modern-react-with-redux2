//the only purpose of this component is to render a list of books
//we need to get the list of books from our app's state
//we need to make this list of kooks show inside of our container

import React, { Component } from 'react';

//if we use curly braces, we pull off a single property
import { connect } from 'react-redux';

//import the action creator
import { selectBook } from '../actions/index';

//import a function that makes sure that the action 
//generated by the function creator ends up flowing 
//through all the different reducers
//we take the return value from selectBook and make sure 
//it flow through different reducers 
import { bindActionCreators } from 'redux'; 

//only this component cares about the list of books
class BookList extends Component {

	renderList(){
		//map over the array of books, and for each book in the array create/return an li
		//the text inside the li is the title of the book, and the id of each li is also the title
		//we can be sure the title is relatively unique
		return this.props.books.map((book) => {
			return (
				<li 
				key={book.title} 
				onClick={() => this.props.selectBook(book)}
				className="list-group-item">{book.title}</li>
			);
		});

	}

	render(){
		return(
			<ul className="list-group col-sm-4">
				{/*pull the list building to a separate function*/}
				{this.renderList()}
			</ul>
		)
	}
}

//the purpose is to take the app's state as an argument
//the state contains an array of books and an active book
//whatever gets returned from here will show up as props inside of BookList
//it will be set equal to this.props of our component
//the function takes in the application state, the entire thing
//our containers are the link between React and Redux
function mapStateToProps(state) {
	//usually we end up returning an object from this
	return {
		//we want the property to be called books
		//as we are making reference to this.props.books
		//we want the value to be the list of books off of our state
		//this is the connection between Redux and our component
		books: state.books

	};
}

//the connect function is what actually says
//take this component, take this mapStateToProps() function
//and produce/return a container
//container is a component that is aware of the state contained by Redux
//that's what we want to export from our file, that's why we deleted the export of class above
//we don;t want to export the plain component, we want to export the container

//anything returned from this function will end up as props on the BookList container
//we are passing an object with key and value of selectBook
//same as previous functions
//first argument is available as props to our container: this.props.selectBooks
//that will call out action creator
function mapDispatchToProps(dispatch){
	//whenever selectBook is called, result should be passed to all of our reducers
	//that is what bindActionCreators is doing along with dispatch
	//the result of action creators flows through the dispatch function
	//dispatch receives actions and as a funnels spits them back to all the different reducers
	//the select book value is the actual action creator we imported at the top
	//selectBook is a plain funciton, nothing special about it
	//it returns a plain JavaScript object
	//if we just get this object back, we will not know what to do with it
	//the only part of our application that cares about it is the reducers
	//the purpose of bindActionCretors and dispatch is to make sure this object flows through the reducers
	return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//promote BookList from a component to a container
//it needs to know about this new dispatch method, selectBook
//make it available as a prop
//action creator is now available to be called inside the container as well


export default connect (mapStateToProps, mapDispatchToProps)(BookList);


//whenever our app state changes - loading a list of books from a server, or user clicks on something
//the container will instantly rerender automatically (!)

//whenever the app state changes, the object int he state functions will be assigned as props to the component