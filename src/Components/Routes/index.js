import Home from '../Home';
import Profile from '../Profile';
import BotsList from '../BotsList';
import Api from '../Api';
import Chat from '../Chat';
import {  BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import { PublicOutlet } from '../PublicRoute';
import { PrivateRoute } from '../PrivateRoute';
import { SignUp } from '../SignUp';
import { useEffect, useState } from 'react';
import { auth, messagesRef } from '../../services/firebase';
import { useDispatch } from 'react-redux';
import { signIn, signOut } from '../../Store/profile/actions';
import { onValue } from 'firebase/database';

export const Router = () => {

    const dispatch = useDispatch();
    const [msgs, setMsgs] = useState({});

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                dispatch(signIn());
            } else {
                dispatch(signOut());
            }
        });
        return unsubscribe;
    }, []);

    useEffect(() => {
        onValue(messagesRef, (snapshot) => {
            const newMsgs = {};
            snapshot.forEach((chatMsgsSnap) => {
                newMsgs[chatMsgsSnap.key] = chatMsgsSnap.val().messages || [];
            });
            setMsgs(newMsgs);
        });
    }, []);

    return (     
          <BrowserRouter>
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
              <Route path="/" element={<PublicOutlet />} >
                    <Route path="" element={<Home />} />                
              </Route>
              <Route path="/signup" element={<PublicOutlet />} >
                    <Route path="" element={<SignUp />} />                
              </Route>              
              <Route path="chats">
                <Route 
                  index 
                  element={
                    <PrivateRoute>
                      <BotsList msgs={msgs} />
                    </PrivateRoute>
                    } 
                />
                <Route 
                  path=":chatId" 
                  element={
                    <PrivateRoute>
                      <Chat msgs={msgs} />
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
          </BrowserRouter>      
    )    
}