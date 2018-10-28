//store saves the current state of the app
//the only way to change the state is by sending a signal to the store.
//The resulting state is a copy of the current state plus the new data.

import { createStore } from "redux";
import rootReducer from "../reducers/index";
const store = createStore(rootReducer);
export default store;

//may also pass in an initial state into the store creation.  
//Passing an initial state is useful for server side rendering e.g. taking info from a cache

//https://stackoverflow.com/questions/36619093/why-do-i-get-reducer-returned-undefined-during-initialization-despite-pr