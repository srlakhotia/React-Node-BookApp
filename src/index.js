import React from 'react';
import ReactDOM from 'react-dom';
// import Express from 'express';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

// console.log(express)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
