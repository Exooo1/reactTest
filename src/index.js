import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css'
import Panel from './Components/Panel/Panel'

function App() {
  return (
    <div>
      <Panel/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);