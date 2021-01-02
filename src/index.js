import React from 'react';
import ReactDOM from 'react-dom'
import './css/index.css'
import store, { subscribe } from './Components/State/State'
import Panel from './Components/Panel/Panel'

let startRender = (state) => {
    ReactDOM.render(
        <Panel state={store.getState()} dispatch={store.dispatch.bind(store)} />,
        document.getElementById('root')
    );
}

startRender(store.getState);

subscribe(startRender);