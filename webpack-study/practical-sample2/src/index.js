import React from 'react';
import ReactDom from 'react-dom';

function App() {
  return (
    <div className="container">
      <h3 className="title">webpack sample</h3>
    </div>
  )
}

ReactDom.render(<App />, document.getElementById('root'));