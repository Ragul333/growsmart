import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userCreateReducer, userListReducer } from "./reducers/reducers";

const reducer = combineReducers({
    user:userCreateReducer,
    userList:userListReducer
})
const middleware = [thunk]
const store = createStore(reducer,composeWithDevTools(applyMiddleware(...middleware)))

export default store;