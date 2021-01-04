import { combineReducers, createStore } from 'redux';
import reducerProducts from "./products-reducer"
import reducerContacts from "./contacts-reducer"

let reducer = combineReducers({
    products: reducerProducts,
    cont: reducerContacts,
})

let store = createStore(reducer);

export default store;
