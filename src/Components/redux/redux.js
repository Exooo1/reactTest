import { combineReducers, createStore } from 'redux';
import reducerProducts from "./products-reducer"
import reducerContacts from "./contacts-reducer"

const reducer = combineReducers({
    products: reducerProducts,
    contacts: reducerContacts,
})

let store = createStore(reducer);

export default store;
