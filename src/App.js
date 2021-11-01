import logo from './logo.svg';
import './App.css';
import Message from './Message';

const text = 'Test text';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h3>My first React app</h3>
          <Message text={text} />

      </header>
    </div>
  );
}

export default App;
