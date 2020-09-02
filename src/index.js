import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';

ReactDOM.render(
  <React.StrictMode>
    <p>Hola Mundo</p>
    {/* <App></App> */}
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// document.write('Hola');
