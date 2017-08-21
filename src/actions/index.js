//the goal is to let the user click on a book and see the details
//we need to define an actions creator
//and call it whenever a book item is clicked on
//a single action creator
//an action creator is just a function
//book is an object with a title
//make sure that we export the function
//we need to make sure that the action that gets returned from it 
//ends up running through all of our reducers
//we can't just call this function and expect the action to show up in the right place
//we need to make sure this action creator is wired up to Redux
//bind the selectBook action to the BookList Component


export function selectBook(book) {
	//selectBook is an ActionCreator, it needs to return an action
	//an object with a type property
	//two values: a type and a payload
	//payload is a piece of data that describes the action
	//payload is optional
	//type is always uppercase
	//usually types are pulled to a separate file
	
	return {
		//it can a string or a variable
		type: 'BOOK_SELECTED',
		payload: book
	};
}



