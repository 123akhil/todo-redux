import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

//Import Reducer
import { todosReducers } from "./reducers/todoReducer";

const reducer = combineReducers({
    todos: todosReducers//reducer
});

const middleware = [thunk];

const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;