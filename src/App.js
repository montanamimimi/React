import './App.css';
import Home from './Components/Home';
import Profile from './Components/Profile';
import BotsList from './Components/BotsList';
import Api from './Components/Api';
import Chat from './Components/Chat';
import {  BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import { ThemeContext } from './Utils/ThemeContext';
import { PublicRoute } from './Components/PublicRoute';
import { PrivateRoute } from './Components/PrivateRoute';
import { Router } from './Components/Routes';



export const App = () => {

  return ( 

    <ThemeContext.Provider value="blue">

      <Router />
      {/* <BrowserRouter>
        <ul class="main-menu"> 
          <li class="main-menu__item">
            <Link to="/">Home</Link>
          </li>
          <li class="main-menu__item">
            <Link to="/chats">Chats</Link>
          </li>
          <li class="main-menu__item">
            <Link to="/api">Api</Link>
          </li>
          <li class="main-menu__item">
            <Link to="/profile">Profile</Link>
          </li>
        </ul>

        <Routes>
          <Route 
            path="/" 
            element={
              <PublicRoute> 
                <Home /> 
              </PublicRoute>} 
          />
          <Route path="chats">
            <Route 
              index 
              element={
                <PrivateRoute>
                  <BotsList />
                </PrivateRoute>
                } 
            />
            <Route 
              path=":chatId" 
              element={
                <PrivateRoute>
                  <Chat />
                </PrivateRoute>
                } 
          />
          </Route>        
          <Route path="/api" element={<Api />} />
          <Route 
            path="/profile" 
            element={
              <PrivateRoute> 
                <Profile /> 
              </PrivateRoute>} 
          />
          <Route path="*" element={<h3>404</h3>} />

        </Routes>
      </BrowserRouter> */}
    </ThemeContext.Provider> 
  
)};


export default App;
