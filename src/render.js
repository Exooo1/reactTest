import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css'
import Panel from './Components/Panel/Panel';



export let startRen = (state) => {
  ReactDOM.render(
    <Panel state={state} />,
    document.getElementById('root')
  );
}