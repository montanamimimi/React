import './App.css';
import { ThemeContext } from './Utils/ThemeContext';
import { Router } from './Components/Routes';

export const App = () => {

  return ( 
    <ThemeContext.Provider value="blue">
      <Router />
    </ThemeContext.Provider>   
)};


export default App;
