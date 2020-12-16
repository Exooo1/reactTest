import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css'
import Panel from './Components/Panel/Panel';
import state from './Components/State/State'

function App() {

  return (
    <div>
      <Panel state={state} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);