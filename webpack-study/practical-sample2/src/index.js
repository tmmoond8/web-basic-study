import React from 'react';
import ReactDom from 'react-dom';
import style from './index.css';
import Txt from './assets/sample.txt';
import Json from './assets/sample.json';
import Png from './assets/sample.png';

function App() {
  return (
    <div className="container">
      <h3 className="title">webpack sample</h3>
      <pre>{Txt}</pre>
      <p><b>vienna coffee house</b>{Json['vienna coffee house']}</p>
      <img src={Png}/>
    </div>
  )
}

ReactDom.render(<App />, document.getElementById('root'));