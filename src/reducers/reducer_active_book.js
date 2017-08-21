//produces a new piece of application state whenever 
//'BOOK_SELECTED' action is triggered

//all reducers get two arguments: the current state and action
//state argument is not application state
//only the state this reducer is responsible for
//the same state that is produced by this reducer
//is flowing back to it whenever an action occurs
//our reducer is going to be called whenever an action is dispatched by our app
//funciton is going to get called all the time
//even when the action does not concern any particular reducer
//if this reducer does not care about the action,
//just pass the state back through - the base case(!)
//most reducers are set up with JavaScript switch statements
//the switch statement is going to look at the action type
//if it is the one we care about, we return the new state

//All Reducers get two arguments” the current state and action
//Redux does not allow us to return undefined from a reducer
//It will throw an error, so we must always return a value, so set state to null
//This is useful when nothing is selected when the app has just loaded
//do not mutate the state! We want to return a fresh object

//when the app first boots up, we do not have any app state
//our app state is assembled entirely by our reducers
//Redux sends booting up actions through the reducers by default
//we hit return state, in which case state is null
//when the app first boots up, our activeBook piece of state is going to be null
//accessing properties of null throws an error


export default function(state = null, action){
	switch(action.type) {
	case 'BOOK_SELECTED':
		return action.payload;
	}
	return state;

}