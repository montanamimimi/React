import './App.css';
import Form from './Form';
import BotsList from './BotsList';


function App() {

  return (
    <div className="App">
      <div class="app-list">
        <BotsList />
      </div>
      <div class="app-main">
          <h3>Lets chat! </h3>          
          <Form />
      </div>

      
    </div>
  );
}

export default App;
