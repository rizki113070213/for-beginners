// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

// --------------------- Functional Components Practice ----------------------
import React from "react";
import ReactDOM from "react-dom";

function MyInfo() {
  return(
    <div>
      <h1>Muhammad Rizki</h1>
      <p>A football lover.</p>
      <ul>
        <li>Raja Ampat</li>
        <li>Paris</li>
        <li>Munich</li>
      </ul>
    </div>
  );
}

ReactDOM.render(<MyInfo />, document.getElementById('root'));
