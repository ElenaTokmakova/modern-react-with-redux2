import React, { Component } from 'react';
import { connect } from 'react-redux'; 

class BookDetail extends Component {
	//add an inital check in the render method
	//when we first boot the app up, we are going to return with this warm up message
	//when we click on a book, it is going to update our app state
	//and the container will be rerendered	

	render() {

		if (!this.props.book) {
			return <div>Select a book to get started.</div>
		}

		return (
			<div>
				<h3>Details for:</h3>
				<div>Title: {this.props.book.title}</div>
				<div>Pages: {this.props.book.pages}</div>
			</div>
		);
	}
}

//helper function
//argument - app state
function mapStateToProps(state) {
	//what we are returning is going to show up as props inside of our BookDetail
	return {		
		//activeBook reducer is creating ActiveBook piece of state
		//this is why we are specifically referencing it here
		book: state.activeBook
	};
}

export default connect(mapStateToProps)(BookDetail);