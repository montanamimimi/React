import './App.css';
import Home from './Components/Home';
import Profile from './Components/Profile';
import BotsList from './Components/BotsList';
import { useEffect,  useState} from 'react';
import Chat from './Components/Chat';
import {  BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import { ThemeContext } from './Utils/ThemeContext';



export const App = () => {

  return ( 

    <ThemeContext.Provider value="blue">
      <BrowserRouter>
        <ul class="main-menu"> 
          <li class="main-menu__item">
            <Link to="/">Home</Link>
          </li>
          <li class="main-menu__item">
            <Link to="/chats">Chats</Link>
          </li>
          <li class="main-menu__item">
            <Link to="/profile">Profile</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="chats">
            <Route index element={<BotsList />} />
            <Route path=":chatId" element={<Chat />} />
          </Route>        
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<h3>404</h3>} />

        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider> 
  
)};


export default App;
