import React from 'react';
import ReactDOM from 'react-dom'
import './css/index.css'
import store from './Components/redux/redux'
import Panel from './Components/Panel/Panel'

let startRender = (state) => {
    ReactDOM.render(
        <Panel state={state} dispatch={store.dispatch.bind(store)} store={store}/>,
        document.getElementById('root')
    )

}

startRender(store.getState());

store.subscribe(() => {
    let state = store.getState();
    startRender(state)
});