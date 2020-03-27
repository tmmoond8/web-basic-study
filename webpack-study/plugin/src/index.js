import ReactDOM from 'react-dom';

function App() {
  return (
    <div>
      <h3>플러그인을 공부합시다.</h3>
      <p>다양한 플러그인을 사용하고, 유용성을 느껴봅시다.</p>
      <h4>{APP_VERSION}</h4>
      <h5>{VIENNA}</h5>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));