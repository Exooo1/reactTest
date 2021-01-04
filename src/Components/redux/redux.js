import { combineReducers, createStore } from 'redux';
import reducerProducts from "./products-reducer"

let reducer = combineReducers({
    products: reducerProducts,
})

let store = createStore(reducer);

export default store;
