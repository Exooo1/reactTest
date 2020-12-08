import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css'
import Panel from './Components/Panel/Panel';
import Main from './Components/Main'


function App() {
  return (
    <div>
      <Main />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);