import './App.css';
import React from 'react';
import Home from './Home';
import Profile from './Profile';
import BotsList from './BotsList';
import Chat from './Chat';
import {  BrowserRouter, Link, Routes, Route } from 'react-router-dom'

export const App = () => (
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


    </Routes>
  </BrowserRouter>
);


export default App;
